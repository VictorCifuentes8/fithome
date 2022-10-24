import React from 'react'
import {Link}  from "react-router-dom";
import LogoFitHome from "./imagenes/logoFitHome.png";
import BusquedaIcono from "@material-ui/icons/Search";
import Carrito from  "@material-ui/icons/ShoppingBasket";
import "./estilos/Header.css";

function Header(){
    return (
        <div className='header'>
            <Link to="/">
            {/* Logo de la pagina Fit Home*/}
            <img className="header_logo" src={LogoFitHome} alt="logo"></img>
            </Link>
            {/* Busqueda */}
            <div className='header_busqueda'>
            <input className="header_busquedaTexto" type="text" />
                <BusquedaIcono className="header_busquedaIcono" />
            </div> 
            
            {/* Cuenta */}
            
            <div className="header_cuenta">
            <Link to="/inicioSesion">
            <span className="header_itemNavegacion">Hola"Cuenta"</span>
            <span className="header_itemNavegacion">Iniciar Sesión</span>
            </Link>
            </div>

            {/* Carrito */}
            <div className="header_carrito">
            <Link to="/carrito">
            <Carrito />
                    <span className="header_productosCarrito"> 
                        0
                    </span>
            </Link>
            </div>
            <div className="header_contactanos">
            <span className="header_itemNavegacion">Contactanos</span>
            </div>
        </div>
    )
}
export default Header;