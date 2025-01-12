export interface Brand {
      id: number;
      name: string;
      image: string;
      score: number;
    }
    
export const BRANDS: Brand[] = [
      { id: 1, name: "Agrale", image: "images/agrale.jpg", score: 2 },
      { id: 2, name: "Freightliner", image: "images/freightliner.jpg", score: 9 },
      { id: 3, name: "Hino", image: "images/hino.jpg", score: 6 },
      { id: 4, name: "International", image: "images/international.jpg", score: 8 },
      { id: 5, name: "Iveco", image: "images/iveco.jpg", score: 5 },
      { id: 6, name: "Man", image: "images/man.jpg", score: 7 },
      { id: 7, name: "Mercedes", image: "images/mercedes.jpg", score: 10 },
      { id: 8, name: "Scania", image: "images/scania.jpg", score: 8 },
      { id: 9, name: "Volkswagen", image: "images/volkswagen.jpg", score: 7 },
      { id: 10, name: "Volvo", image: "images/volvo.jpg", score: 9 }
];
    
    