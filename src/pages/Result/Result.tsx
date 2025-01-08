import React, { useState, useEffect } from 'react';
import { ALL_PRODUCTS, Product } from '../../assets/products.tsx';
import './Result.css';



interface ProductRow {
  // Represents the row in our Excel-like table
  product: Product;
}


/** MAIN COMPONENT **/
const NewProductList: React.FC = () => {
  // The "Excel-like" list
  const [rows, setRows] = useState<ProductRow[]>([]);
  
  // The search term typed by the user
  const [searchTerm, setSearchTerm] = useState<string>('');
  
  // The recommended products to show on the right of the search bar
  const [recommendations, setRecommendations] = useState<Product[]>([]);
  
  // Track which row is being edited in the modal
  const [editingRowIndex, setEditingRowIndex] = useState<number | null>(null);
  
  // For the modal: we keep track of a separate "searchTerm" to replace an item
  const [modalSearchTerm, setModalSearchTerm] = useState<string>('');
  const [modalRecommendations, setModalRecommendations] = useState<Product[]>([]);

  /** 
   * Helper function to get a product (by ID) plus any equivalent products 
   * for the search scope. You can define your "likelihood" sorting logic here.
   **/
  function searchInProducts(term: string, products: Product[]): Product[] {
    const lowerTerm = term.toLowerCase();
    
    // We'll do a basic search in name, part_number, or description
    // Also, we consider any product whose *equivalent_products* might match the term
    // For advanced "likelihood", sort by your own scoring system
    const matched = products.filter((p) => {
      // Basic matches
      const directMatch = 
        p.name.toLowerCase().includes(lowerTerm) ||
        p.part_number.toLowerCase().includes(lowerTerm) ||
        p.description.toLowerCase().includes(lowerTerm);

      if (directMatch) return true;
      
      // Check equivalents
      if (p.equivalent_products && p.equivalent_products.length > 0) {
        const eqMatches = p.equivalent_products.some(eqID => {
          const eqProduct = products.find(pr => pr.id === eqID);
          if (!eqProduct) return false;
          return (
            eqProduct.name.toLowerCase().includes(lowerTerm) ||
            eqProduct.part_number.toLowerCase().includes(lowerTerm) ||
            eqProduct.description.toLowerCase().includes(lowerTerm)
          );
        });
        return eqMatches;
      }
      return false;
    });

    // Sort matched (very naive approach: the shorter the distance, the higher it goes)
    // A more advanced approach might measure Levenshtein distance, or rank by part_number closeness, etc.
    return matched.sort((a, b) => {
      // Example "ranking" by how early the search term appears in the name
      const idxA = a.name.toLowerCase().indexOf(lowerTerm);
      const idxB = b.name.toLowerCase().indexOf(lowerTerm);
      return idxA - idxB;
    });
  }

  /** EFFECT: Update recommendations whenever searchTerm changes **/
  useEffect(() => {
    if (searchTerm.trim() === '') {
      setRecommendations([]);
      return;
    }
    const found = searchInProducts(searchTerm, ALL_PRODUCTS);
    setRecommendations(found);
  }, [searchTerm]);

  /** EFFECT: For the modal's search (when replacing product) **/
  useEffect(() => {
    if (modalSearchTerm.trim() === '') {
      setModalRecommendations([]);
      return;
    }
    const found = searchInProducts(modalSearchTerm, ALL_PRODUCTS);
    setModalRecommendations(found);
  }, [modalSearchTerm]);

  /** 
   * Handle user pressing ENTER in the bottom search input:
   * - If there's at least 1 recommendation, add the first one
   * - Clear the searchTerm
   */
  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === 'Enter') {
      e.preventDefault();
      if (recommendations.length > 0) {
        handleSelectProduct(recommendations[0]);
      }
    }
  }

  /**
   * Add selected product as a new row in the "Excel-like" table.
   */
  function handleSelectProduct(product: Product) {
    setRows(prev => [...prev, { product }]);
    setSearchTerm('');
    setRecommendations([]);
  }

  /** 
   * Editing a row => open modal 
   */
  function handleEditRow(index: number) {
    setEditingRowIndex(index);
    setModalSearchTerm('');        // reset modal search
    setModalRecommendations([]);   // reset modal recommendations
  }

  /**
   * If the user selects an equivalent product from the row itself
   * (for example, you might pass the eqProduct ID)
   */
  function handleReplaceWithEquivalent(eqID: number) {
    if (editingRowIndex === null) return;
    setRows(prev => {
      const newRows = [...prev];
      const product = ALL_PRODUCTS.find((p: Product) => p.id === eqID);
      if (product) {
        newRows[editingRowIndex] = { product };
      }
      return newRows;
    });
  }

  /**
   * If the user chooses a brand new product from the modal's search to replace current
   */
  function handleReplaceModal(product: Product) {
    if (editingRowIndex === null) return;
    setRows(prev => {
      const newRows = [...prev];
      newRows[editingRowIndex] = { product };
      return newRows;
    });
    setModalSearchTerm('');
    setModalRecommendations([]);
  }

  /** 
   * Remove a product from the table 
   */
  function handleRemoveRow(index: number) {
    setRows(prev => prev.filter((_, i) => i !== index));
  }

  return (
    <div className="np-container">
      <h1 className="np-title">Cotizar productos</h1>

      {/* Excel-like table header */}
      <div className="np-table-header">
        <div className="np-col col-image">Imagen</div>
        <div className="np-col col-name">Nombre</div>
        <div className="np-col col-part">Número de parte</div>
        <div className="np-col col-price">Precio</div>
        <div className="np-col col-stock">Stock</div>
        <div className="np-col col-parents">Pertenece a</div>
        <div className="np-col col-actions">Acciones</div>
      </div>

      {/* Excel-like rows */}
      {rows.map((row, index) => {
        const p = row.product;
        // Grab any parent product names
        const parentNames = p.parent_products?.map((pid: any) => {
          const parentProd = ALL_PRODUCTS.find((prod: Product) => prod.id === pid);
          return parentProd ? parentProd.name : `#${pid}`;
        }) ?? [];

        return (
          <div key={index} className="np-table-row">
            {/* Image */}
            <div className="np-col col-image">
              <img src={p.image} alt={p.name} className="row-img" />
            </div>
            {/* Name */}
            <div className="np-col col-name">{p.name}</div>
            {/* Part Number */}
            <div className="np-col col-part">{p.part_number}</div>
            {/* Price */}
            <div className="np-col col-price">${p.price}</div>
            {/* Stock */}
            <div className="np-col col-stock">
              {p.stock === 0 ? "Out of Stock" : p.stock}
            </div>
            {/* Parent Products */}
            <div className="np-col col-parents">
              {parentNames.length > 0 ? parentNames.join(", ") : "—"}
            </div>
            {/* Actions */}
            <div className="np-col col-actions">
              <button 
                className="edit-btn" 
                onClick={() => handleEditRow(index)}
              >
                Editar
              </button>
              <button 
                className="remove-btn" 
                onClick={() => handleRemoveRow(index)}
              >
                Eliminar
              </button>
            </div>
          </div>
        );
      })}

      {/* Bottom bar: search input on the left, recommendations on the right */}
      <div className="np-bottom-search">
        {/* Search input */}
        <input
          className="np-search-input"
          placeholder="Escriba el nombre del producto..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyDown={handleKeyDown}
        />

        {/* Recommended products to the right */}
        {recommendations.length > 0 && (
          <div className="np-recommendations-box">
            {recommendations.map((rec) => (
              <div 
                key={rec.id} 
                className="np-recommendation-item"
                onClick={() => handleSelectProduct(rec)}
              >
                <img src={rec.image} alt={rec.name} />
                <div>
                  <strong>{rec.name}</strong> <br/>
                  <small>{rec.part_number}</small>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* EDIT MODAL */}
      {editingRowIndex !== null && (
        <div className="np-modal-overlay" onClick={() => setEditingRowIndex(null)}>
          <div 
            className="np-modal-content" 
            onClick={(e) => e.stopPropagation()}  // prevent closing when clicking inside
          >
            <div className="np-modal-header">
              <h2>Editar item</h2>
              <button 
                className="np-modal-close" 
                onClick={() => setEditingRowIndex(null)}
              >
                &times;
              </button>
            </div>

            {/* The current product’s equivalents */}
            <div className="np-modal-section">
              <h3>Productos equivalentes</h3>
              {(() => {
                const currentProduct = rows[editingRowIndex].product;
                if (currentProduct.equivalent_products?.length) {
                  return currentProduct.equivalent_products.map((eqID: any) => {
                    const eqProd = ALL_PRODUCTS.find((p: Product) => p.id === eqID);
                    if (!eqProd) return null;
                    return (
                      <div 
                        key={eqProd.id} 
                        className="np-modal-equiv-item"
                        onClick={() => handleReplaceWithEquivalent(eqProd.id)}
                      >
                        <img src={eqProd.image} alt={eqProd.name} />
                        <div>
                          <strong>{eqProd.name}</strong><br/>
                          <small>Parte: {eqProd.part_number}</small>
                        </div>
                      </div>
                    );
                  });
                }
                return <div>No se encontraron productos equivalentes.</div>;
              })()}
            </div>

            {/* Or search for an entirely different product */}
            <div className="np-modal-section">
              <h3>Buscar otro producto</h3>
              <input
                className="np-modal-search"
                placeholder="Escriba el nombre del producto..."
                value={modalSearchTerm}
                onChange={(e) => setModalSearchTerm(e.target.value)}
              />
              <div className="np-modal-recommendations">
                {modalRecommendations.map((mp) => (
                  <div 
                    key={mp.id} 
                    className="np-modal-recommendation-item"
                    onClick={() => handleReplaceModal(mp)}
                  >
                    <img src={mp.image} alt={mp.name} />
                    <div>
                      <strong>{mp.name}</strong><br/>
                      <small>Parte: {mp.part_number}</small>
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
};

export default NewProductList;
