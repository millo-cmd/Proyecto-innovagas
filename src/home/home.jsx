import './home.css'

import {SwiperComponent} from './swiper'
import {FooterComponent} from '../footer'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';

import { motion } from 'framer-motion'

import 'swiper/css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';


export const HomeComponent = () => {

  useEffect(() => {
    AOS.init({
      duration: 800, 
      once: false,      
      mirror: true,
      offset: 120, 
      delay: 0 
    });
    

    AOS.refresh();
    

    return () => {
      AOS.refresh();
    };
  }, []);

  return (
    <>
      <div className="banner-principal">
        <div className='imagenBanner'></div>
        <div className='contenedorBanner'>
          <h1 className='titulo'>Ofrecemos energía sostenible</h1>
          <p className='parrafo-banner'>Para que juntos hagamos de esta hermosa Guatemala el próspero país que todos merecemos</p>
            <div className='contenedorBoton'>
              <button className='boton-contacto'>Contactanos!</button>
              <button className='boton-producto'>Productos</button>
            </div>
            <div className='logos'>
              <img src="/assets/facebook.png" alt="facebook" />
              <img src="/assets/instagram.png" alt="instagram" />
              <img src="/assets/whatsapp.png" alt="whatsapp" />
            </div>
        </div>
      </div>

      <div className='tarjetas-container'>
        <motion.div 
          className='card-uno'
          initial={{ opacity: 0, y: 100 }} // Inicia invisible y 100px abajo
          whileInView={{ opacity: 1, y: 0 }} // Cuando entra en vista: visible y posición normal
          transition={{ duration: 0.30, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.4 }} // Se anima una vez cuando 30% es visible
        >
          <img src="/assets/logoTransparente.png" alt="" />
          <div className='producto-destacado'>
            <h3>Producto Destacado</h3>
            <p>
              Recipientes destinados a colocarse a la intemperie en instalaciones de aprovechamiento y estacones de Gas LP para carburación.
              Los tanques estacicmarios marca CYTSA para Gas LP frenen las siguientes características:
              - Fabncados de acuerdo con la norma oficial mexicana y código ASME sección VIII Div 1 última y adenda_
              - EI acero cumple con especificac•ones ASTM.
            </p>
          </div>
        </motion.div>

        <div className='card-dos' data-aos="fade-up-right" data-aos-duration="600">
          <div className='producto-mision'>
            <h3>Misión</h3>
            <p>
              Proveer soluciones integrales de energía limpia a través del suministro de GLP con altos estándares de seguridad, eficiencia y 
              responsabilidad, fomentando el desarrollo energético sostenible en Guatemala y la región.
            </p>
          </div>
          <img src="/assets/manos.png" alt="" />
        </div>

        <div className='card-tres' data-aos="fade-up-left" data-aos-duration="700" data-aos-delay="100">
          <img src="/assets/vision.png" alt="" />
          <div className='producto-vision'>
            <h3>Visión</h3>
            <p>
              Ser líderes regionales en la importación, distribución y desarrollo de proyectos energéticos con GLP, reconocidos por nuestra innovación, 
              transparencia y compromiso con nuestros clientes y el medio ambiente.
            </p>
          </div>
        </div>

        <div className='card-container-targets'>
          <div className='target-logo'>
            <h3>Sostenible</h3>
            <img className='logo-sostenible' src="/assets/sostenible.svg" alt="" />
          </div>
          <div className='target-logo'>
            <h3>Accesible</h3>
            <img className='logo-sostenible' src="/assets/accesible.svg" alt="" />
          </div>
          <div className='target-logo'>
            <h3>Confiable</h3>
            <img className='logo-sostenible' src="/assets/confiable.svg" alt="" />
          </div>
        </div>
      </div>
      <div className='container-album'>
         <SwiperComponent/>
      </div>
      <div className='container-general-productos'>
        <h2 className='titulo-productos'>Nuestros Productos</h2>
        <div className="container-productos">
            <Swiper
                spaceBetween={60}
                slidesPerView={3}
                loop={true} // Hace el carrusel infinito
                autoplay={{
                    delay: 7000, // Cambia cada 7 segundos
                    disableOnInteraction: false, // Continúa después de interacción del usuario
                    pauseOnMouseEnter: true, // Pausa cuando el mouse está encima
                }}
                pagination={{
                    clickable: true,
                    dynamicBullets: true,
                }}
                navigation={true}
                modules={[Pagination, Navigation, Autoplay]} // Agregamos Autoplay a los módulos
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
                breakpoints={{
                    320: {
                        slidesPerView: 1,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 40,
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 30,
                    },
                }}
            >
                <SwiperSlide>
                    <div className='card'>
                      <img src='/assets/isntalacion.png' alt='instalacion de tanque' />
                      <div className='container-informacion'>
                        <h3>Venta e instalación de tanques estacionarios</h3>
                        <p>
                          Ofrecemos tanques estacionarios nuevos con diferentes capacidades adecuados a tus requerimientos. 
                          Nuestro servicio incluye asesoría técnica para ayudarte a elegir el tamaño ideal, instalación segura con pruebas de hermeticidad y conexión conforme a la normativa vigente.
                        </p>
                      </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='card'>
                      <img src='/assets/medidor.png' alt='recarga de suministro de gas' />
                      <div className='container-informacion'>
                        <h3>Recarga y suministro de gas LP</h3>
                        <p>
                          Brindamos servicio de llenado de tanques directamente en tu domicilio o empresa, garantizando una carga segura, completa y puntual. Nuestro personal realiza cada recarga bajo estrictas 
                          medidas de seguridad, asegurando que el suministro de gas LP sea continuo y confiable.
                        </p>
                      </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='card'>
                      <img src='/assets/mantenimiento.png' alt='' />
                      <div className='container-informacion'>
                        <h3>Mantenimiento y revisión de instalaciones</h3>
                        <p>
                          Ofrecemos servicio de mantenimiento preventivo y correctivo a instalaciones de gas LP, incluyendo revisión de líneas, válvulas, reguladores y detección de fugas. 
                          Esto asegura el correcto funcionamiento de tu sistema y prolonga la vida útil del tanque.
                        </p>
                      </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
      </div>
      <FooterComponent/>
    </>
  )
}