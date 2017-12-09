import React from 'react';
import SectionProduct from "./SectionProduct/SectionProduct";
import Relogio from "./img/relogiocasio.jpg";

var products = [
  {
    name: "Relógio Cronógrafo",
    price: 1745.20,
    image: {
      src: Relogio,
      alt: "Relógio Dourado"
    }
  },
  {
    name: "Relógio Cronógrafo",
    price: 1745.20,
    image: {
      src: Relogio,
      alt: "Relógio Dourado"
    }
  },
  {
    name: "Relógio Cronógrafo",
    price: 1745.20,
    image: {
      src: Relogio,
      alt: "Relógio Dourado"
    }
  },
  {
    name: "Relógio Cronógrafo",
    price: 1745.20,
    image: {
      src: Relogio,
      alt: "Relógio Dourado"
    }
  }
];

console.log(products);
export default () => (
  <div className="App">
    <SectionProduct title="Relogios Caros Bagarai" products={products}/>
  </div>
);

