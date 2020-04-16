import React from 'react';
import logo from './../../img/logo.png';

const Hero = () => {
    return (
        <div className="hero">
            <header className="header contenedor">
                <div className="logo">
                    <img src={logo} alt="logo"/>
                </div>
                <nav className="navegacion">
                    <a href="/">Vender</a>
                    <a href="/">Ayuda</a>
                    <a href="/">Registro</a>
                    <a href="/">Iniciar Sesión</a>
                </nav>
            </header>
            <div className="contenido-hero contenedor">
                <h1>Encuentra hospedaje para tus próximas vacaciones</h1>
                <form action="">
                    <input type="text" className="busqueda" placeholder="New York, Londres, Roma, Guadalajara..."/>
                    <input type="submit" value="Buscar"/>
                </form>
            </div> 
        </div>
    );
}

export default Hero;