import './RightLeft-sec.css';
import 'boxicons';
import React, { useState, useEffect } from 'react';

function Reloj() {
    const [hora, setHora] = useState('');

    useEffect(() => {
        function actualizarHora() {
            const fechaHora = new Date();
            const horas = fechaHora.getHours();
            const minutos = fechaHora.getMinutes();
            const segundos= fechaHora.getSeconds();
            const horaFormateada = `${horas}:${minutos < 10 ? '0' : ''}${minutos}:${segundos}`;
            setHora(horaFormateada);
        }
        const intervalo = setInterval(actualizarHora, 1000);
        return () => clearInterval(intervalo);
    }, []);

    return (
        <div className='timeN'>
            <span>{hora}</span>
        </div>
    );
}

function RightLeftsec() {
    function handleClick(event) {
        event.preventDefault();
        alert('¡Página en Mantenimiento!');
    }

    return (
        <>
            <div className='container'>
                <section className='grid-colums'>
                    <div className="grid-info grid-general">
                        <Reloj />
                    </div>
                </section>
                <section className='grid-colums'>
                    <div className='grid-proyectos grid-general'>
                        <div className='proy-content'>
                            <h1>PROYECTOS</h1>
                            <div className='proy-card'>
                                <a href="https://dragon-tech-store.netlify.app/">
                                    <h3>DRAGON STORE</h3>
                                    <p>Eccommerce de de productos de hardware para computación.</p>
                                </a>
                            </div>
                            <div className='proy-card'>
                                <a href="" onClick={handleClick}>
                                    <h3>LOGIN SIGN IN</h3>
                                    <p>Creación e Inicio de sesion para cuenta hecho con Bootstrap.</p>
                                </a>
                            </div>
                            <div className="proy-card proy-card-footer">
                                <a href="https://github.com/INaoL2021">
                                    <h2>Ver más proyectos en GitHub</h2>
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
                <section className='grid-colums'>
                    <div className='grid-cursos grid-general'>
                        <div className='cursos-container'>
                            <h1>CURSOS</h1>
                            <p>Aquí encontraras un archivo .zip, el cual contendra varios archivos <b>PDF</b> de los cursos que he realizado hasta la fecha.</p>
                            <a className='btn-cursos' href="https://drive.google.com/file/d/1RovzemVWOv532z8eprkepSf69vEU5sc6/view?usp=sharing">DESCARGA CERTIFICADOS</a>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}

export default RightLeftsec