import React from "react";
import CardProduct from "../CardProduct/CardProduct";
import "./SectionProduct.css";


function card(products) {
    var prodList = [];

    for (var x = 0; x < products.length; x++) {
        prodList.push(<CardProduct name={products[x].name} price={products[x].price} image={products[x].image} />)
    } 

    return prodList;
}


export default (props) => (
    <section className="section-products">
        <h2>{props.title}</h2>
        <div className="section-product__cards">{card(props.products)}</div>
    </section>    
);