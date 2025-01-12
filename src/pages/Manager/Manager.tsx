import React, { useState, useEffect, useRef } from 'react';
import { ALL_PRODUCTS, Product } from '../../assets/products';
import './Manager.css';

// Estructura de cada fila en la lista de productos
interface ProductRow {
      product: Product;
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

      // Ref para el input principal, de modo que el cursor se posicione allí
      const searchInputRef = useRef<HTMLInputElement | null>(null);

      // Refs para cada item de recomendación (para hacer scroll automático)
      const recommendationItemsRef = useRef<(HTMLDivElement | null)[]>([]);

      /** 
       * Efecto para enfocar el input principal al montar el componente.
       */
      useEffect(() => {
            if (searchInputRef.current) {
                  searchInputRef.current.focus();
            }
      }, []);

      /** 
       * Helper: buscar coincidencias en ALL_PRODUCTS, contemplando equivalentes.
       */
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

      /**
       * Actualizar recomendaciones cada vez que searchTerm cambie.
       */
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

      /**
       * Modal: actualizar recomendaciones cada vez que modalSearchTerm cambie.
       */
      useEffect(() => {
            if (modalSearchTerm.trim() === '') {
                  setModalRecommendations([]);
                  return;
            }
            const found = searchInProducts(modalSearchTerm, ALL_PRODUCTS);
            setModalRecommendations(found);
      }, [modalSearchTerm]);

      /**
       * Efecto para hacer scroll hacia el item seleccionado en el desplegable
       */
      useEffect(() => {
            if (selectedIndex >= 0 && selectedIndex < recommendationItemsRef.current.length) {
                  recommendationItemsRef.current[selectedIndex]?.scrollIntoView({
                        behavior: 'smooth',
                        block: 'nearest',
                  });
            }
      }, [selectedIndex]);

      /**
       * Manejar teclas en el input principal de búsqueda (Navegar y Enter).
       */
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

      /**
       * Agregar un producto a la lista.
       */
      function handleSelectProduct(product: Product) {
            setRows((prev) => [...prev, { product }]);
            setSearchTerm('');
            setRecommendations([]);
            setSelectedIndex(-1);
      }

      /**
       * Editar fila => abre modal.
       */
      function handleEditRow(index: number) {
            setEditingRowIndex(index);
            setModalSearchTerm('');
            setModalRecommendations([]);
      }

      /**
       * Reemplazar producto con uno de los equivalentes.
       */
      function handleReplaceWithEquivalent(eqID: number) {
            if (editingRowIndex === null) return;
            setRows((prev) => {
                  const newRows = [...prev];
                  const product = ALL_PRODUCTS.find((p) => p.id === eqID);
                  if (product) {
                        newRows[editingRowIndex] = { product };
                  }
                  return newRows;
            });
      }

      /**
       * Reemplazar producto con otro buscado en el modal.
       */
      function handleReplaceModal(product: Product) {
            if (editingRowIndex === null) return;
            setRows((prev) => {
                  const newRows = [...prev];
                  newRows[editingRowIndex] = { product };
                  return newRows;
            });
            setModalSearchTerm('');
            setModalRecommendations([]);
      }

      /**
       * Eliminar fila.
       */
      function handleRemoveRow(index: number) {
            setRows((prev) => prev.filter((_, i) => i !== index));
      }

      /**
       * Copiar la lista (IDs en JSON) al portapapeles.
       */
      function handleCopyList() {
            const toCopy = JSON.stringify(rows.map((r) => r.product.id));
            navigator.clipboard.writeText(toCopy).catch((err) => {
                  console.error('No se pudo copiar:', err);
            });
      }

      /**
       * Pegar lista (IDs en JSON) desde el portapapeles.
       */
      async function handlePasteList() {
            try {
                  const text = await navigator.clipboard.readText();
                  if (!text) return;

                  const parsedIDs: number[] = JSON.parse(text);
                  if (Array.isArray(parsedIDs)) {
                        const newRows: ProductRow[] = [];
                        parsedIDs.forEach((id) => {
                              const p = ALL_PRODUCTS.find((ap) => ap.id === id);
                              if (p) newRows.push({ product: p });
                        });
                        setRows(newRows);
                  }
            } catch (err) {
                  console.error('Error al pegar:', err);
            }
      }

      return (
            <div className="manager-main-container">
                  {/* Navbar estilo negro */}
                  <div className="manager-navbar">
                        <div className="manager-navbar-left">
                              <div className="manager-navbar-brand">AGEPSA</div>
                        </div>
                        <div className="manager-navbar-links">
                              <a href="/" className="manager-navbar-link">Inicio</a>
                              <a href="/admin" className="manager-navbar-link">Admin</a>
                              <a href="/user" className="manager-navbar-link">Usuarios</a>
                        </div>
                  </div>

                  {/* Título principal */}
                  <div className="manager-title">Sistema de Gestión de Ventas</div>

                  {/* Botones para copiar/pegar la lista */}
                  <div className="manager-list-actions">
                        <button className="manager-copy-button" onClick={handleCopyList}>
                              Copiar Lista
                        </button>
                        <button className="manager-paste-button" onClick={handlePasteList}>
                              Pegar Lista
                        </button>
                  </div>

                  {/* Encabezado de tabla */}
                  <div className="manager-table-header">
                        <div className="manager-col col-image">Imagen</div>
                        <div className="manager-col col-name">Nombre</div>
                        <div className="manager-col col-part">N° de Parte</div>
                        <div className="manager-col col-price">Precio</div>
                        <div className="manager-col col-stock">Stock</div>
                        <div className="manager-col col-parents">Pertenece a</div>
                        <div className="manager-col col-actions">Acciones</div>
                  </div>

                  {/* Filas de la tabla */}
                  {rows.map((row, index) => {
                        const p = row.product;
                        const parentNames = p.parent_products?.map((pid) => {
                              const parentProd = ALL_PRODUCTS.find((ap) => ap.id === pid);
                              return parentProd ? parentProd.name : `#${pid}`;
                        }) ?? [];

                        return (
                              <div key={index} className="manager-table-row">
                                    <div className="manager-col col-image">
                                          <img src={p.image} alt={p.name} className="row-img" />
                                    </div>
                                    <div className="manager-col col-name">{p.name}</div>
                                    <div className="manager-col col-part">{p.part_number}</div>
                                    <div className="manager-col col-price">S/.{p.price}</div>
                                    <div className="manager-col col-stock">
                                          {p.stock === 0 ? 'Sin stock' : p.stock}
                                    </div>
                                    <div className="manager-col col-parents">
                                          {parentNames.length > 0 ? parentNames.join(', ') : '—'}
                                    </div>
                                    <div className="manager-col col-actions">
                                          <button
                                                className="manager-edit-btn"
                                                onClick={() => handleEditRow(index)}
                                          >
                                                Editar
                                          </button>
                                          <button
                                                className="manager-remove-btn"
                                                onClick={() => handleRemoveRow(index)}
                                          >
                                                Eliminar
                                          </button>
                                    </div>
                              </div>
                        );
                  })}

                  {/* Barra de búsqueda al final */}
                  <div className="manager-bottom-search">
                        <input
                              ref={searchInputRef}
                              className="manager-search-input"
                              placeholder="Escriba el nombre del producto..."
                              value={searchTerm}
                              onChange={(e) => setSearchTerm(e.target.value)}
                              onKeyDown={handleKeyDownMain}
                        />
                        {recommendations.length > 0 && (
                              <div className="manager-recommendations-box">
                                    {recommendations.map((rec, idx) => (
                                          <div
                                                key={rec.id}
                                                ref={(el) => (recommendationItemsRef.current[idx] = el)}
                                                className={`manager-recommendation-item ${
                                                      idx === selectedIndex ? 'selected' : ''
                                                }`}
                                                onClick={() => handleSelectProduct(rec)}
                                          >
                                                <img src={rec.image} alt={rec.name} />
                                                <div>
                                                      <strong>{rec.name}</strong> <br />
                                                      <small>{rec.part_number}</small>
                                                </div>
                                          </div>
                                    ))}
                              </div>
                        )}
                  </div>

                  {/* MODAL de edición */}
                  {editingRowIndex !== null && (
                        <div className="manager-modal-overlay" onClick={() => setEditingRowIndex(null)}>
                              <div className="manager-modal-content" onClick={(e) => e.stopPropagation()}>
                                    <div className="manager-modal-header">
                                          <div className="manager-modal-title">Editar Item</div>
                                          <button
                                                className="manager-modal-close"
                                                onClick={() => setEditingRowIndex(null)}
                                          >
                                                &times;
                                          </button>
                                    </div>

                                    {/* Equivalentes del producto actual */}
                                    <div className="manager-modal-section">
                                          <div className="manager-modal-section-title">Productos Equivalentes</div>
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
                                                                        onClick={() => handleReplaceWithEquivalent(eqProd.id)}
                                                                  >
                                                                        <img src={eqProd.image} alt={eqProd.name} />
                                                                        <div>
                                                                              <strong>{eqProd.name}</strong><br />
                                                                              <small>{eqProd.part_number}</small>
                                                                        </div>
                                                                  </div>
                                                            );
                                                      });
                                                }
                                                return <div>No se encontraron equivalentes.</div>;
                                          })()}
                                    </div>

                                    {/* Buscar otro producto */}
                                    <div className="manager-modal-section">
                                          <div className="manager-modal-section-title">Buscar otro producto</div>
                                          <input
                                                className="manager-modal-search"
                                                placeholder="Escriba el nombre del producto..."
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
                                                                  <strong>{mp.name}</strong><br />
                                                                  <small>{mp.part_number}</small>
                                                            </div>
                                                      </div>
                                                ))}
                                          </div>
                                    </div>
                              </div>
                        </div>
                  )}
            </div>
      );
}

export default Manager;
