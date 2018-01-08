import React from 'react';
import SectionProduct from "./components/SectionProduct/SectionProduct";
import Ad1 from "./img/ad-1.png";
import Ad2 from "./img/ad-2.png";
import Ad3 from "./img/ad-3.png";
import Banner from "./img/banner.png";
import Book1 from "./img/book-1.jpg";
import Book2 from "./img/book-2.jpg";
import Certificate from "./img/certificado.gif";
import Game1 from "./img/game-1.png";
import HD1 from "./img/hd-1.png";
import Logo from "./img/logo.gif";
import Note1 from "./img/note-1.png";
import Note2 from "./img/note-2.png";
import Phone1 from "./img/phone-1.png";
import Relogio from "./img/relogio.jpg";
import Topinho from "./img/topinho.png";
import TopoHome from "./img/topo-home.png";
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