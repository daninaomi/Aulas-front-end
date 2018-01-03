import React from 'react';
import SectionProduct from "./components/SectionProduct/SectionProduct";
import Note1 from "./img/note-1.png";
import Note2 from "./img/note-2.png";
import TV1 from "./img/tv-1.png";
import TV2 from "./img/tv-2.png";

var products = [
  {
    name: "Notebook",
    price: 1745.20,
    image: {
      src: Note1,
      alt: "Notebook"
    }
  },
  {
    name: "Notebook",
    price: 2000.90,
    image: {
      src: Note2,
      alt: "Notebook"
    }
  },
  {
    name: "TV",
    price: 3745.20,
    image: {
      src: TV1,
      alt: "Televisão"
    }
  },
  {
    name: "TV",
    price: 2500.90,
    image: {
      src: TV2,
      alt: "Televisão"
    }
  }
];


export default () => (
  <div className="App">
    <SectionProduct title="Produtos em promoção" products={products} />
  </div>
);