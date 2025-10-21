import "./contacto.css";
import { FooterComponent } from "../footer"
import { useRef } from "react";
import { useLocation } from 'react-router-dom'

import emailjs from "emailjs-com";

import Swal from 'sweetalert2'


export const ContactoComponent = () => {
  const location = useLocation();
  const productoSeleccionado = location.state?.productoSeleccionado; 

  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Primer formulario (sin datos del formulario)
    emailjs.sendForm(
      "service_gi6uprw",
      "template_Clientehtjf582",
      form.current,
      "peNdn6kWJL7Emgx2V"
    )
    .then(() => {
      console.log("Primer mensaje enviado correctamente");
      
      // Segundo formulario (CON los datos del formulario)
      return emailjs.sendForm(
        "service_gi6uprw",
        "template_81nlzgb",
        form.current,
        "peNdn6kWJL7Emgx2V"
      );
    })
    .then(() => {
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Correo enviado exitosamente",
        showConfirmButton: false,
        timer: 1500
      });
      console.log('Ambos formularios enviados');
      
      // Limpiar el formulario
      form.current.reset();
    })
    .catch((error) => {
      console.error("Error al enviar los mensajes:", error);
      alert("Error al enviar los mensajes");
    });
  };

  console.log(productoSeleccionado);
  return (
    <>
    <div className="container-contacto-general">
      <div className="conteiner-contacto-info">
        <h3 className="titulo-contacto">Contacto</h3>
        <div className="container-primera-parte">
          <div className="container-iframe">
            <iframe 
              className="iframe" 
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d61786.37126198578!2d-90.5740288!3d14.562099199999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses-419!2sgt!4v1749700597464!5m2!1ses-419!2sgt"  
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade">
            </iframe>
            <div className="infor-mapa">
              <h4>Ubicación</h4>
              <p>
                Estamos ubicados en la 6a. Avenida 1-20 Zona 1, Ciudad de Guatemala, Guatemala.
              </p>
            </div>

            <div className="infor-mapa">
              <h4>No. Telefono</h4>
              <p>
                +502 5003-0194
              </p>
            </div>
          </div>
          
          <div className="container-formulario">
            <div className="formulario">
              <form ref={form} onSubmit={handleSubmit}>
                <div className="campo-formulario">
                  <label htmlFor="nombre">Nombre y Apellido:</label>
                  <input 
                    type="text" 
                    id="nombre"
                    name="nombre"
                    required 
                  />
                </div>

                <div className="campo-formulario">
                  <label htmlFor="email">Correo Electrónico:</label>
                  <input 
                    type="email" 
                    id="email"
                    name="email"
                    required 
                  />
                </div>

                <div className="campo-formulario">
                  <label htmlFor="telefono">Número de Teléfono:</label>
                  <input 
                    type="tel" 
                    id="telefono"
                    name="telefono"
                    required  
                  />
                </div>

                <div className="campo-formulario">
                  <label htmlFor="servicios">Servicios:</label>
                  <select 
                    id="servicios"
                    name="servicios"
                    defaultValue={productoSeleccionado || ""}
                    required 
                  >
                    <option value="">Selecciona un servicio</option>
                    <option value="tanque-estacionario">Venta e instalación de tanques estacionarios</option>
                    <option value="recarga-suministro">Recarga y suministro de gas LP</option>
                    <option value="mantenimiento-revision">Mantenimiento y revisión de instalaciones</option>
                  </select>
                </div>

                <div className="campo-formulario">
                  <label htmlFor="comentarios">Observaciones o Comentarios:</label>
                  <textarea 
                    id="comentarios"
                    name="comentarios"
                    rows="4"
                    placeholder="Escribe aquí tus comentarios u observaciones..."
                  ></textarea>
                </div>

                <button type="submit" className="btn-enviar">
                  Enviar
                </button>
              </form>
            </div>
          </div>
        </div>
        <br />
        <div className="container-segunda-parte">
          <img src="assets/fotosSwiper/metas.jpg" alt="metas corporativas"  className="img-metas"/>
          <div className="container-informacion-correo">
            <h2>Nuestros correos empresariales</h2>
            <div className="contenedor-correo">
              <img src="assets/fotosSwiper/envelope-solid.svg" alt="correo" className="img-correo"/>
              <p> <strong>Correo:</strong> ventas@innovagas.com.gt</p>
            </div>
            <div className="contenedor-correo">
              <img src="assets/fotosSwiper/envelope-solid.svg" alt="correo" className="img-correo"/>
              <p> <strong>Correo:</strong> info@innovagas.com.gt</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <br />
    <br />
    <FooterComponent />
    </>
  )
}