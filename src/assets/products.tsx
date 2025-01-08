export interface Product {
      id: number;
      name: string;
      description: string;
      part_number: string;
      price: string;
      stock: number;
      image: string;
      parent_products?: number[];
      equivalent_products?: number[];
    }

export const ALL_PRODUCTS: Product[] = [
        {
          "id": 1,
          "name": "Motor Diesel A",
          "description": "Motor diésel de alto rendimiento para buses.",
          "part_number": "MD-A0001",
          "price": "5000.00",
          "stock": 2,
          "image": "https://storage.googleapis.com/feriabucket/1735268099541_aboutus.jpg",
          "equivalent_products": [],
          "parent_products": []
        },
        {
          "id": 2,
          "name": "Motor Diesel B",
          "description": "Motor diésel de nueva generación para autobuses.",
          "part_number": "MD-B0002",
          "price": "5200.00",
          "stock": 3,
          "image": "https://storage.googleapis.com/feriabucket/1735268099541_aboutus.jpg",
          "equivalent_products": [],
          "parent_products": []
        },
        {
          "id": 3,
          "name": "Motor Diesel C",
          "description": "Motor diésel de alta potencia, ideal para buses de pasajeros.",
          "part_number": "MD-C0003",
          "price": "5400.00",
          "stock": 1,
          "image": "https://storage.googleapis.com/feriabucket/1735268099541_aboutus.jpg",
          "equivalent_products": [],
          "parent_products": []
        },
        {
          "id": 4,
          "name": "Motor Diesel D",
          "description": "Motor diésel con excelente relación calidad/precio.",
          "part_number": "MD-D0004",
          "price": "4800.00",
          "stock": 4,
          "image": "https://storage.googleapis.com/feriabucket/1735268099541_aboutus.jpg",
          "equivalent_products": [],
          "parent_products": []
        },
        {
          "id": 5,
          "name": "Motor Diesel E",
          "description": "Motor diésel robusto para buses interurbanos.",
          "part_number": "MD-E0005",
          "price": "5100.00",
          "stock": 2,
          "image": "https://storage.googleapis.com/feriabucket/1735268099541_aboutus.jpg",
          "equivalent_products": [],
          "parent_products": []
        },
    
        {
          "id": 6,
          "name": "Filtro de Aceite",
          "description": "Filtro de aceite diseñado para mantener la pureza del lubricante.",
          "part_number": "FA-1006",
          "price": "29.99",
          "stock": 10,
          "image": "https://storage.googleapis.com/feriabucket/1735268085750_categories.jpg",
          "equivalent_products": [],
          "parent_products": [1]
        },
        {
          "id": 7,
          "name": "Bomba de Combustible",
          "description": "Bomba con gran capacidad de flujo para motores diésel de buses.",
          "part_number": "BC-2007",
          "price": "179.99",
          "stock": 5,
          "image": "https://storage.googleapis.com/feriabucket/1735268085750_categories.jpg",
          "equivalent_products": [],
          "parent_products": [1, 2]
        },
        {
          "id": 8,
          "name": "Inyector de Combustible",
          "description": "Inyector de alta presión para un desempeño eficiente.",
          "part_number": "IC-3008",
          "price": "89.99",
          "stock": 20,
          "image": "https://storage.googleapis.com/feriabucket/1735268085750_categories.jpg",
          "equivalent_products": [],
          "parent_products": [2]
        },
        {
          "id": 9,
          "name": "Correa de Ventilador",
          "description": "Correa resistente para el ventilador de enfriamiento.",
          "part_number": "CV-4009",
          "price": "19.99",
          "stock": 0,
          "image": "https://storage.googleapis.com/feriabucket/1735268085750_categories.jpg",
          "equivalent_products": [10],
          "parent_products": [2, 3]
        },
        {
          "id": 10,
          "name": "Correa de Ventilador Premium",
          "description": "Versión premium con mayor durabilidad.",
          "part_number": "CVP-4010",
          "price": "24.99",
          "stock": 5,
          "image": "https://storage.googleapis.com/feriabucket/1735268085750_categories.jpg",
          "equivalent_products": [9],
          "parent_products": [2, 3]
        },
        {
          "id": 11,
          "name": "Filtro de Aire",
          "description": "Filtro para purificar el aire de admisión en motores diésel.",
          "part_number": "FA-1011",
          "price": "34.99",
          "stock": 10,
          "image": "https://storage.googleapis.com/feriabucket/1735268085750_categories.jpg",
          "equivalent_products": [],
          "parent_products": [1, 2, 3]
        },
        {
          "id": 12,
          "name": "Turbocompresor",
          "description": "Turbo para incrementar la potencia del motor diésel.",
          "part_number": "TB-5012",
          "price": "499.99",
          "stock": 2,
          "image": "https://storage.googleapis.com/feriabucket/1735268074155_products.jpg",
          "equivalent_products": [],
          "parent_products": [3]
        },
        {
          "id": 13,
          "name": "Módulo de Control Electrónico",
          "description": "ECU para optimizar la inyección y el rendimiento del motor.",
          "part_number": "MC-6013",
          "price": "299.99",
          "stock": 2,
          "image": "https://storage.googleapis.com/feriabucket/1735268074155_products.jpg",
          "equivalent_products": [],
          "parent_products": [3, 4]
        },
        {
          "id": 14,
          "name": "Radiador",
          "description": "Radiador de alta capacidad para refrigerar el motor diésel.",
          "part_number": "RD-7014",
          "price": "399.99",
          "stock": 3,
          "image": "https://storage.googleapis.com/feriabucket/1735268074155_products.jpg",
          "equivalent_products": [],
          "parent_products": [4]
        },
        {
          "id": 15,
          "name": "Ventilador de Refrigeración",
          "description": "Ventilador para mantener la temperatura ideal del motor.",
          "part_number": "VR-8015",
          "price": "59.99",
          "stock": 6,
          "image": "https://storage.googleapis.com/feriabucket/1735268074155_products.jpg",
          "equivalent_products": [16],
          "parent_products": [4]
        },
        {
          "id": 16,
          "name": "Ventilador de Refrigeración Genérico",
          "description": "Alternativa económica para ventilación del motor.",
          "part_number": "VRG-8016",
          "price": "49.99",
          "stock": 10,
          "image": "https://storage.googleapis.com/feriabucket/1735268074155_products.jpg",
          "equivalent_products": [15],
          "parent_products": [4]
        },
        {
          "id": 17,
          "name": "Cigüeñal",
          "description": "Eje que convierte el movimiento lineal en rotatorio.",
          "part_number": "CG-9017",
          "price": "699.99",
          "stock": 2,
          "image": "https://storage.googleapis.com/feriabucket/1735268074155_products.jpg",
          "equivalent_products": [],
          "parent_products": [5]
        },
        {
          "id": 18,
          "name": "Cárter de Aceite",
          "description": "Depósito de aceite en la parte inferior del motor.",
          "part_number": "CO-1018",
          "price": "129.99",
          "stock": 5,
          "image": "https://storage.googleapis.com/feriabucket/1735268063012_home.jpg",
          "equivalent_products": [],
          "parent_products": [1, 5]
        },
        {
          "id": 19,
          "name": "Bomba de Aceite",
          "description": "Encargada de lubricar los componentes internos del motor.",
          "part_number": "BA-1119",
          "price": "89.99",
          "stock": 6,
          "image": "https://storage.googleapis.com/feriabucket/1735268063012_home.jpg",
          "equivalent_products": [],
          "parent_products": [1, 2, 5]
        },
        {
          "id": 20,
          "name": "Árbol de Levas",
          "description": "Regula la apertura y cierre de válvulas en el motor.",
          "part_number": "AL-1220",
          "price": "289.99",
          "stock": 2,
          "image": "https://storage.googleapis.com/feriabucket/1735268063012_home.jpg",
          "equivalent_products": [],
          "parent_products": [2, 5]
        },
        {
          "id": 21,
          "name": "Múltiple de Escape",
          "description": "Colector para expulsar los gases del motor de manera eficiente.",
          "part_number": "ME-1321",
          "price": "249.99",
          "stock": 0,
          "image": "https://storage.googleapis.com/feriabucket/1735268063012_home.jpg",
          "equivalent_products": [22],
          "parent_products": [3]
        },
        {
          "id": 22,
          "name": "Múltiple de Escape Premium",
          "description": "Versión mejorada para reducir la contrapresión.",
          "part_number": "MEP-1322",
          "price": "299.99",
          "stock": 2,
          "image": "https://storage.googleapis.com/feriabucket/1735268063012_home.jpg",
          "equivalent_products": [21],
          "parent_products": [3]
        },
        {
          "id": 23,
          "name": "Bujía de Precalentamiento",
          "description": "Facilita el arranque del motor en frío.",
          "part_number": "BP-1423",
          "price": "15.99",
          "stock": 30,
          "image": "https://storage.googleapis.com/feriabucket/1735268063012_home.jpg",
          "equivalent_products": [],
          "parent_products": [1, 2, 3, 4, 5]
        },
        {
          "id": 24,
          "name": "Sensor de Oxígeno",
          "description": "Mide la concentración de oxígeno en los gases de escape.",
          "part_number": "SO-1524",
          "price": "49.99",
          "stock": 10,
          "image": "https://storage.googleapis.com/feriabucket/1735268140590_terms.jpg",
          "equivalent_products": [],
          "parent_products": [2, 3]
        },
        {
          "id": 25,
          "name": "Retén de Cigüeñal",
          "description": "Sello que evita fugas de aceite en el cigüeñal.",
          "part_number": "RC-1625",
          "price": "9.99",
          "stock": 15,
          "image": "https://storage.googleapis.com/feriabucket/1735268140590_terms.jpg",
          "equivalent_products": [],
          "parent_products": [5]
        },
        {
          "id": 26,
          "name": "Juego de Empaquetaduras",
          "description": "Conjunto de sellos para todas las uniones del motor.",
          "part_number": "JE-1726",
          "price": "99.99",
          "stock": 4,
          "image": "https://storage.googleapis.com/feriabucket/1735268140590_terms.jpg",
          "equivalent_products": [],
          "parent_products": [1, 2, 3, 4, 5]
        },
        {
          "id": 27,
          "name": "Cámara de Combustión",
          "description": "Parte del motor donde se produce la ignición del combustible.",
          "part_number": "CC-1827",
          "price": "199.99",
          "stock": 2,
          "image": "https://storage.googleapis.com/feriabucket/1735268140590_terms.jpg",
          "equivalent_products": [],
          "parent_products": [1, 5]
        },
        {
          "id": 28,
          "name": "Válvula de Escape",
          "description": "Permite la salida de los gases generados en la combustión.",
          "part_number": "VE-1928",
          "price": "24.99",
          "stock": 20,
          "image": "https://storage.googleapis.com/feriabucket/1735268140590_terms.jpg",
          "equivalent_products": [],
          "parent_products": [1, 3, 5]
        },
        {
          "id": 29,
          "name": "Válvula de Admisión",
          "description": "Controla la entrada de aire al cilindro.",
          "part_number": "VA-2029",
          "price": "22.99",
          "stock": 15,
          "image": "https://storage.googleapis.com/feriabucket/1735268140590_terms.jpg",
          "equivalent_products": [],
          "parent_products": [1, 3, 5]
        },
        {
          "id": 30,
          "name": "Bomba de Agua",
          "description": "Encargada de la circulación del líquido refrigerante.",
          "part_number": "BA-2130",
          "price": "79.99",
          "stock": 8,
          "image": "https://storage.googleapis.com/feriabucket/1735268085750_categories.jpg",
          "equivalent_products": [],
          "parent_products": [4]
        },
        {
          "id": 31,
          "name": "Termostato",
          "description": "Regula la temperatura del motor abriendo y cerrando el paso del refrigerante.",
          "part_number": "TS-2231",
          "price": "19.99",
          "stock": 10,
          "image": "https://storage.googleapis.com/feriabucket/1735268085750_categories.jpg",
          "equivalent_products": [],
          "parent_products": [2, 4]
        },
        {
          "id": 32,
          "name": "Sensor de Temperatura",
          "description": "Mide la temperatura del refrigerante para el control del motor.",
          "part_number": "ST-2332",
          "price": "14.99",
          "stock": 12,
          "image": "https://storage.googleapis.com/feriabucket/1735268085750_categories.jpg",
          "equivalent_products": [],
          "parent_products": [2, 3, 4]
        },
        {
          "id": 33,
          "name": "Bielas",
          "description": "Conectan los pistones con el cigüeñal, transmitiendo la fuerza de combustión.",
          "part_number": "BI-2433",
          "price": "129.99",
          "stock": 2,
          "image": "https://storage.googleapis.com/feriabucket/1735268085750_categories.jpg",
          "equivalent_products": [],
          "parent_products": [1, 5]
        },
        {
          "id": 34,
          "name": "Pistón",
          "description": "Elemento móvil que comprime la mezcla en la cámara de combustión.",
          "part_number": "PI-2534",
          "price": "49.99",
          "stock": 10,
          "image": "https://storage.googleapis.com/feriabucket/1735268085750_categories.jpg",
          "equivalent_products": [35],
          "parent_products": [1, 5]
        },
        {
          "id": 35,
          "name": "Pistón Reforzado",
          "description": "Versión reforzada para mayor durabilidad bajo alta compresión.",
          "part_number": "PIR-2535",
          "price": "59.99",
          "stock": 5,
          "image": "https://storage.googleapis.com/feriabucket/1735268085750_categories.jpg",
          "equivalent_products": [34],
          "parent_products": [1, 5]
        },
        {
          "id": 36,
          "name": "Bomba Inyectora",
          "description": "Controla la presión y el momento de inyección de combustible.",
          "part_number": "BI-2636",
          "price": "349.99",
          "stock": 3,
          "image": "https://storage.googleapis.com/feriabucket/1735268131773_security.jpg",
          "equivalent_products": [],
          "parent_products": [2, 3]
        },
        {
          "id": 37,
          "name": "Tapa de Válvulas",
          "description": "Cubre el conjunto de válvulas y el árbol de levas.",
          "part_number": "TV-2737",
          "price": "39.99",
          "stock": 6,
          "image": "https://storage.googleapis.com/feriabucket/1735268131773_security.jpg",
          "equivalent_products": [],
          "parent_products": [2, 5]
        },
        {
          "id": 38,
          "name": "Culata",
          "description": "Pieza superior del motor donde se alojan las válvulas.",
          "part_number": "CL-2838",
          "price": "599.99",
          "stock": 2,
          "image": "https://storage.googleapis.com/feriabucket/1735268131773_security.jpg",
          "equivalent_products": [],
          "parent_products": [3, 4]
        },
        {
          "id": 39,
          "name": "Volante de Inercia",
          "description": "Almacena energía cinética para suavizar las variaciones de velocidad del motor.",
          "part_number": "VI-2939",
          "price": "199.99",
          "stock": 2,
          "image": "https://storage.googleapis.com/feriabucket/1735268131773_security.jpg",
          "equivalent_products": [],
          "parent_products": [4, 5]
        },
        {
          "id": 40,
          "name": "Soporte de Motor",
          "description": "Base que sostiene el motor, reduciendo vibraciones.",
          "part_number": "SM-3040",
          "price": "24.99",
          "stock": 8,
          "image": "https://storage.googleapis.com/feriabucket/1735268131773_security.jpg",
          "equivalent_products": [],
          "parent_products": [1, 2, 3, 4, 5]
        },
        {
          "id": 41,
          "name": "Filtro de Combustible",
          "description": "Elimina impurezas del combustible antes de llegar al motor.",
          "part_number": "FC-3141",
          "price": "12.99",
          "stock": 15,
          "image": "https://storage.googleapis.com/feriabucket/1735268131773_security.jpg",
          "equivalent_products": [],
          "parent_products": [1, 2, 3, 4, 5]
        },
        {
          "id": 42,
          "name": "Sensor de Presión de Aceite",
          "description": "Monitorea la presión del aceite en el motor.",
          "part_number": "SPA-3242",
          "price": "14.99",
          "stock": 10,
          "image": "https://storage.googleapis.com/feriabucket/1735268085750_categories.jpg",
          "equivalent_products": [],
          "parent_products": [1, 4]
        },
        {
          "id": 43,
          "name": "Bujía Industrial",
          "description": "Diseñada para motores diésel de gran tamaño.",
          "part_number": "BI-3343",
          "price": "25.99",
          "stock": 10,
          "image": "https://storage.googleapis.com/feriabucket/1735268085750_categories.jpg",
          "equivalent_products": [],
          "parent_products": [3, 5]
        },
        {
          "id": 44,
          "name": "Colector de Admisión",
          "description": "Distribuye uniformemente el aire a cada cilindro.",
          "part_number": "CA-3444",
          "price": "199.99",
          "stock": 4,
          "image": "https://storage.googleapis.com/feriabucket/1735268085750_categories.jpg",
          "equivalent_products": [],
          "parent_products": [2, 3]
        },
        {
          "id": 45,
          "name": "Sensor de Revoluciones",
          "description": "Mide la velocidad de giro del cigüeñal.",
          "part_number": "SR-3545",
          "price": "34.99",
          "stock": 6,
          "image": "https://storage.googleapis.com/feriabucket/1735268085750_categories.jpg",
          "equivalent_products": [],
          "parent_products": [1, 3, 4]
        },
        {
          "id": 46,
          "name": "Eje de Balance",
          "description": "Reduce la vibración del motor equilibrando las fuerzas internas.",
          "part_number": "EB-3646",
          "price": "179.99",
          "stock": 3,
          "image": "https://storage.googleapis.com/feriabucket/1735268085750_categories.jpg",
          "equivalent_products": [],
          "parent_products": [5]
        },
        {
          "id": 47,
          "name": "Sistema de Escape Deportivo",
          "description": "Mejora el flujo de gases y el sonido del motor.",
          "part_number": "SED-3747",
          "price": "349.99",
          "stock": 1,
          "image": "https://storage.googleapis.com/feriabucket/1735268085750_categories.jpg",
          "equivalent_products": [],
          "parent_products": [4]
        },
        {
          "id": 48,
          "name": "Culata Reforzada",
          "description": "Diseñada para soportar mayores presiones de combustión.",
          "part_number": "CLR-3848",
          "price": "699.99",
          "stock": 1,
          "image": "https://storage.googleapis.com/feriabucket/1735268122196_privacy.jpg",
          "equivalent_products": [38],
          "parent_products": [3, 4]
        },
        {
          "id": 49,
          "name": "Inyector de Alto Flujo",
          "description": "Incrementa el caudal de combustible para mayor potencia.",
          "part_number": "IAF-3949",
          "price": "99.99",
          "stock": 7,
          "image": "https://storage.googleapis.com/feriabucket/1735268122196_privacy.jpg",
          "equivalent_products": [],
          "parent_products": [2, 3, 4]
        },
        {
          "id": 50,
          "name": "Bobina de Encendido",
          "description": "Genera la alta tensión necesaria para producir la chispa.",
          "part_number": "BE-4050",
          "price": "39.99",
          "stock": 10,
          "image": "https://storage.googleapis.com/feriabucket/1735268122196_privacy.jpg",
          "equivalent_products": [],
          "parent_products": [1, 2]
        }
]
    