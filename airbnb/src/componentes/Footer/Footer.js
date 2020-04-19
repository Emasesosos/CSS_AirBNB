import React, { Fragment, useState } from 'react';

const Footer = () => {

    const [ boton, guardarBoton ] = useState({
        clase: 'btn-flotante',
        claseF: '',
        texto: 'Idioma y Moneda'
    });

    const { clase, claseF, texto } = boton;

    const onClick = (e) => {
        e.preventDefault();

        const claseMenu = e.target.classList;
        // console.log(claseMenu);

        if(claseMenu.contains('btn-flotante')) {

            guardarBoton({
                clase: 'activo',
                claseF: 'activoF',
                texto: 'X Cerrar'
            });

        } else {
            
            guardarBoton({
                clase: 'btn-flotante',
                claseF: '',
                texto: 'Idioma y Moneda'
            });
            
        }
    };

    return (
        <Fragment>
            <footer className={`footer ${claseF}`}> 
                <div className="contenedor contenedor-cards">
                    <div className="nav-footer">
                        <h3>MiViaje.com</h3>
                        <nav className="menu">
                            <a href="/">Empleo</a>
                            <a href="/">Prensa</a>
                            <a href="/">Politicas</a>
                            <a href="/">Ayuda</a>
                        </nav>
                    </div>
                    <div className="nav-footer">
                        <h3>Descubre MiViaje.com</h3>
                        <nav className="menu">
                            <a href="/">Confianza y Seguridad</a>
                            <a href="/">Crédito de Viajero</a>
                            <a href="/">AirBNB Citizen</a>
                            <a href="/">Viaje de Negocios</a>
                        </nav>
                    </div>
                    <div className="nav-footer">
                        <h3>Hospedaje</h3>
                        <nav className="menu">
                            <a href="/">Razones para Hospedar</a>
                            <a href="/">Hospitalidad</a>
                            <a href="/">Ser un anfitrión responsable</a>
                            <a href="/">Centro de la comunidad</a>
                        </nav>
                    </div>
                    <div className="nav-footer">
                        <nav className="sociales">
                            <ul>
                                <li>
                                    <a href="http://facebook.com" rel="noopener noreferrer"></a>
                                    <span>Facebook</span>
                                </li>
                                <li>
                                    <a href="http://twitter.com"  rel="noopener noreferrer"></a>
                                    <span>Twitter</span>
                                </li> 
                                <li>
                                    <a href="http://instagram.com"  rel="noopener noreferrer"></a>
                                    <span>Instagram</span>
                                </li>
                            </ul>
                        </nav>
                        <nav className="menu">
                            <a href="/">Razones para Hospedar</a>
                            <a href="/">Hospitalidad</a>
                            <a href="/">Ser un anfitrión responsable</a>
                            <a href="/">Centro de la comunidad</a>
                        </nav>
                    </div>
                </div>
            </footer>
            <a 
                href="/" 
                className={`${clase}`}
                onClick={onClick}
            >
                {texto}
            </a>
        </Fragment>
    );
}

export default Footer;