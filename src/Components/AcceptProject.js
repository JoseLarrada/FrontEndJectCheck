import React from 'react'
import '../styles/acep.css'

function AcceptProject() {
  return (
    <section class="tarjet">
      <div class="conteen">
        <section class="entrada">
          <div class="titulo">
            <h2 class="titulog">Información del proyecto</h2>
            <label htmlFor="titulop">Título del proyecto</label>
            <input
              type="text"
            />
            <label htmlFor="cat">Categoría</label>
            <input
              type="text"
            />
            <label htmlFor="des">Descripción</label>
            <input
              type="text"
            />

            <label htmlFor="est">Estado</label>
            <input
              type="text"
            />
          </div>
        </section>
      </div>
    </section>
  )
}

export default AcceptProject
