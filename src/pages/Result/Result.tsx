import { useParams } from "react-router-dom";
import './Result.css'

function Result() {
      const { id } = useParams<{ id: string }>();

      const result = {
            items: [
              {
                "type": "product",
                "product": {
                  "name": "Brake Pad",
                  "description": "High-performance brake pad for SUVs.",
                  "part_number": "BP12345",
                  "price": "49.99",
                  "stock": 0,
                  "parent_products": [],
                  "equivalent_products": [
                    {
                      "name": "Generic Brake Pad",
                      "description": "Affordable replacement brake pad.",
                      "part_number": "BP54321",
                      "price": "39.99",
                      "stock": 15
                    },
                    {
                      "name": "Performance Brake Pad",
                      "description": "High-performance brake pad with extended warranty.",
                      "part_number": "BP98765",
                      "price": "59.99",
                      "stock": 10
                    }
                  ]
                },
                "quantity": 2
              },
              {
                "type": "product",
                "product": {
                  "name": "Air Filter",
                  "description": "Standard air filter for compact cars.",
                  "part_number": "AF67890",
                  "price": "19.99",
                  "stock": 25,
                  "parent_products": [],
                  "equivalent_products": []
                },
                "quantity": 1
              },
              {
                "type": "product",
                "product": {
                  "name": "Timing Belt",
                  "description": "Durable timing belt for various engines.",
                  "part_number": "TB23456",
                  "price": "89.99",
                  "stock": 0,
                  "parent_products": [],
                  "equivalent_products": [
                    {
                      "name": "Premium Timing Belt",
                      "description": "High-quality timing belt for extended performance.",
                      "part_number": "TB65432",
                      "price": "109.99",
                      "stock": 20
                    }
                  ]
                },
                "quantity": 1
              },
              {
                "type": "not_found",
                "name": "Oil Filter",
                "quantity": 1
              },
              {
                "type": "product",
                "product": {
                  "name": "Spark Plug",
                  "description": "Long-lasting spark plug for efficient combustion.",
                  "part_number": "SP56789",
                  "price": "12.99",
                  "stock": 50,
                  "parent_products": [],
                  "equivalent_products": []
                },
                "quantity": 4
              },
              {
                "type": "not_found",
                "name": "Windshield Wiper Blade",
                "quantity": 2
              },
              {
                "type": "product",
                "product": {
                  "name": "Battery Terminal",
                  "description": "Reliable battery terminal for secure connections.",
                  "part_number": "BT89012",
                  "price": "15.49",
                  "stock": 10,
                  "parent_products": [],
                  "equivalent_products": []
                },
                "quantity": 1
              },
              {
                "type": "not_found",
                "name": "Car Jack",
                "quantity": 1
              }
            ]
          }
          

      return (
            <div className="result-main-cont">
                  <div className="result-cont">
                        <div className="result-title">Cotización</div>
                        <div className="result-text">A continuación encontrará los items de su cotización</div>

                        {result.items?.map((result: any) => <div>{result.type}</div>)}
                  </div>
            </div>
      )
}

export default Result