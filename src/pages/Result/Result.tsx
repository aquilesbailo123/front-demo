import { useParams } from "react-router-dom";
import React, { useState } from "react";
import "./Result.css";

interface Product {
  name: string;
  description: string;
  part_number: string;
  price: string;
  stock: number;
  image: string;
  equivalent_products?: Product[];
}

interface ProductItem {
  type: "product";
  product: Product;
  quantity: number;
}

interface NotFoundItem {
  type: "not_found";
  name: string;
  quantity: number;
}

type Item = ProductItem | NotFoundItem;

interface ResultData {
  items: Item[];
}

const Result: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  // Modal state
  const [showModal, setShowModal] = useState(false);
  const [equivalents, setEquivalents] = useState<Product[]>([]);

  const handleShowModal = (equivalentProducts: Product[]) => {
    setEquivalents(equivalentProducts);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setEquivalents([]);
  };

  // Simulated response
  const result: ResultData = {
    items: [
      {
        type: "product",
        product: {
          name: "Pastilla de Freno",
          description: "Pastilla de alto rendimiento para autobuses.",
          part_number: "BP12345",
          price: "49.99",
          stock: 10,
          image: "https://storage.googleapis.com/feriabucket/1735268074155_products.jpg"
        },
        quantity: 2
      },
      {
        type: "product",
        product: {
          name: "Filtro de Aire",
          description: "Filtro de aire eficiente para motores de autobuses.",
          part_number: "AF67890",
          price: "19.99",
          stock: 0, // Sin stock
          image: "https://storage.googleapis.com/feriabucket/1735268085750_categories.jpg",
          equivalent_products: [
            {
              name: "Filtro de Aire Genérico",
              description: "Opción más económica para motores de autobuses.",
              part_number: "AF11111",
              price: "15.99",
              stock: 8,
              image: "https://storage.googleapis.com/feriabucket/1735268074155_products.jpg"
            },
            {
              name: "Filtro de Aire Premium",
              description: "Filtro de alto rendimiento con mayor durabilidad.",
              part_number: "AF22222",
              price: "29.99",
              stock: 5,
              image: "https://storage.googleapis.com/feriabucket/1735268085750_categories.jpg"
            }
          ]
        },
        quantity: 1
      },
      {
        type: "product",
        product: {
          name: "Correa de Distribución",
          description: "Correa de distribución duradera para motores de autobuses.",
          part_number: "TB23456",
          price: "89.99",
          stock: 5,
          image: "https://storage.googleapis.com/feriabucket/1735268074155_products.jpg"
        },
        quantity: 1
      },
      {
        type: "not_found",
        name: "Filtro de Aceite",
        quantity: 1
      },
      {
        type: "product",
        product: {
          name: "Bujía",
          description: "Bujía de larga duración para combustión eficiente.",
          part_number: "SP56789",
          price: "12.99",
          stock: 50,
          image: "https://storage.googleapis.com/feriabucket/1735268085750_categories.jpg"
        },
        quantity: 4
      },
      {
        type: "not_found",
        name: "Escobilla Limpiaparabrisas",
        quantity: 2
      },
      {
        type: "product",
        product: {
          name: "Terminal de Batería",
          description: "Terminal de batería confiable para conexiones seguras.",
          part_number: "BT89012",
          price: "15.49",
          stock: 10,
          image: "https://storage.googleapis.com/feriabucket/1735268074155_products.jpg"
        },
        quantity: 1
      },
      {
        type: "not_found",
        name: "Gato Hidráulico",
        quantity: 1
      },
      {
        type: "product",
        product: {
          name: "Colector de Escape",
          description: "Colector de escape de alto rendimiento para mejor flujo.",
          part_number: "EM54321",
          price: "249.99",
          stock: 0, // Sin stock
          image: "https://storage.googleapis.com/feriabucket/1735268074155_products.jpg",
          equivalent_products: [
            {
              name: "Colector de Escape Standard",
              description: "Colector de reemplazo con rendimiento estándar.",
              part_number: "EM11111",
              price: "199.99",
              stock: 10,
              image: "https://storage.googleapis.com/feriabucket/1735268074155_products.jpg"
            }
          ]
        },
        quantity: 1
      },
      {
        type: "product",
        product: {
          name: "Culata",
          description: "Culata de precisión diseñada para mayor durabilidad.",
          part_number: "CH67890",
          price: "499.99",
          stock: 3,
          image: "https://storage.googleapis.com/feriabucket/1735268085750_categories.jpg"
        },
        quantity: 1
      },
      {
        type: "product",
        product: {
          name: "Correa del Ventilador",
          description: "Correa del ventilador duradera para enfriamiento constante.",
          part_number: "FB12321",
          price: "19.99",
          stock: 0, // Sin stock
          image: "https://storage.googleapis.com/feriabucket/1735268074155_products.jpg",
          equivalent_products: [
            {
              name: "Correa del Ventilador Premium",
              description: "Mayor resistencia y durabilidad.",
              part_number: "FB33333",
              price: "29.99",
              stock: 6,
              image: "https://storage.googleapis.com/feriabucket/1735268085750_categories.jpg"
            }
          ]
        },
        quantity: 2
      }
    ]
  };

  return (
    <div className="result-main-cont">
      <div className="result-cont">
        <div className="result-title">Cotización #{id}</div>
        <div className="result-text">
          A continuación encontrará los items de su cotización:
        </div>

        {/* "Table-like" header row */}
        <div className="result-table-header">
          <div className="result-table-col header-col">Producto</div>
          <div className="result-table-col header-col">Descripción</div>
          <div className="result-table-col header-col">Número de Parte</div>
          <div className="result-table-col header-col">Precio</div>
          <div className="result-table-col header-col">Stock</div>
          <div className="result-table-col header-col">Cantidad</div>
          <div className="result-table-col header-col">Acciones</div>
        </div>

        {/* Stripe rows */}
        {result.items.map((item, index) => {
          if (item.type === "product") {
            const p = item.product;
            const outOfStock = p.stock === 0;
            const hasEquivs = p.equivalent_products && p.equivalent_products.length > 0;

            return (
              <div key={index} className="result-table-row">
                {/* Producto (with image) */}
                <div className="result-table-col product-col">
                  <img src={p.image} className="product-image" alt="" />
                  <div>{p.name}</div>
                </div>
                {/* Descripción */}
                <div className="result-table-col">{p.description}</div>
                {/* Número de Parte */}
                <div className="result-table-col">{p.part_number}</div>
                {/* Precio */}
                <div className="result-table-col">${p.price}</div>
                {/* Stock */}
                <div className="result-table-col">
                  {outOfStock ? "Sin stock" : p.stock}
                </div>
                {/* Cantidad */}
                <div className="result-table-col">{item.quantity}</div>
                {/* Acciones (Ver productos equivalentes) */}
                <div className="result-table-col action-col">
                  {outOfStock && hasEquivs && (
                    <div
                      className="equivalent-button"
                      onClick={() => handleShowModal(p.equivalent_products!)}
                    >
                      Ver productos equivalentes
                    </div>
                  )}
                </div>
              </div>
            );
          } else {
            // Not found item: keep the name, "----" for others
            return (
              <div key={index} className="result-table-row not-found-row">
                <div className="result-table-col product-col">
                  <div>{item.name}</div>
                </div>
                <div className="result-table-col">----</div>
                <div className="result-table-col">----</div>
                <div className="result-table-col">----</div>
                <div className="result-table-col">----</div>
                <div className="result-table-col">{item.quantity}</div>
                <div className="result-table-col"></div>
              </div>
            );
          }
        })}

        {/* Modal */}
        {showModal && (
          <div className="modal-overlay" onClick={handleCloseModal}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <div className="close-modal" onClick={handleCloseModal}>
                X
              </div>
              <div className="modal-title">Productos Equivalentes</div>
              {equivalents.map((prod, i) => (
                <div key={i} className="equivalent-product">
                  <img src={prod.image} className="equivalent-image" alt="" />
                  <div className="equivalent-info">
                    <div>
                      <strong>Producto:</strong> {prod.name}
                    </div>
                    <div>
                      <strong>Descripción:</strong> {prod.description}
                    </div>
                    <div>
                      <strong>Número de Parte:</strong> {prod.part_number}
                    </div>
                    <div>
                      <strong>Precio:</strong> ${prod.price}
                    </div>
                    <div>
                      <strong>Stock:</strong>{" "}
                      {prod.stock === 0 ? "Sin stock" : prod.stock}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Result;
