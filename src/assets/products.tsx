export interface Product {
      id: number;
      name: string;
      description: string;
      part_number: string;
      price: string;
      discounted_price?: string; // added in component
      stock: number;
      image: string;
      parent_products?: number[];
      equivalent_products?: number[];
      sales: number;
      brand: string;
}

export const ALL_PRODUCTS: Product[] = [
      // -------------------------------------------------
      // MOTORES (padres, sin parent_products)
      // -------------------------------------------------
      {
            "id": 1,
            "name": "Motor Diesel A",
            "description": "Motor diésel de alto rendimiento para buses.",
            "part_number": "MD-A0001",
            "price": "5000.00",
            "stock": 2,
            "image": "/images/motor.jpg",
            "equivalent_products": [2], // Equivalencia con Motor Diesel B
            "parent_products": [],
            "sales": 12,
            "brand": "International"
      },
      {
            "id": 2,
            "name": "Motor Diesel B",
            "description": "Motor diésel de nueva generación para autobuses.",
            "part_number": "MD-B0002",
            "price": "5200.00",
            "stock": 3,
            "image": "/images/motor.jpg",
            "equivalent_products": [1], // Equivalencia con Motor Diesel A
            "parent_products": [],
            "sales": 7,
            "brand": "Freightliner"
      },
      {
            "id": 3,
            "name": "Motor Diesel C",
            "description": "Motor diésel de alta potencia, ideal para buses de pasajeros.",
            "part_number": "MD-C0003",
            "price": "5400.00",
            "stock": 1,
            "image": "/images/motor.jpg",
            "equivalent_products": [4], // Equivalencia con Motor Diesel D
            "parent_products": [],
            "sales": 3,
            "brand": "Volvo"
      },
      {
            "id": 4,
            "name": "Motor Diesel D",
            "description": "Motor diésel con excelente relación calidad/precio.",
            "part_number": "MD-D0004",
            "price": "4800.00",
            "stock": 4,
            "image": "/images/motor.jpg",
            "equivalent_products": [3], // Equivalencia con Motor Diesel C
            "parent_products": [],
            "sales": 10,
            "brand": "Scania"
      },
      {
            "id": 5,
            "name": "Motor Diesel E",
            "description": "Motor diésel robusto para buses interurbanos.",
            "part_number": "MD-E0005",
            "price": "5100.00",
            "stock": 2,
            "image": "/images/motor.jpg",
            "equivalent_products": [51], // Equivalencia con Motor Diesel F
            "parent_products": [],
            "sales": 6,
            "brand": "Mercedes-Benz"
      },
      {
            "id": 51,
            "name": "Motor Diesel F",
            "description": "Motor diésel de última generación para buses de larga distancia.",
            "part_number": "MD-F0006",
            "price": "5500.00",
            "stock": 2,
            "image": "/images/motor.jpg",
            "equivalent_products": [5], // Equivalencia con Motor Diesel E
            "parent_products": [],
            "sales": 9,
            "brand": "Iveco"
      },

      // -------------------------------------------------
      // NUEVOS MOTORES (para cubrir todas las marcas faltantes)
      // -------------------------------------------------
      {
            "id": 61,
            "name": "Motor Diesel G",
            "description": "Motor diésel de baja emisión para rutas urbanas.",
            "part_number": "MD-G0061",
            "price": "5600.00",
            "stock": 3,
            "image": "/images/motor.jpg",
            "equivalent_products": [62], // Equivalencia con Motor Diesel H
            "parent_products": [],
            "sales": 4,
            "brand": "Agrale"
      },
      {
            "id": 62,
            "name": "Motor Diesel H",
            "description": "Motor diésel para autobuses de media capacidad.",
            "part_number": "MD-H0062",
            "price": "5300.00",
            "stock": 2,
            "image": "/images/motor.jpg",
            "equivalent_products": [61], // Equivalencia con Motor Diesel G
            "parent_products": [],
            "sales": 5,
            "brand": "Hino"
      },
      {
            "id": 63,
            "name": "Motor Diesel I",
            "description": "Motor de alto par para aplicaciones de gran peso.",
            "part_number": "MD-I0063",
            "price": "5900.00",
            "stock": 1,
            "image": "/images/motor.jpg",
            "equivalent_products": [64], // Equivalencia con Motor Diesel J
            "parent_products": [],
            "sales": 2,
            "brand": "MAN"
      },
      {
            "id": 64,
            "name": "Motor Diesel J",
            "description": "Motor diésel confiable con tecnología avanzada.",
            "part_number": "MD-J0064",
            "price": "5700.00",
            "stock": 4,
            "image": "/images/motor.jpg",
            "equivalent_products": [63], // Equivalencia con Motor Diesel I
            "parent_products": [],
            "sales": 6,
            "brand": "Volkswagen"
      },

      // -------------------------------------------------
      // PIEZAS (hijos, con un solo motor como parent_products)
      // -------------------------------------------------
      {
            "id": 6,
            "name": "Filtro de Aceite",
            "description": "Filtro de aceite diseñado para mantener la pureza del lubricante.",
            "part_number": "FA-1006",
            "price": "29.99",
            "stock": 10,
            "image": "/images/filter.jpg",
            "equivalent_products": [],
            "parent_products": [1],
            "sales": 25,
            "brand": "MANN Filter"
      },
      {
            "id": 7,
            "name": "Bomba de Combustible",
            "description": "Bomba con gran capacidad de flujo para motores diésel de buses.",
            "part_number": "BC-2007",
            "price": "179.99",
            "stock": 5,
            "image": "/images/bomb.jpg",
            "equivalent_products": [],
            "parent_products": [1],
            "sales": 12,
            "brand": "Bosch"
      },
      {
            "id": 8,
            "name": "Inyector de Combustible",
            "description": "Inyector de alta presión para un desempeño eficiente.",
            "part_number": "IC-3008",
            "price": "89.99",
            "stock": 20,
            "image": "/images/inyector.jpg",
            "equivalent_products": [49, 66, 58], 
            // Relacionado con varios inyectores
            "parent_products": [2],
            "sales": 8,
            "brand": "Delphi"
      },
      {
            "id": 9,
            "name": "Correa de Ventilador",
            "description": "Correa resistente para el ventilador de enfriamiento.",
            "part_number": "CV-4009",
            "price": "19.99",
            "stock": 0,
            "image": "/images/belt.jpg",
            "equivalent_products": [10],
            "parent_products": [2],
            "sales": 17,
            "brand": "Gates"
      },
      {
            "id": 10,
            "name": "Correa de Ventilador Premium",
            "description": "Versión premium con mayor durabilidad.",
            "part_number": "CVP-4010",
            "price": "24.99",
            "stock": 5,
            "image": "/images/belt.jpg",
            "equivalent_products": [9],
            "parent_products": [3],
            "sales": 21,
            "brand": "Gates"
      },
      {
            "id": 11,
            "name": "Filtro de Aire",
            "description": "Filtro para purificar el aire de admisión en motores diésel.",
            "part_number": "FA-1011",
            "price": "34.99",
            "stock": 10,
            "image": "/images/filter.jpg",
            "equivalent_products": [],
            "parent_products": [1],
            "sales": 14,
            "brand": "MANN Filter"
      },
      {
            "id": 12,
            "name": "Turbocompresor",
            "description": "Turbo para incrementar la potencia del motor diésel.",
            "part_number": "TB-5012",
            "price": "499.99",
            "stock": 2,
            "image": "/images/turbocharger.jpg",
            "equivalent_products": [67], 
            // Equivalente con Turbo de Geometría Variable
            "parent_products": [3],
            "sales": 4,
            "brand": "Garrett"
      },
      {
            "id": 13,
            "name": "Módulo de Control Electrónico",
            "description": "ECU para optimizar la inyección y el rendimiento del motor.",
            "part_number": "MC-6013",
            "price": "299.99",
            "stock": 2,
            "image": "/images/electronic_module.jpg",
            "equivalent_products": [],
            "parent_products": [3],
            "sales": 5,
            "brand": "Bosch"
      },
      {
            "id": 14,
            "name": "Radiador",
            "description": "Radiador de alta capacidad para refrigerar el motor diésel.",
            "part_number": "RD-7014",
            "price": "399.99",
            "stock": 3,
            "image": "/images/radiator.jpg",
            "equivalent_products": [],
            "parent_products": [4],
            "sales": 3,
            "brand": "Valeo"
      },
      {
            "id": 15,
            "name": "Ventilador de Refrigeración",
            "description": "Ventilador para mantener la temperatura ideal del motor.",
            "part_number": "VR-8015",
            "price": "59.99",
            "stock": 6,
            "image": "/images/turbocharger.jpg",
            "equivalent_products": [16],
            "parent_products": [4],
            "sales": 22,
            "brand": "Denso"
      },
      {
            "id": 16,
            "name": "Ventilador de Refrigeración Genérico",
            "description": "Alternativa económica para ventilación del motor.",
            "part_number": "VRG-8016",
            "price": "49.99",
            "stock": 10,
            "image": "/images/turbocharger.jpg",
            "equivalent_products": [15],
            "parent_products": [4],
            "sales": 30,
            "brand": "GenFan"
      },
      {
            "id": 17,
            "name": "Cigüeñal",
            "description": "Eje que convierte el movimiento lineal en rotatorio.",
            "part_number": "CG-9017",
            "price": "699.99",
            "stock": 2,
            "image": "/images/crankshaft.jpg",
            "equivalent_products": [],
            "parent_products": [5],
            "sales": 2,
            "brand": "Mahle"
      },
      {
            "id": 18,
            "name": "Cárter de Aceite",
            "description": "Depósito de aceite en la parte inferior del motor.",
            "part_number": "CO-1018",
            "price": "129.99",
            "stock": 5,
            "image": "/images/crankshaft.jpg",
            "equivalent_products": [],
            "parent_products": [1],
            "sales": 6,
            "brand": "ACDelco"
      },
      {
            "id": 19,
            "name": "Bomba de Aceite",
            "description": "Encargada de lubricar los componentes internos del motor.",
            "part_number": "BA-1119",
            "price": "89.99",
            "stock": 6,
            "image": "/images/bomb.jpg",
            "equivalent_products": [],
            "parent_products": [2],
            "sales": 18,
            "brand": "Bosch"
      },
      {
            "id": 20,
            "name": "Árbol de Levas",
            "description": "Regula la apertura y cierre de válvulas en el motor.",
            "part_number": "AL-1220",
            "price": "289.99",
            "stock": 2,
            "image": "/images/crankshaft.jpg",
            "equivalent_products": [],
            "parent_products": [5],
            "sales": 4,
            "brand": "Mahle"
      },
      {
            "id": 21,
            "name": "Múltiple de Escape",
            "description": "Colector para expulsar los gases del motor de manera eficiente.",
            "part_number": "ME-1321",
            "price": "249.99",
            "stock": 0,
            "image": "/images/valve.jpg",
            "equivalent_products": [22],
            "parent_products": [3],
            "sales": 9,
            "brand": "Walker"
      },
      {
            "id": 22,
            "name": "Múltiple de Escape Premium",
            "description": "Versión mejorada para reducir la contrapresión.",
            "part_number": "MEP-1322",
            "price": "299.99",
            "stock": 2,
            "image": "/images/valve.jpg",
            "equivalent_products": [21],
            "parent_products": [3],
            "sales": 6,
            "brand": "Walker"
      },
      {
            "id": 23,
            "name": "Bujía de Precalentamiento",
            "description": "Facilita el arranque del motor en frío.",
            "part_number": "BP-1423",
            "price": "15.99",
            "stock": 30,
            "image": "/images/valve.jpg",
            "equivalent_products": [],
            "parent_products": [1],
            "sales": 28,
            "brand": "NGK"
      },
      {
            "id": 24,
            "name": "Sensor de Oxígeno",
            "description": "Mide la concentración de oxígeno en los gases de escape.",
            "part_number": "SO-1524",
            "price": "49.99",
            "stock": 10,
            "image": "/images/electronic_module.jpg",
            "equivalent_products": [],
            "parent_products": [2],
            "sales": 7,
            "brand": "Bosch"
      },
      {
            "id": 25,
            "name": "Retén de Cigüeñal",
            "description": "Sello que evita fugas de aceite en el cigüeñal.",
            "part_number": "RC-1625",
            "price": "9.99",
            "stock": 15,
            "image": "/images/crankshaft.jpg",
            "equivalent_products": [],
            "parent_products": [5],
            "sales": 10,
            "brand": "SKF"
      },
      {
            "id": 26,
            "name": "Juego de Empaquetaduras",
            "description": "Conjunto de sellos para todas las uniones del motor.",
            "part_number": "JE-1726",
            "price": "99.99",
            "stock": 4,
            "image": "/images/filter.jpg",
            "equivalent_products": [],
            "parent_products": [3],
            "sales": 12,
            "brand": "Victor Reinz"
      },
      {
            "id": 27,
            "name": "Cámara de Combustión",
            "description": "Parte del motor donde se produce la ignición del combustible.",
            "part_number": "CC-1827",
            "price": "199.99",
            "stock": 2,
            "image": "/images/valve.jpg",
            "equivalent_products": [55], 
            // Equivalente con Cámara de Combustión Reforzada
            "parent_products": [5],
            "sales": 3,
            "brand": "Mahle"
      },
      {
            "id": 28,
            "name": "Válvula de Escape",
            "description": "Permite la salida de los gases generados en la combustión.",
            "part_number": "VE-1928",
            "price": "24.99",
            "stock": 20,
            "image": "/images/valve.jpg",
            "equivalent_products": [60], 
            // Equivalente con Válvula de Escape Cerámica
            "parent_products": [3],
            "sales": 15,
            "brand": "TRW"
      },
      {
            "id": 29,
            "name": "Válvula de Admisión",
            "description": "Controla la entrada de aire al cilindro.",
            "part_number": "VA-2029",
            "price": "22.99",
            "stock": 15,
            "image": "/images/valve.jpg",
            "equivalent_products": [],
            "parent_products": [1],
            "sales": 11,
            "brand": "TRW"
      },
      {
            "id": 30,
            "name": "Bomba de Agua",
            "description": "Encargada de la circulación del líquido refrigerante.",
            "part_number": "BA-2130",
            "price": "79.99",
            "stock": 8,
            "image": "/images/bomb.jpg",
            "equivalent_products": [],
            "parent_products": [4],
            "sales": 6,
            "brand": "ACDelco"
      },
      {
            "id": 31,
            "name": "Termostato",
            "description": "Regula la temperatura del motor abriendo y cerrando el paso del refrigerante.",
            "part_number": "TS-2231",
            "price": "19.99",
            "stock": 10,
            "image": "/images/electronic_module.jpg",
            "equivalent_products": [57], 
            // Equivalente con Termostato Inteligente
            "parent_products": [2],
            "sales": 9,
            "brand": "Stant"
      },
      {
            "id": 32,
            "name": "Sensor de Temperatura",
            "description": "Mide la temperatura del refrigerante para el control del motor.",
            "part_number": "ST-2332",
            "price": "14.99",
            "stock": 12,
            "image": "/images/electronic_module.jpg",
            "equivalent_products": [],
            "parent_products": [3],
            "sales": 12,
            "brand": "Bosch"
      },
      {
            "id": 33,
            "name": "Bielas",
            "description": "Conectan los pistones con el cigüeñal, transmitiendo la fuerza de combustión.",
            "part_number": "BI-2433",
            "price": "129.99",
            "stock": 2,
            "image": "/images/crankshaft.jpg",
            "equivalent_products": [59], 
            // Equivalente con Bielas Reforzadas
            "parent_products": [5],
            "sales": 4,
            "brand": "Mahle"
      },
      {
            "id": 34,
            "name": "Pistón",
            "description": "Elemento móvil que comprime la mezcla en la cámara de combustión.",
            "part_number": "PI-2534",
            "price": "49.99",
            "stock": 10,
            "image": "/images/valve.jpg",
            "equivalent_products": [35],
            "parent_products": [1],
            "sales": 8,
            "brand": "Mahle"
      },
      {
            "id": 35,
            "name": "Pistón Reforzado",
            "description": "Versión reforzada para mayor durabilidad bajo alta compresión.",
            "part_number": "PIR-2535",
            "price": "59.99",
            "stock": 5,
            "image": "/images/valve.jpg",
            "equivalent_products": [34],
            "parent_products": [5],
            "sales": 2,
            "brand": "Mahle"
      },
      {
            "id": 36,
            "name": "Bomba Inyectora",
            "description": "Controla la presión y el momento de inyección de combustible.",
            "part_number": "BI-2636",
            "price": "349.99",
            "stock": 3,
            "image": "/images/bomb.jpg",
            "equivalent_products": [68], 
            // Equivalente con Bomba Common Rail
            "parent_products": [2],
            "sales": 5,
            "brand": "Bosch"
      },
      {
            "id": 37,
            "name": "Tapa de Válvulas",
            "description": "Cubre el conjunto de válvulas y el árbol de levas.",
            "part_number": "TV-2737",
            "price": "39.99",
            "stock": 6,
            "image": "/images/valve.jpg",
            "equivalent_products": [],
            "parent_products": [5],
            "sales": 10,
            "brand": "ACDelco"
      },
      {
            "id": 38,
            "name": "Culata",
            "description": "Pieza superior del motor donde se alojan las válvulas.",
            "part_number": "CL-2838",
            "price": "599.99",
            "stock": 2,
            "image": "/images/valve.jpg",
            "equivalent_products": [48], 
            // Equivalente con Culata Reforzada
            "parent_products": [3],
            "sales": 1,
            "brand": "Mahle"
      },
      {
            "id": 39,
            "name": "Volante de Inercia",
            "description": "Almacena energía cinética para suavizar las variaciones de velocidad del motor.",
            "part_number": "VI-2939",
            "price": "199.99",
            "stock": 2,
            "image": "/images/crankshaft.jpg",
            "equivalent_products": [],
            "parent_products": [4],
            "sales": 3,
            "brand": "LUK"
      },
      {
            "id": 40,
            "name": "Soporte de Motor",
            "description": "Base que sostiene el motor, reduciendo vibraciones.",
            "part_number": "SM-3040",
            "price": "24.99",
            "stock": 8,
            "image": "/images/motor.jpg",
            "equivalent_products": [],
            "parent_products": [1],
            "sales": 27,
            "brand": "Monroe"
      },
      {
            "id": 41,
            "name": "Filtro de Combustible",
            "description": "Elimina impurezas del combustible antes de llegar al motor.",
            "part_number": "FC-3141",
            "price": "12.99",
            "stock": 15,
            "image": "/images/filter.jpg",
            "equivalent_products": [],
            "parent_products": [2],
            "sales": 34,
            "brand": "MANN Filter"
      },
      {
            "id": 42,
            "name": "Sensor de Presión de Aceite",
            "description": "Monitorea la presión del aceite en el motor.",
            "part_number": "SPA-3242",
            "price": "14.99",
            "stock": 10,
            "image": "/images/electronic_module.jpg",
            "equivalent_products": [],
            "parent_products": [4],
            "sales": 11,
            "brand": "Bosch"
      },
      {
            "id": 43,
            "name": "Bujía Industrial",
            "description": "Diseñada para motores diésel de gran tamaño.",
            "part_number": "BI-3343",
            "price": "25.99",
            "stock": 10,
            "image": "/images/valve.jpg",
            "equivalent_products": [],
            "parent_products": [3],
            "sales": 19,
            "brand": "NGK"
      },
      {
            "id": 44,
            "name": "Colector de Admisión",
            "description": "Distribuye uniformemente el aire a cada cilindro.",
            "part_number": "CA-3444",
            "price": "199.99",
            "stock": 4,
            "image": "/images/valve.jpg",
            "equivalent_products": [],
            "parent_products": [2],
            "sales": 5,
            "brand": "Walker"
      },
      {
            "id": 45,
            "name": "Sensor de Revoluciones",
            "description": "Mide la velocidad de giro del cigüeñal.",
            "part_number": "SR-3545",
            "price": "34.99",
            "stock": 6,
            "image": "/images/electronic_module.jpg",
            "equivalent_products": [],
            "parent_products": [3],
            "sales": 2,
            "brand": "Bosch"
      },
      {
            "id": 46,
            "name": "Eje de Balance",
            "description": "Reduce la vibración del motor equilibrando las fuerzas internas.",
            "part_number": "EB-3646",
            "price": "179.99",
            "stock": 3,
            "image": "/images/crankshaft.jpg",
            "equivalent_products": [],
            "parent_products": [5],
            "sales": 7,
            "brand": "Mahle"
      },
      {
            "id": 47,
            "name": "Sistema de Escape Deportivo",
            "description": "Mejora el flujo de gases y el sonido del motor.",
            "part_number": "SED-3747",
            "price": "349.99",
            "stock": 1,
            "image": "/images/valve.jpg",
            "equivalent_products": [],
            "parent_products": [4],
            "sales": 3,
            "brand": "MagnaFlow"
      },
      {
            "id": 48,
            "name": "Culata Reforzada",
            "description": "Diseñada para soportar mayores presiones de combustión.",
            "part_number": "CLR-3848",
            "price": "699.99",
            "stock": 1,
            "image": "/images/valve.jpg",
            "equivalent_products": [38],
            "parent_products": [4],
            "sales": 2,
            "brand": "Mahle"
      },
      {
            "id": 49,
            "name": "Inyector de Alto Flujo",
            "description": "Incrementa el caudal de combustible para mayor potencia.",
            "part_number": "IAF-3949",
            "price": "99.99",
            "stock": 7,
            "image": "/images/inyector.jpg",
            "equivalent_products": [8, 66, 58], 
            // Mismo grupo de inyectores
            "parent_products": [2],
            "sales": 10,
            "brand": "Delphi"
      },
      {
            "id": 50,
            "name": "Bobina de Encendido",
            "description": "Genera la alta tensión necesaria para producir la chispa.",
            "part_number": "BE-4050",
            "price": "39.99",
            "stock": 10,
            "image": "/images/electronic_module.jpg",
            "equivalent_products": [],
            "parent_products": [1],
            "sales": 6,
            "brand": "Denso"
      },

      // -------------------------------------------------
      // PIEZAS NUEVAS (ajustadas a un solo motor)
      // -------------------------------------------------
      {
            "id": 52,
            "name": "Sensor EGR",
            "description": "Sensor para controlar la recirculación de gases de escape.",
            "part_number": "SE-4152",
            "price": "59.99",
            "stock": 4,
            "image": "/images/electronic_module.jpg",
            "equivalent_products": [],
            "parent_products": [51],
            "sales": 2,
            "brand": "Bosch"
      },
      {
            "id": 53,
            "name": "Bomba de Refrigerante",
            "description": "Permite un flujo constante de refrigerante en el motor.",
            "part_number": "BR-4253",
            "price": "129.99",
            "stock": 5,
            "image": "/images/bomb.jpg",
            "equivalent_products": [],
            "parent_products": [51],
            "sales": 1,
            "brand": "ACDelco"
      },
      {
            "id": 54,
            "name": "Tubería de Aceite",
            "description": "Conduce el aceite a diferentes componentes críticos del motor.",
            "part_number": "TA-4354",
            "price": "49.99",
            "stock": 10,
            "image": "/images/crankshaft.jpg",
            "equivalent_products": [],
            "parent_products": [51],
            "sales": 4,
            "brand": "ACDelco"
      },
      {
            "id": 55,
            "name": "Cámara de Combustión Reforzada",
            "description": "Soporta altas temperaturas y presiones en motores de alto rendimiento.",
            "part_number": "CCR-4455",
            "price": "299.99",
            "stock": 2,
            "image": "/images/valve.jpg",
            "equivalent_products": [27],
            "parent_products": [51],
            "sales": 3,
            "brand": "Mahle"
      },
      {
            "id": 56,
            "name": "Bomba de Vacío",
            "description": "Crea vacío para sistemas de freno y otros dispositivos del motor.",
            "part_number": "BV-4556",
            "price": "119.99",
            "stock": 3,
            "image": "/images/bomb.jpg",
            "equivalent_products": [],
            "parent_products": [2],
            "sales": 2,
            "brand": "Pierburg"
      },
      {
            "id": 57,
            "name": "Termostato Inteligente",
            "description": "Regula la temperatura del motor con precisión electrónica.",
            "part_number": "TI-4657",
            "price": "29.99",
            "stock": 6,
            "image": "/images/electronic_module.jpg",
            "equivalent_products": [31],
            "parent_products": [4],
            "sales": 8,
            "brand": "Stant"
      },
      {
            "id": 58,
            "name": "Inyector Common Rail",
            "description": "Garantiza una inyección precisa y eficiente en motores diésel modernos.",
            "part_number": "ICR-4758",
            "price": "139.99",
            "stock": 4,
            "image": "/images/inyector.jpg",
            "equivalent_products": [8, 49, 66], 
            // Mismo grupo de inyectores
            "parent_products": [51],
            "sales": 5,
            "brand": "Delphi"
      },
      {
            "id": 59,
            "name": "Bielas Reforzadas",
            "description": "Diseñadas para soportar mayores esfuerzos en motores de alto desempeño.",
            "part_number": "BR-4859",
            "price": "179.99",
            "stock": 2,
            "image": "/images/crankshaft.jpg",
            "equivalent_products": [33],
            "parent_products": [51],
            "sales": 2,
            "brand": "Mahle"
      },
      {
            "id": 60,
            "name": "Válvula de Escape Cerámica",
            "description": "Ofrece mayor resistencia al calor y menor desgaste.",
            "part_number": "VEC-4960",
            "price": "34.99",
            "stock": 10,
            "image": "/images/valve.jpg",
            "equivalent_products": [28],
            "parent_products": [51],
            "sales": 1,
            "brand": "TRW"
      },
      {
            "id": 65,
            "name": "Filtro de Partículas Diesel",
            "description": "Reduce las emisiones de partículas en motores diésel.",
            "part_number": "FPD-0065",
            "price": "199.99",
            "stock": 5,
            "image": "/images/filter.jpg",
            "equivalent_products": [],
            "parent_products": [61],
            "sales": 1,
            "brand": "Bosch"
      },
      {
            "id": 66,
            "name": "Inyector Electrónico Avanzado",
            "description": "Control electrónico para un consumo optimizado de combustible.",
            "part_number": "IEA-0066",
            "price": "129.99",
            "stock": 4,
            "image": "/images/inyector.jpg",
            "equivalent_products": [8, 49, 58], 
            // Mismo grupo de inyectores
            "parent_products": [62],
            "sales": 2,
            "brand": "Delphi"
      },
      {
            "id": 67,
            "name": "Turbo de Geometría Variable",
            "description": "Ajusta el ángulo de los álabes para optimizar la presión de sobrealimentación.",
            "part_number": "TGV-0067",
            "price": "599.99",
            "stock": 2,
            "image": "/images/turbocharger.jpg",
            "equivalent_products": [12],
            "parent_products": [63],
            "sales": 1,
            "brand": "Garrett"
      },
      {
            "id": 68,
            "name": "Bomba Common Rail",
            "description": "Proporciona alta presión estable para el sistema de inyección.",
            "part_number": "BCR-0068",
            "price": "349.99",
            "stock": 3,
            "image": "/images/bomb.jpg",
            "equivalent_products": [36],
            "parent_products": [64],
            "sales": 2,
            "brand": "Bosch"
      }
];
