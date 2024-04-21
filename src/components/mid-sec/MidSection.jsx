import './MidSection.css'
import 'boxicons';
import CV from '../../assets/CV_Español.pdf'
import PY from '../../assets/svg-python.svg'
import FOTO from '../../assets/FOTO MÍA.png'

function MidSection() {
    return (
        <>
            <div className='container'>
                <section className='grid-colums'>
                    <div className="about grid-big grid-general">
                        <div className='user-icon'>
                            <img src={FOTO} alt="" />
                        </div>
                        <div className='about-info'>
                            <h1>👋 Hola, soy Ramiro. </h1>
                            <p><b>Desarrollador FullStack</b> con solida experiencia pero que aún no ha podido ponerlo a. Así diseñar páginas tanto creativas como funcionales e innovadoras visualmente y practicamente. <br /><p>Estando a disposición para programar las mejores páginas web y satisfacer los requesitos de mis clientes. 😁</p></p>
                            <a className='cv-btn' href={CV} download={CV}>Descarga CV</a>
                        </div>
                    </div>
                </section>
                <section className='grid-colums'>
                    <div className='skills grid-medium grid-general'>
                        <h1>HABILIDADES</h1>
                        <div>
                            <ul className='skills-list'>
                                <li title='HTML' className='sk-1'><box-icon name='html5' type='logo' color='#ffffff' ></box-icon></li>
                                <li title='CSS' className='sk-2'><box-icon name='css3' type='logo' color='#ffffff' ></box-icon></li>
                                <li title='JS' className='sk-3'><box-icon name='file-js' type='solid' color='#ffffff' ></box-icon></li>
                                <li title='BOOTSTRAP' className='sk-4'><box-icon name='bootstrap' type='logo' color='#ffffff' ></box-icon></li>
                                <li title='REACT' className='sk-5'><box-icon name='react' type='logo' color='#08ebfd' ></box-icon></li>
                                <li title='PHP' className='sk-6'><box-icon name='php' type='logo' color='#ffffff' ></box-icon></li>
                                <li title='PYTHON' className='sk-7'><img src={PY} alt="" /></li>
                            </ul>
                        </div>
                    </div>
                </section>
                <section className='grid-colums'>
                    <div className="icon-in grid-simple grid-general">
                        <a href="https://www.linkedin.com/in/ram-pav2005/">
                            <div className='logo-c' title='LinkedIn'>
                                <box-icon name='linkedin-square' type='logo' color='#ffffff' ></box-icon>
                            </div>
                        </a>
                    </div>
                    <div className='icon-git grid-simple grid-general' title='GitHub'>
                        <a href="https://github.com/INaoL2021">
                            <div className='logo-c'>
                                <box-icon name='github' type='logo' color='#ffffff' ></box-icon>
                            </div>
                        </a>
                    </div>
                    <div className='icon-ins grid-simple grid-general' title='Instagram'>
                        <a href="https://www.instagram.com/l_ramiro_p/">
                            <div className='logo-c'>
                                <box-icon name='instagram-alt' type='logo' color='#f5f0f0' ></box-icon>
                            </div>
                        </a>
                    </div>
                    <div className="icon-len grid-simple grid-general" title='Idiomas'>
                        <p><b>ES</b>-EN</p>
                    </div>
                </section>
                <section className='grid-colums'>
                    <div className='contact grid-general'>
                        <div>
                            <ul className='contact-list'>
                                <article>
                                    <box-icon name='envelope' type='solid' color='#ffffff' ></box-icon>
                                    <li><b>EMAIL:</b> ramiro1y4@gmail.com</li>
                                </article>
                                <article>
                                    <box-icon name='phone' type='solid' color='#ffffff' ></box-icon>
                                    <li><b>CELULAR:</b> +54 9 11 3203-3522</li>
                                </article>
                            </ul>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}

export default MidSection