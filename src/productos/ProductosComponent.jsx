import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { FooterComponent } from "../footer"
import { ContactoComponent } from "../contacto/ContactoComponent"
import './productos.css'

export const ProductosComponent = () => {

  const [ productos, setProductos ] = useState("")
  const navigate = useNavigate()

  const setEstadoProductos = (producto) => {
    setProductos(producto)
    navigate('/contacto', { state: { productoSeleccionado: producto } })
  }

  return (
    <>
    <div className="container-general-flex-productos">
      <div className='container-general-productos-productos'>
        <h3 className='titulo-productos-productos'>Nuestros Productos</h3>
        <br/>
        <div className='container-productos-productos'>
          <div className='card-productos' id="tanque-estacionario">
            <img src='/assets/isntalacion.png' alt='instalacion de tanque' />
            <div className='container-informacion-informacion'>
              <h3>Venta e instalación de tanques estacionarios</h3>
              <p>
                Ofrecemos tanques estacionarios nuevos con diferentes capacidades adecuados a tus requerimientos. 
                Nuestro servicio incluye asesoría técnica para ayudarte a elegir el tamaño ideal, instalación segura con pruebas de hermeticidad y conexión conforme a la normativa vigente.
              </p>
            </div>
            <div className='container-boton-compra'>
              <button className="boton-compra" onClick={() => setEstadoProductos("tanque-estacionario")}>Ver más</button>
            </div>
          </div>

          <div className='card-productos' id="recarga-suministro">
            <img src='/assets/medidor.png' alt='recarga de suministro de gas' />
            <div className='container-informacion-informacion'>
              <h3>Recarga y suministro de gas LP</h3>
              <p>
                Brindamos servicio de llenado de tanques directamente en tu domicilio o empresa, garantizando una carga segura, completa y puntual. Nuestro personal realiza cada recarga bajo estrictas 
                medidas de seguridad, asegurando que el suministro de gas LP sea continuo y confiable.
              </p>
            </div>
            <div className='container-boton-compra'>
              <button className="boton-compra" onClick={() => setEstadoProductos("recarga-suministro")}>Ver más</button>
            </div>
          </div>

          <div className='card-productos' id="mantenimiento-revision">
            <img src='/assets/mantenimiento.png' alt='' />
            <div className='container-informacion-informacion'>
              <h3>Mantenimiento y revisión de instalaciones</h3>
              <p>
                Ofrecemos servicio de mantenimiento preventivo y correctivo a instalaciones de gas LP, incluyendo revisión de líneas, válvulas, reguladores y detección de fugas. 
                Esto asegura el correcto funcionamiento de tu sistema y prolonga la vida útil del tanque.
              </p>
            </div>
            <div className='container-boton-compra'>
              <button className="boton-compra" onClick={() => setEstadoProductos("mantenimiento-revision")}>Ver más</button>
            </div>
          </div>
          
        </div>
      </div>
    </div>
    <FooterComponent />
    </>
  )
}

