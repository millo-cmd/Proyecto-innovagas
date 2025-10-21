
import './App.css'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { HomeComponent } from './home/home'
import { HeaderComponent } from './header'

import { HistoriaComponent } from './historia/HistoriaComponent'
import { ProductosComponent } from './productos/ProductosComponent'
import { ContactoComponent  } from './contacto/ContactoComponent'
import { InformacionComponent  } from './informacion/informacion'

function App() {
  

  return (
    <BrowserRouter>
      <HeaderComponent />
      <Routes>
        <Route path="/" element={<HomeComponent />} />
        <Route path="/historia" element={<HistoriaComponent />} />
        <Route path="/productos" element={<ProductosComponent />} />
        <Route path="/contacto" element={<ContactoComponent />} />
        <Route path="/informacion" element={<InformacionComponent />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
