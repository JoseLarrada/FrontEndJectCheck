import React from 'react'
import '../styles/rate.css'

function RateAssignme() {
  return (
    <div className='head_form'>
      <section className='body_form'>
          <h3>Calificación</h3>
          <div className="form_rate">
              <p>¿Cual será la nota perteneciente a esta entrega?</p>
              <input type="text" className='rate_box box_desing'/>
              <textarea name="Comment" id="" placeholder='Deje su comentario aquí' className='comment_box box_desing'></textarea>
              <button className='btn_calificar'>Calificar</button>
          </div>
      </section>
      <button className='btnCancelar'>Cancelar</button>
    </div>
  )
}

export default RateAssignme