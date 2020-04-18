import React from 'react';
import hacer1 from './../../img/hacer1.jpg';
import hacer2 from './../../img/hacer2.jpg';
import hacer3 from './../../img/hacer3.jpg';
import hacer4 from './../../img/hacer4.jpg';
import hospedaje1 from './../../img/hospedaje1.jpg';
import hospedaje2 from './../../img/hospedaje2.jpg';
import hospedaje3 from './../../img/hospedaje3.jpg';
import populares1 from './../../img/populares1.jpg';
import populares2 from './../../img/populares2.jpg';
import populares3 from './../../img/populares3.jpg';
import populares4 from './../../img/populares4.jpg';
import newyork1 from './../../img/newyork1.jpg';
import newyork2 from './../../img/newyork2.jpg';
import newyork3 from './../../img/newyork3.jpg';
import newyork4 from './../../img/newyork4.jpg';

const Main = () => {
    return (
        <main className="contenido contenedor">
            <section className="modulo">
                <h2>Que hacer</h2>
                <div className="contenedor-cards">
                    <div className="card">
                        <img src={hacer1} alt="hacer1"/>
                        <div className="info">
                            <p className="categoria concierto">Concierto</p>
                            <p className="titulo">Música electrónica 2020</p>
                            <p className="precio">$1,200 por persona</p>
                        </div>
                    </div>
                    <div className="card">
                        <img src={hacer2} alt="hacer2"/>
                        <div className="info">
                            <p className="categoria concierto">Concierto</p>
                            <p className="titulo">Rock en los Ángeles</p>
                            <p className="precio">$1,200 por persona</p>
                        </div>
                    </div>
                    <div className="card">
                        <img src={hacer3} alt="hacer3"/>
                        <div className="info">
                            <p className="categoria clase">Clase de Cocina</p>
                            <p className="titulo">Comida Española para principiantes</p>
                            <p className="precio">$400 por persona</p>
                        </div>
                    </div>
                    <div className="card">
                        <img src={hacer4} alt="hacer4"/>
                        <div className="info">
                            <p className="categoria paseo">Paseo en Bici</p>
                            <p className="titulo">Paseo en las Montañas</p>
                            <p className="precio">$200 por persona</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="modulo">
                <h2>Presentamos MiViaje.com Plus</h2>
                <div className="contenedor-cards premium">
                    <div className="info">
                        <h3>Una nueva sección de alojamientos de lujo</h3>
                        <a href="/" className="boton">Explorar Alojamiento</a>
                    </div>
                </div>
            </section>

            <section className="modulo">
                <h2>Hospedaje</h2>
                <div className="contenedor-cards">
                    <div className="card">
                        <img src={hospedaje1} alt="hospedaje1"/>
                        <div className="info">
                            <p className="categoria hospedaje">Casa Completa - 2 Camas</p>
                            <p className="titulo">Casa completa con todos los servicios y 2 recamaras</p>
                            <p className="precio">$3,200 por noche</p>
                        </div>
                    </div>
                    <div className="card">
                        <img src={hospedaje2} alt="hospedaje2"/>
                        <div className="info">
                            <p className="categoria hospedaje">1 Cuarto con 2 camas</p>
                            <p className="titulo">1 Cuarto con 2 camas y alberca</p>
                            <p className="precio">$2,200 por noche</p>
                        </div>
                    </div>
                    <div className="card">
                        <img src={hospedaje3} alt="hospedaje3"/>
                        <div className="info">
                            <p className="categoria hospedaje">Cabaña completa - 4 Camas</p>
                            <p className="titulo">Cabaña en Bosque para 6 personas</p>
                            <p className="precio">$2,500 por noche</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="destinos modulo">
                <h2>Destinos Populares</h2>
                <div className="contenedor-cards">
                    <div className="card">
                        <img src={populares1} alt="hospedaje1"/>
                        <div className="info">
                            <p className="titulo">Austria</p>
                        </div>
                    </div>
                    <div className="card">
                        <img src={populares2} alt="hospedaje1"/>
                        <div className="info">
                            <p className="titulo">Francia</p>
                        </div>
                    </div>
                    <div className="card">
                        <img src={populares3} alt="hospedaje1"/>
                        <div className="info">
                            <p className="titulo">Grecia</p>
                        </div>
                    </div>
                    <div className="card">
                        <img src={populares4} alt="hospedaje1"/>
                        <div className="info">
                            <p className="titulo">Inglaterra</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="modulo">
                <h2>Que hacer en New York</h2>
                <div className="contenedor-cards">
                    <div className="card">
                        <img src={newyork1} alt="newyork1"/>
                        <div className="info">
                            <p className="categoria concierto">Clase</p>
                            <p className="titulo">Comida Japonesa para Principiantes</p>
                            <p className="precio">$300 por persona</p>
                        </div>
                    </div>
                    <div className="card">
                        <img src={newyork2} alt="newyork2"/>
                        <div className="info">
                            <p className="categoria concierto">Concierto</p>
                            <p className="titulo">Festival EDM 2018</p>
                            <p className="precio">$1,200 por persona</p>
                        </div>
                    </div>
                    <div className="card">
                        <img src={newyork3} alt="newyork3"/>
                        <div className="info">
                            <p className="categoria clase">Clase de Cocina</p>
                            <p className="titulo">Paella Dominicana</p>
                            <p className="precio">$200 por persona</p>
                        </div>
                    </div>
                    <div className="card">
                        <img src={newyork4} alt="newyork4"/>
                        <div className="info">
                            <p className="categoria paseo">Paseos</p>
                            <p className="titulo">Paseo a Caballo</p>
                            <p className="precio">$100 por persona</p>
                        </div>
                    </div>
                </div>
            </section>

        </main>
    );
}

export default Main; 