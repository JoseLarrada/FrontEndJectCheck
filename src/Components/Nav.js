import React from 'react'
import {NavLink} from 'react-router-dom'
import '../styles/nav.css'
import imagen from "../resources/Image.jpg"
function Nav() {
  return (
    <header className='header'>
        <nav>
            <ul className="nav-links">
              <li className='perfil'>
                <NavLink className="nav-link active person" to="/profile" >
                  <ion-icon name="person"></ion-icon>
                  <label className='label'>Perfil</label>
                </NavLink>
              </li>
              <div className='centrar'>
                <li>
                  <NavLink className="nav-link active" to="/principalview" >
                    <ion-icon name="home"></ion-icon>
                    <label className='label'>Inicio</label>
                  </NavLink>
                </li>
                <li>
                  <NavLink className="nav-link active" to="/messages" >
                    <ion-icon name="chatbubbles"></ion-icon>
                    <label className='label'>Mensajes</label>
                  </NavLink>
                </li>
                <li>
                  <NavLink className="nav-link active" to="/Reports" >
                    <ion-icon name="document-text"></ion-icon>
                    <label className='label'>Informes</label>
                  </NavLink>
                </li>
                <li>
                  <NavLink className="nav-link active" to="/Projects" >
                    <ion-icon name="duplicate"></ion-icon>
                    <label className='label'>Proyectos</label>
                  </NavLink>
                </li>
              </div>
            </ul>
        </nav>
        <div className="logo">
            <img className='img' src={imagen} alt="Logo de la marca" />
        </div>
    </header>
  )
}

export default Nav