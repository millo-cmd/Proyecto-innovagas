import './footer.css'

export const FooterComponent = () => {
    
    return(
        <div className="container-footer-general">
            <div className='container-footer-informacion'>
                <h3 className='titulo-footer'>INNOVAGAS</h3>
                <p className='texto-footer'>Innovagas © Todos los derechos reservados</p>
                <div className='container-redes-sociales'>
                    <img src="/assets/facebook.png" alt="facebook" />
                    <img src="/assets/instagram.png" alt="instagram" />
                    <img src="/assets/whatsapp.png" alt="whatsapp" />
                </div>
            </div>
        </div>
    )
}