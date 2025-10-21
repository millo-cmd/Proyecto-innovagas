import './HistoriaComponent.css'

import { FooterComponent } from '../footer'

export const HistoriaComponent = () => {
  return (
    <>
    <div className="container-general-historia">
      <div className='container-informacion-historia'>
        <h3 className="titulo-historia">Historia</h3>
        <div className='container-texto'>
          <br/>
          <p>
            INNOVAGAS nació con el compromiso firme de transformar la manera en que se abastece y distribuye el Gas Licuado de Petróleo (GLP) en Guatemala. Como empresa 100% guatemalteca, nos especializamos en la importación, comercialización y logística de GLP, un recurso clave para múltiples industrias y negocios. Nuestra misión es clara: brindar soluciones energéticas que no solo sean seguras y eficientes, sino que también estén a la altura de los desafíos actuales en cuanto a competitividad y sostenibilidad.
            Con años de experiencia acumulada y un equipo altamente capacitado, hemos consolidado alianzas estratégicas tanto a nivel nacional como internacional, lo cual nos ha permitido fortalecer nuestra operación y ampliar nuestro alcance.<br/> <br/>En INNOVAGAS, creemos que la innovación es el motor que impulsa el cambio, por eso integramos tecnología, buenas prácticas y mejora continua en cada aspecto de nuestro servicio.
            Hoy en día, hemos logrado posicionarnos como un socio confiable en el desarrollo energético del país. Nuestra infraestructura moderna, procesos estandarizados y enfoque personalizado nos permiten adaptarnos a las necesidades específicas de cada cliente, sea del sector industrial o comercial. Más que un proveedor, somos parte activa del crecimiento de nuestros aliados, contribuyendo directamente al desarrollo económico de Guatemala y promoviendo una matriz energética más limpia, moderna y responsable con el medio ambiente.
            Cada cliente que confía en INNOVAGAS forma parte de una visión compartida: llevar energía segura y accesible a donde más se necesita, impulsando así un futuro más sostenible para todos.
          </p>

          <br/>

          <div className='text-valores'>
            <p>
              <strong>Valores:</strong>
            
          </p>
          <br/>
          <p>
            Seguridad: Garantizamos procesos controlados y confiables para proteger a nuestros clientes, colaboradores y entorno.
            <br/>
            <br/>

            Transparencia: Actuamos con integridad, claridad y responsabilidad en cada operación.
            <br/>
            <br/>

            Innovación: Buscamos constantemente mejorar procesos, modelos logísticos y soluciones energéticas.
            <br/>
            <br/>

            Compromiso: Nos comprometemos con el éxito de nuestros clientes y el crecimiento sostenible del país.
            <br/>
            <br/>

            Sostenibilidad: Fomentamos el uso responsable de los recursos y la reducción del impacto ambiental.

          </p>
          </div>
          
          <br />
          <div className='container-img'>
            <div className='imagen-historia'>
              <img className='imagen-historia' src="/assets/fotosSwiper/instalado.jpg" alt="tanque instalado" />
            </div>
            <div className='imagen-historia'>
              <img className='imagen-historia' src="/assets/fotosSwiper/instalacion.jpg" alt="tanque instalado" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <FooterComponent />
    </>
  )
}
