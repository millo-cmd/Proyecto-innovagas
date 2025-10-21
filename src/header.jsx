import { Link } from 'react-router-dom'
import './header.css'

export const HeaderComponent = () => {

  const desplegarMenu = () => {
    const menu = document.querySelector('.menu-desplegable-movil');
    menu.classList.toggle('menu-activo');
  }

  return (
    <div className="container-header-general">
      <div className='container-header'>
        <Link to="/" className='logo-link'>
          <img className='logo' src="/assets/logo.jpg" alt="logo innovagas" />
        </Link>
        <div className='container-bottons'>
          <Link to="/" className='botton-header'>Home</Link>
          <Link to="/historia" className='botton-header'>Historia</Link>
          <Link to="/productos" className='botton-header'>Productos</Link>
          <Link to="/contacto" className='botton-header'>Contacto</Link>
          <Link to="/informacion" className='botton-header'>Información</Link>
        </div>
      </div>
      
      <div className='container-header-movil'>
        <Link to="/" className='logo-link-movile'>
          <img className='logo-movil' src="/assets/logo.jpg" alt="logo innovagas" />
        </Link>
        
        <img src='/assets/menu.svg' className="menu-boton" alt="menú" onClick={desplegarMenu} />
      </div>

      {/* Menú desplegable para móvil */}
      <div className='menu-desplegable-movil'>
        <Link to="/" className='item-menu-movil' onClick={desplegarMenu}>Home</Link>
        <Link to="/historia" className='item-menu-movil' onClick={desplegarMenu}>Historia</Link>
        <Link to="/productos" className='item-menu-movil' onClick={desplegarMenu}>Productos</Link>
        <Link to="/contacto" className='item-menu-movil' onClick={desplegarMenu}>Contacto</Link>
        <Link to="/informacion" className='item-menu-movil' onClick={desplegarMenu}>Información</Link>
      </div>
    </div>
  )
}