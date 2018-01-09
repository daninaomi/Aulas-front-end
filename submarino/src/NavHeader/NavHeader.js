import React from "react";
import "./NavHeader.css";

import IconMenu from "../img/menu-icon.png";
import IconProfile from "../img/profile-icon.png";
import IconCart from "../img/cart-icon.png";
import Logo from "../img/logo.gif";


export default (props) => (
    <nav className="nav-header">
        <img className="nav-header__menu" src={IconMenu} alt="menu icon" />
        <img className="logo" src={Logo} alt="logo" />
        <img className="nav-header__profile" src={IconProfile} alt="menu profile" />
        <img className="nav-header__cart" src={IconCart} alt="menu cart" />

        <div className="nav-header__search-bar">
            <input className="nav-header__search" type="text" id="search" name="search" placeholder="O que você deseja buscar?" />
            <i className="fa fa-search" />
        </div>
    </nav>
);