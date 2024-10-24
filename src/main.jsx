import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'


import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Navbar />
    <Footer />
  </StrictMode>,
)
