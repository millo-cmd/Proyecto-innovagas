import './informacion.css';
import { FooterComponent } from "../footer";

export const InformacionComponent = () => {
  return (
    <>
      <div className='container-general-informacion-banner'>
        <div className='titulo'>
          <h1>Conoce los <strong>beneficios</strong> de nuestro servicio</h1>
        </div>
        <div className="circle grande azul-oscuro-izq"></div>
        <div className="circle mediano azul-claro-izq"></div>
        <div className="circle grande azul-oscuro-der"></div>
        <div className="circle mediano azul-claro-der"></div>
      </div>

      <div className='container-banner-beneficios'>
        <div className='tarjetas-beneficio'>
          <div className='grid'>
            <div className='icono-beneficio'>
              <h3>Rendimiento</h3>
            </div>
            <div className='icono-beneficio'>
              <h3>Bajo costo</h3>
            </div>
            <div className='icono-beneficio'>
              <h3>Seguridad</h3>
            </div>
            <div className='icono-beneficio'>
              <h3>Control</h3>
            </div>
            <div className='icono-beneficio'>
              <h3>Autonomía</h3>
            </div>
            <div className='icono-beneficio'>
              <h3>Rentabilidad</h3>
            </div>
          </div>
        </div>
      </div>

      <section className="container-problema-solucion">
        <h2 className="problema-solucion-titulo">
          ¿Cansado de Interrupciones? Deje de Cambiar Cilindros y Empiece a Producir.
        </h2>
        
        <div className="problema-solucion-grid">
          <div className="problema-columna">
            <h3 className="problema-solucion-subtitulo problema-subtitulo-rojo">
              <span className="problema-solucion-icono icono-problema">✖</span>
              EL PROBLEMA (Con Cilindros)
            </h3>
            
            <img 
              src="https://placehold.co/600x400/666/white?text=Cilindros+Desordenados&font=sans" 
              alt="Cilindros de gas desordenados" 
              className="problema-solucion-imagen" 
            />
            
            <ul className="problema-solucion-lista">
              <li className="problema-solucion-item">
                <span className="problema-solucion-icono-pequeno icono-timer-off"></span>
                <div>
                  <h4 className="problema-solucion-item-titulo">"Me quedo sin gas en hora pico."</h4>
                  <p className="problema-solucion-item-texto">La producción se detiene. Requiere cambios manuales que cortan el ritmo de trabajo.</p>
                </div>
              </li>
              <li className="problema-solucion-item">
                <span className="problema-solucion-icono-pequeno icono-trending-down"></span>
                <div>
                  <h4 className="problema-solucion-item-titulo">"La llama es débil al final."</h4>
                  <p className="problema-solucion-item-texto">La presión es inestable y baja cuando el cilindro se acaba, arruinando la cocción.</p>
                </div>
              </li>
              <li className="problema-solucion-item">
                <span className="problema-solucion-icono-pequeno icono-dollar"></span>
                <div>
                  <h4 className="problema-solucion-item-titulo">"Pago más por menos."</h4>
                  <p className="problema-solucion-item-texto">Paga un precio minorista (más caro) por cada cilindro y desperdicia el "fondo" que nunca sale.</p>
                </div>
              </li>
            </ul>
          </div>

          <div className="solucion-columna">
            <h3 className="problema-solucion-subtitulo solucion-subtitulo-azul">
              <span className="problema-solucion-icono icono-solucion">✔</span>
              LA SOLUCIÓN (Con Gas a Granel)
            </h3>
            
            <img 
              src="https://placehold.co/600x400/1e3a8a/white?text=Cocina+Limpia+y+Ordenada&font=sans" 
              alt="Cocina industrial limpia" 
              className="problema-solucion-imagen" 
            />
            
            <ul className="problema-solucion-lista">
              <li className="problema-solucion-item">
                <span className="problema-solucion-icono-pequeno icono-infinity"></span>
                <div>
                  <h4 className="problema-solucion-item-titulo">Suministro Ininterrumpido</h4>
                  <p className="problema-solucion-item-texto">Tanques de gran capacidad (120 a 5,000 L) reabastecidos a domicilio. Su negocio nunca para.</p>
                </div>
              </li>
              <li className="problema-solucion-item">
                <span className="problema-solucion-icono-pequeno icono-gauge"></span>
                <div>
                  <h4 className="problema-solucion-item-titulo">Presión Fuerte y Constante</h4>
                  <p className="problema-solucion-item-texto">Flama 100% estable de principio a fin. Control total de la temperatura para resultados perfectos.</p>
                </div>
              </li>
              <li className="problema-solucion-item">
                <span className="problema-solucion-icono-pequeno icono-piggy-bank"></span>
                <div>
                  <h4 className="problema-solucion-item-titulo">Ahorro Real (Precio Mayorista)</h4>
                  <p className="problema-solucion-item-texto">Paga un precio por litro mucho más económico. Ahorro directo en sus costos operativos.</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <FooterComponent />
    </>
  )
}