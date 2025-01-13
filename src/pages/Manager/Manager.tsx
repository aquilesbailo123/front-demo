// Manager.tsx

import React, { useState, useEffect, useRef } from 'react';
import { ALL_PRODUCTS, Product } from '../../assets/products';
import AdminNavbar from '../../components/admin/AdminNavbar/AdminNavbar';
import AdminBack from '../../components/admin/AdminBack/AdminBack';
import { FaEdit, FaTrash } from 'react-icons/fa'; // <-- Import React Icons
import './Manager.css';

// Estructura de cada fila en la lista de productos
interface ProductRow {
      product: Product;
      amount: number; // Para la cantidad solicitada
}

function Manager() {
      // Estado principal: filas (cada fila contiene un producto)
      const [rows, setRows] = useState<ProductRow[]>([]);

      // Búsqueda para la entrada principal de nuevos productos
      const [searchTerm, setSearchTerm] = useState<string>('');

      // Recomendaciones según el término de búsqueda
      const [recommendations, setRecommendations] = useState<Product[]>([]);

      // Para navegar las recomendaciones con flechas
      const [selectedIndex, setSelectedIndex] = useState<number>(-1);

      // Modal: índice de la fila que se está editando
      const [editingRowIndex, setEditingRowIndex] = useState<number | null>(null);

      // Modal: búsqueda interna para reemplazar producto
      const [modalSearchTerm, setModalSearchTerm] = useState<string>('');
      const [modalRecommendations, setModalRecommendations] = useState<Product[]>([]);

      // Guardamos la cantidad que se está editando en el modal
      const [editAmount, setEditAmount] = useState<number>(1);

      // Ref para el input principal
      const searchInputRef = useRef<HTMLInputElement | null>(null);

      // Refs para cada item de recomendación (para hacer scroll automático)
      const recommendationItemsRef = useRef<(HTMLDivElement | null)[]>([]);

      /****************************************
       * Efecto: Enfocar el input principal al montar
       ****************************************/
      useEffect(() => {
            if (searchInputRef.current) {
                  searchInputRef.current.focus();
            }
      }, []);

      /****************************************
       * Buscar coincidencias en ALL_PRODUCTS
       ****************************************/
      function searchInProducts(term: string, products: Product[]): Product[] {
            const lowerTerm = term.toLowerCase();

            const matched = products.filter((p) => {
                  const directMatch =
                        p.name.toLowerCase().includes(lowerTerm) ||
                        p.part_number.toLowerCase().includes(lowerTerm) ||
                        p.description.toLowerCase().includes(lowerTerm);

                  if (directMatch) return true;

                  // Buscar en equivalentes
                  if (p.equivalent_products && p.equivalent_products.length > 0) {
                        const eqMatches = p.equivalent_products.some((eqID) => {
                              const eqProd = products.find((pr) => pr.id === eqID);
                              if (!eqProd) return false;
                              return (
                                    eqProd.name.toLowerCase().includes(lowerTerm) ||
                                    eqProd.part_number.toLowerCase().includes(lowerTerm) ||
                                    eqProd.description.toLowerCase().includes(lowerTerm)
                              );
                        });
                        return eqMatches;
                  }
                  return false;
            });

            // Ordenar (básico) según la posición del término en el nombre
            return matched.sort((a, b) => {
                  const idxA = a.name.toLowerCase().indexOf(lowerTerm);
                  const idxB = b.name.toLowerCase().indexOf(lowerTerm);
                  return idxA - idxB;
            });
      }

      /****************************************
       * Efecto: Actualizar recomendaciones (input principal)
       ****************************************/
      useEffect(() => {
            if (searchTerm.trim() === '') {
                  setRecommendations([]);
                  setSelectedIndex(-1);
                  return;
            }
            const found = searchInProducts(searchTerm, ALL_PRODUCTS);
            setRecommendations(found);
            setSelectedIndex(-1);
      }, [searchTerm]);

      /****************************************
       * Efecto: Actualizar recomendaciones (en modal)
       ****************************************/
      useEffect(() => {
            if (modalSearchTerm.trim() === '') {
                  setModalRecommendations([]);
                  return;
            }
            const found = searchInProducts(modalSearchTerm, ALL_PRODUCTS);
            setModalRecommendations(found);
      }, [modalSearchTerm]);

      /****************************************
       * Efecto: Scroll hacia el item seleccionado
       ****************************************/
      useEffect(() => {
            if (
                  selectedIndex >= 0 &&
                  selectedIndex < recommendationItemsRef.current.length
            ) {
                  recommendationItemsRef.current[selectedIndex]?.scrollIntoView({
                        behavior: 'smooth',
                        block: 'nearest',
                  });
            }
      }, [selectedIndex]);

      /****************************************
       * Teclas en el input principal
       ****************************************/
      function handleKeyDownMain(e: React.KeyboardEvent<HTMLInputElement>) {
            if (recommendations.length === 0) return;

            if (e.key === 'ArrowDown') {
                  e.preventDefault();
                  setSelectedIndex((prev) => {
                        const next = prev + 1;
                        return next >= recommendations.length ? recommendations.length - 1 : next;
                  });
            } else if (e.key === 'ArrowUp') {
                  e.preventDefault();
                  setSelectedIndex((prev) => {
                        const next = prev - 1;
                        return next < 0 ? 0 : next;
                  });
            } else if (e.key === 'Enter') {
                  e.preventDefault();
                  // Si hay un índice seleccionado, usarlo; de lo contrario, usar el primer producto
                  if (selectedIndex >= 0 && selectedIndex < recommendations.length) {
                        handleSelectProduct(recommendations[selectedIndex]);
                  } else if (recommendations.length > 0) {
                        handleSelectProduct(recommendations[0]);
                  }
            }
      }

      /****************************************
       * Agregar un producto a la lista
       ****************************************/
      function handleSelectProduct(product: Product) {
            setRows((prev) => [...prev, { product, amount: 1 }]);
            setSearchTerm('');
            setRecommendations([]);
            setSelectedIndex(-1);
      }

      /****************************************
       * Click en el row => Abrir modal
       ****************************************/
      function handleRowClick(index: number) {
            setEditingRowIndex(index);
            setModalSearchTerm('');
            setModalRecommendations([]);
            setEditAmount(rows[index].amount);
      }

      /****************************************
       * Cambiar cantidad en la fila (input)
       ****************************************/
      function handleRowAmountChange(e: React.ChangeEvent<HTMLInputElement>, index: number) {
            const newValue = parseInt(e.target.value);
            setRows((prev) => {
                  const newRows = [...prev];
                  newRows[index].amount = newValue;
                  return newRows;
            });
      }

      /****************************************
       * Reemplazar producto (equivalentes)
       ****************************************/
      function handleReplaceWithEquivalent(eqID: number) {
            if (editingRowIndex === null) return;
            setRows((prev) => {
                  const newRows = [...prev];
                  const product = ALL_PRODUCTS.find((p) => p.id === eqID);
                  if (product) {
                        newRows[editingRowIndex] = {
                              ...newRows[editingRowIndex],
                              product,
                        };
                  }
                  return newRows;
            });
      }

      /****************************************
       * Reemplazar producto (modal)
       ****************************************/
      function handleReplaceModal(product: Product) {
            if (editingRowIndex === null) return;
            setRows((prev) => {
                  const newRows = [...prev];
                  newRows[editingRowIndex] = {
                        ...newRows[editingRowIndex],
                        product,
                  };
                  return newRows;
            });
            setModalSearchTerm('');
            setModalRecommendations([]);
      }

      /****************************************
       * Eliminar fila
       ****************************************/
      function handleRemoveRow(index: number) {
            setRows((prev) => prev.filter((_, i) => i !== index));
      }

      /****************************************
       * Copiar lista (IDs en JSON) al portapapeles
       ****************************************/
      function handleCopyList() {
            const toCopy = JSON.stringify(rows.map((r) => r.product.id));
            navigator.clipboard.writeText(toCopy).catch((err) => {
                  console.error('No se pudo copiar:', err);
            });
      }

      /****************************************
       * Pegar lista (IDs en JSON) desde portapapeles
       ****************************************/
      async function handlePasteList() {
            try {
                  const text = await navigator.clipboard.readText();
                  if (!text) return;

                  const parsedIDs: number[] = JSON.parse(text);
                  if (Array.isArray(parsedIDs)) {
                        const newRows: ProductRow[] = [];
                        parsedIDs.forEach((id) => {
                              const p = ALL_PRODUCTS.find((ap) => ap.id === id);
                              if (p) newRows.push({ product: p, amount: 1 });
                        });
                        setRows(newRows);
                  }
            } catch (err) {
                  console.error('Error al pegar:', err);
            }
      }

      /****************************************
       * Guardar cambios de la cantidad en el modal
       ****************************************/
      function handleSaveModal() {
            if (editingRowIndex === null) return;
            setRows((prev) => {
                  const newRows = [...prev];
                  newRows[editingRowIndex].amount = editAmount;
                  return newRows;
            });
            setEditingRowIndex(null);
      }

      /****************************************
       * Guardar "orden" (falso submit)
       ****************************************/
      function handleSaveOrder() {
            // Solo un placeholder, no hace nada
            // eslint-disable-next-line @typescript-eslint/no-empty-function
            () => {};
      }

      return (
            <div className="manager-main-container">
                  <AdminNavbar />
                  <AdminBack />

                  <div className="manager-title archivo-black">Sistema de Gestión de Ventas</div>

                  {/* Pequeño formulario para info de la compañía (RUC y nombre) */}
                  <div className="manager-company-info">
                        <div className="manager-company-label">Datos del cliente</div>
                        <div className="manager-company-field">
                              <input
                                    placeholder="RUC"
                                    className="manager-company-input"
                              />
                        </div>
                        <div className="manager-company-field">
                              <input
                                    placeholder="Razón Social"
                                    className="manager-company-input"
                              />
                        </div>
                  </div>

                  <div className="manager-list-actions">
                        <div className="manager-copy-button" onClick={handleCopyList}>
                              Copiar Lista
                        </div>
                        <div className="manager-paste-button" onClick={handlePasteList}>
                              Pegar Lista
                        </div>
                  </div>

                  {/* Contenedor que permite scroll horizontal en pantallas pequeñas */}
                  <div className="manager-table-container">
                        {/* Encabezado de tabla */}
                        <div className="manager-table-header">
                              <div className="manager-col col-image">Img</div>
                              <div className="manager-col col-name">Nombre</div>
                              <div className="manager-col col-part">Parte</div>
                              <div className="manager-col col-price">Precio</div>
                              <div className="manager-col col-stock">Stock</div>
                              <div className="manager-col col-brand">Marca</div>
                              <div className="manager-col col-amount">Cantidad</div>
                              <div className="manager-col col-parents">Pertenece</div>
                              <div className="manager-col col-actions">Acciones</div>
                        </div>

                        {/* Filas de la tabla */}
                        {rows.map((row, index) => {
                              const p = row.product;
                              const parentNames =
                                    p.parent_products?.map((pid) => {
                                          const parentProd = ALL_PRODUCTS.find((ap) => ap.id === pid);
                                          return parentProd ? parentProd.name : `#${pid}`;
                                    }) || [];

                              return (
                                    <div
                                          key={index}
                                          className="manager-table-row"
                                          onClick={() => handleRowClick(index)}
                                    >
                                          <div className="manager-col col-image">
                                                <img src={p.image} alt={p.name} className="row-img" />
                                          </div>
                                          <div className="manager-col col-name">{p.name}</div>
                                          <div className="manager-col col-part">{p.part_number}</div>
                                          <div className="manager-col col-price">S/.{p.price}</div>
                                          <div className="manager-col col-stock">
                                                {p.stock === 0 ? 'Sin stock' : p.stock}
                                          </div>
                                          <div className="manager-col col-brand">
                                                {p.brand ? p.brand : '—'}
                                          </div>
                                          {/* Cantidad en la fila */}
                                          <div className="manager-col col-amount" onClick={(e) => e.stopPropagation()}>
                                                <input
                                                      className="manager-row-amount-input"
                                                      type="number"
                                                      value={row.amount}
                                                      onChange={(e) => handleRowAmountChange(e, index)}
                                                />
                                          </div>
                                          <div className="manager-col col-parents">
                                                {parentNames.length > 0 ? parentNames.join(', ') : '—'}
                                          </div>
                                          <div
                                                className="manager-col col-actions"
                                                onClick={(e) => e.stopPropagation()} // Evita abrir el modal
                                          >
                                                <div
                                                      className="manager-edit-btn"
                                                      onClick={() => setEditingRowIndex(index)}
                                                >
                                                      <FaEdit />
                                                </div>
                                                <div
                                                      className="manager-remove-btn"
                                                      onClick={() => handleRemoveRow(index)}
                                                >
                                                      <FaTrash />
                                                </div>
                                          </div>
                                    </div>
                              );
                        })}
                  </div>

                  {/* Barra de búsqueda al final */}
                  <div className="manager-bottom-search">
                        <input
                              ref={searchInputRef}
                              className="manager-search-input"
                              placeholder="Agregar producto..."
                              value={searchTerm}
                              onChange={(e) => setSearchTerm(e.target.value)}
                              onKeyDown={handleKeyDownMain}
                        />
                        {recommendations.length > 0 && (
                              <div className="manager-recommendations-box">
                                    {recommendations.map((rec, idx) => (
                                          <div
                                                key={rec.id}
                                                ref={(el) =>
                                                      (recommendationItemsRef.current[idx] = el)
                                                }
                                                className={`manager-recommendation-item ${
                                                      idx === selectedIndex ? 'selected' : ''
                                                }`}
                                                onClick={() => handleSelectProduct(rec)}
                                          >
                                                <img src={rec.image} alt={rec.name} />
                                                <div>
                                                      <div>{rec.name}</div>
                                                      <div>{rec.part_number}</div>
                                                </div>
                                          </div>
                                    ))}
                              </div>
                        )}
                  </div>

                  {/* Botón "Guardar Orden" (falso submit) */}
                  <div className="manager-save-order" onClick={handleSaveOrder}>
                        Guardar Orden
                  </div>

                  {/* MODAL de edición */}
                  {editingRowIndex !== null && (
                        <div
                              className="manager-modal-overlay"
                              onClick={() => setEditingRowIndex(null)}
                        >
                              <div
                                    className="manager-modal-content"
                                    onClick={(e) => e.stopPropagation()}
                              >
                                    <div className="manager-modal-header">
                                          <div className="manager-modal-title">Editar Producto</div>
                                          <div
                                                className="manager-modal-close"
                                                onClick={() => setEditingRowIndex(null)}
                                          >
                                                &times;
                                          </div>
                                    </div>

                                    {/* Info del producto actual */}
                                    <div className="manager-modal-section">
                                          <div className="manager-modal-section-title">
                                                Información del Producto
                                          </div>
                                          {(() => {
                                                const currentProduct = rows[editingRowIndex].product;
                                                return (
                                                      <div className="manager-current-product">
                                                            <img
                                                                  src={currentProduct.image}
                                                                  alt={currentProduct.name}
                                                            />
                                                            <div>
                                                                  <div>{currentProduct.name}</div>
                                                                  <div>{currentProduct.part_number}</div>
                                                                  <div>{currentProduct.brand || 'Marca no definida'}</div>
                                                            </div>
                                                            <div>
                                                                  <input
                                                                        placeholder="Cantidad"
                                                                        type="number"
                                                                        value={editAmount}
                                                                        onChange={(e) =>
                                                                              setEditAmount(
                                                                                    parseInt(e.target.value) || 1
                                                                              )
                                                                        }
                                                                  />
                                                            </div>
                                                      </div>
                                                );
                                          })()}
                                    </div>

                                    {/* Equivalentes del producto actual */}
                                    <div className="manager-modal-section">
                                          <div className="manager-modal-section-title">
                                                Productos Equivalentes
                                          </div>
                                          {(() => {
                                                const currentProduct = rows[editingRowIndex].product;
                                                if (currentProduct.equivalent_products?.length) {
                                                      return currentProduct.equivalent_products.map((eqID) => {
                                                            const eqProd = ALL_PRODUCTS.find((p) => p.id === eqID);
                                                            if (!eqProd) return null;
                                                            return (
                                                                  <div
                                                                        key={eqProd.id}
                                                                        className="manager-modal-equiv-item"
                                                                        onClick={() =>
                                                                              handleReplaceWithEquivalent(eqProd.id)
                                                                        }
                                                                  >
                                                                        <img
                                                                              src={eqProd.image}
                                                                              alt={eqProd.name}
                                                                        />
                                                                        <div>
                                                                              <div>{eqProd.name}</div>
                                                                              <div>{eqProd.part_number}</div>
                                                                        </div>
                                                                  </div>
                                                            );
                                                      });
                                                }
                                                return (
                                                      <div className="manager-no-equivalents">
                                                            No se encontraron equivalentes.
                                                      </div>
                                                );
                                          })()}
                                    </div>

                                    {/* Buscar otro producto */}
                                    <div className="manager-modal-section">
                                          <div className="manager-modal-section-title">
                                                Buscar Otro Producto
                                          </div>
                                          <input
                                                className="manager-modal-search"
                                                placeholder="Escriba el nombre..."
                                                value={modalSearchTerm}
                                                onChange={(e) => setModalSearchTerm(e.target.value)}
                                          />
                                          <div className="manager-modal-recommendations">
                                                {modalRecommendations.map((mp) => (
                                                      <div
                                                            key={mp.id}
                                                            className="manager-modal-recommendation-item"
                                                            onClick={() => handleReplaceModal(mp)}
                                                      >
                                                            <img src={mp.image} alt={mp.name} />
                                                            <div>
                                                                  <div>{mp.name}</div>
                                                                  <div>{mp.part_number}</div>
                                                            </div>
                                                      </div>
                                                ))}
                                          </div>
                                    </div>

                                    {/* Botón para guardar cambios (cantidad, etc.) */}
                                    <div className="manager-modal-save" onClick={handleSaveModal}>
                                          Guardar
                                    </div>
                              </div>
                        </div>
                  )}
            </div>
      );
}

export default Manager;
