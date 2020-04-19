import React, { useEffect } from 'react';
import logo from './../../img/logo.png';
import arriba1 from './../../img/arriba.jpg';
import arriba2 from './../../img/arriba2.jpg';

const Hero = () => {

    const hero = React.createRef();

    useEffect(() => {
        efectoImagen();
    },[]);

    const efectoImagen = () => {

        console.log('efectoImagen');

        const imagenHero = hero.current;
        console.log('imagenHero', imagenHero);

        let i = 0;
        let tiempo = 0;

        // Arreglo con imagenes de fondo
        const imagenes = [arriba1, arriba2];

        setInterval(() => {

            if (tiempo > 40) {

                tiempo = 0;
                imagenHero.style.backgroundImage = `url(${imagenes[i]})`;

                if(i === imagenes.length - 1) {
                    i = 0;
                } else {
                    i++;
                }
                console.log(i);
                console.log(imagenes[i]);

            } 
            
            tiempo++;
            imagenHero.style.backgroundPositionY = '-' + tiempo + 'px';

        }, 100);

    };

    return (
        // <div className="hero" onSubmit={onSubmit}>
        <div ref={hero} className="hero">
            <header className="header contenedor">
                <div className="logo">
                    <img 
                        src={logo} 
                        alt="logo"
                    />
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