import { useCallback, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import AOS from 'aos';
import { SwiperComponent } from './swiper';
import { FooterComponent } from '../footer';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'aos/dist/aos.css';
import './home.css';

const products = [
  {
    id: 1,
    title: "Venta e instalación de tanques estacionarios",
    description: "Ofrecemos tanques estacionarios nuevos con diferentes capacidades adecuados a tus requerimientos. Nuestro servicio incluye asesoría técnica para ayudarte a elegir el tamaño ideal, instalación segura con pruebas de hermeticidad y conexión conforme a la normativa vigente.",
    image: "/assets/isntalacion.png",
    alt: "instalacion de tanque"
  },
  {
    id: 2,
    title: "Recarga y suministro de gas LP",
    description: "Brindamos servicio de llenado de tanques directamente en tu domicilio o empresa, garantizando una carga segura, completa y puntual. Nuestro personal realiza cada recarga bajo estrictas medidas de seguridad, asegurando que el suministro de gas LP sea continuo y confiable.",
    image: "/assets/medidor.png",
    alt: "recarga de suministro de gas"
  },
  {
    id: 3,
    title: "Mantenimiento y revisión de instalaciones",
    description: "Ofrecemos servicio de mantenimiento preventivo y correctivo a instalaciones de gas LP, incluyendo revisión de líneas, válvulas, reguladores y detección de fugas. Esto asegura el correcto funcionamiento de tu sistema y prolonga la vida útil del tanque.",
    image: "/assets/mantenimiento.png",
    alt: "mantenimiento de instalaciones"
  }
];

const values = [
  { title: "Sostenible", icon: "/assets/sostenible.svg" },
  { title: "Accesible", icon: "/assets/accesible.svg" },
  { title: "Confiable", icon: "/assets/confiable.svg" }
];

const features = [
  {
    type: "mision",
    title: "Tu Negocio Merece Crecer Sin Límites",
    description: "Si usas gas en tu empresa, sabes lo importante que es no detenerse. Nosotros nos encargamos de que siempre tengas energía, para que tú te enfoques en hacer crecer tu negocio.",
    image: "/assets/manos.png", 
    alt: "Representación visual de la misión"
  },
  {
    type: "producto", 
    title: "Energía Sin Límites para Tu Negocio",
    description: "Di adiós a las preocupaciones por el gas. Con nuestros tanques estacionarios, tu negocio tendrá suministro continuo día y noche. Más producción, menos complicaciones. Simple y confiable.",
    image: "/assets/logoTransparente.png",
    alt: "Logo de la empresa"
  },
  {
    type: "vision",
    title: "El Cambio que Tu Empresa Necesita",
    description: "Empresas como la tuya ya están disfrutando de energía confiable. Descubre cómo podemos hacer que tu operación sea más eficiente y tranquila. La conversación no te cuesta nada.",
    image: "/assets/vision.png",
    alt: "Representación visual de la visión"
  }
];

export const HomeComponent = () => {
  const handleContactClick = useCallback(() => {
    // Lógica para redirigir o abrir formulario de contacto.
  }, []);

  const handleProductsClick = useCallback(() => {
    // Lógica para navegar a productos.
  }, []);

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      mirror: false,
      offset: 100,
      delay: 0
    });

    return () => {
      AOS.refresh();
    };
  }, []);

  return (
    <div className="home-container">
      {/* Hero Banner */}
      <section className="hero-banner" aria-label="Banner principal">
        <div className="hero-image" />
        <div className="hero-content">
          <h1 className="hero-title">Ofrecemos energía sostenible</h1>
          <p className="hero-description">
            Para que juntos hagamos de esta hermosa Guatemala el próspero país que todos merecemos
          </p>
          <div className="button-group">
            <button className="btn btn-primary" onClick={handleContactClick} aria-label="Contactar a la empresa">
              Contáctanos
            </button>
            <button className="btn btn-outline" onClick={handleProductsClick} aria-label="Ver productos">
              Productos
            </button>
          </div>
          <div className="social-links">
            {['facebook', 'instagram', 'whatsapp'].map((platform) => (
              <a key={platform} href="#" aria-label={`Síguenos en ${platform}`} target="_blank" rel="noopener noreferrer">
                <img src={`/assets/${platform}.png`} alt={platform} />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="cards-container">
        {features.map((feature, index) => (
          <motion.div 
            key={feature.type}
            className={`card-item ${index % 2 === 0 ? '' : 'even'}`}
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.1 }}
            viewport={{ once: true, amount: 0.3 }}>
            <img src={feature.image} alt={feature.alt} data-aos="fade-right" data-aos-delay={index * 100}/>
            <div className="feature-card" data-aos="fade-left" data-aos-delay={index * 100 + 200}>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          </motion.div>
        ))}

        {/* Values Section */}
        <div className="values-container">
          {/* Partículas flotantes */}
          <div className="floating-particle"></div>
          <div className="floating-particle"></div>
          <div className="floating-particle"></div>
        
          {values.map((value, index) => (
            <div key={value.title} className="value-card" data-aos="zoom-in" data-aos-delay={index * 150}>
              <h3>{value.title}</h3>
              <img className="value-icon" src={value.icon} alt={`Icono de ${value.title.toLowerCase()}`} />
            </div>
          ))}
        </div>
      </section>

      {/* Gallery Section */}
      <section className="container-album">
        <SwiperComponent />
      </section>

      {/* Products Section */}
      <section className="products-section">
        <h2 className="section-title">Nuestros Productos</h2>
        <div className="products-container">
          <Swiper
            spaceBetween={30}
            slidesPerView={1}
            loop={true}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            navigation={true}
            modules={[Pagination, Navigation, Autoplay]}
            breakpoints={{
              576: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 25,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
            }}
          >
            {products.map((product) => (
              <SwiperSlide key={product.id}>
                <article className="product-card">
                  <img src={product.image} alt={product.alt} />
                  <div className="product-info">
                    <h3>{product.title}</h3>
                    <p>{product.description}</p>
                  </div>
                </article>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      <FooterComponent />
    </div>
  );
};