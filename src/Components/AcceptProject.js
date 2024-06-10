import React from 'react'
import '../styles/acep.css'

function AcceptProject() {
  return (
    <section className="tarjet">
      <div className="conteen">
        <section className="entrada">
          <div className="titulo">
            <h2 className="titulog">Información del proyecto</h2>
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
