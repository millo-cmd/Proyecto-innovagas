import './HistoriaComponent.css';
import { FooterComponent } from '../footer';

export const HistoriaComponent = () => {
  return (
    <>
      <br></br>
      <br></br>
      <div className="historia-container">
        <h2 className="historia-titulo">Conoce nuestra historia</h2>
        <div className="historia-section">
          <div className="historia-texto">
            <p>
              INNOVAGAS nació con el compromiso firme de transformar la manera en que se abastece y distribuye el
              Gas Licuado de Petróleo (GLP) en Guatemala. Como empresa 100% guatemalteca, nos especializamos en la
              importación, comercialización y logística de GLP, un recurso clave para múltiples industrias y negocios.
              Nuestra misión es clara: brindar soluciones energéticas seguras, eficientes y sostenibles, a la altura de
              los desafíos actuales.
            </p>
            <p>
              Con años de experiencia acumulada y un equipo altamente capacitado, hemos consolidado alianzas estratégicas
              tanto a nivel nacional como internacional, fortaleciendo nuestra operación y ampliando nuestro alcance.
              En INNOVAGAS, creemos que la innovación es el motor del cambio; por eso integramos tecnología, buenas
              prácticas y mejora continua en cada aspecto de nuestro servicio.
            </p>
            <p>
              Hoy en día, nos posicionamos como un socio confiable en el desarrollo energético del país. Nuestra
              infraestructura moderna, procesos estandarizados y enfoque personalizado nos permiten adaptarnos a las
              necesidades de cada cliente, contribuyendo directamente al desarrollo económico y a una matriz energética
              más limpia y responsable.
            </p>
          </div>

          <div className="historia-imagenes">
            <img src="/assets/fotosSwiper/instalado.jpg" alt="Tanque instalado" />
            <img src="/assets/fotosSwiper/instalacion.jpg" alt="Tanque instalación" />
          </div>
        </div>

        <div className="historia-cards">
          <div className="historia-card">
            <div className="historia-card-bar"></div>
            <h3>Visión</h3>
            <p>
              Ser la empresa líder a nivel regional en el suministro de tanques de gas estacionarios, reconocida por
              nuestra innovación, compromiso con la seguridad y excelencia en el servicio al cliente.
            </p>
          </div>

          <div className="historia-card">
            <div className="historia-card-bar"></div>
            <h3>Misión</h3>
            <p>
              Brindar soluciones energéticas seguras, eficientes y sostenibles mediante la innovación y el compromiso,
              contribuyendo al desarrollo responsable del país.
            </p>
          </div>

          <div className="historia-card">
            <div className="historia-card-bar"></div>
            <h3>Valores</h3>
            <p>
              Seguridad, transparencia, innovación, compromiso y sostenibilidad. Nuestros principios guían cada acción
              hacia un servicio confiable y humano.
            </p>
          </div>
        </div>
      </div>

      <FooterComponent />
    </>
  );
};
