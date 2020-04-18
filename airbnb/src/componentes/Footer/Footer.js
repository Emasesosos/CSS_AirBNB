import React from 'react';

const Footer = () => {
    return (
        <footer className="footer">
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
    );
}

export default Footer;