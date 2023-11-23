import React,{useRef} from 'react'
import '../styles/combo.css'

function ShowComponent({title,descripcion,action,cancel,accept}) {
  const texto=useRef();
  return (
    <div className='show-option option2'>
          <div className='combo-pass'>
            <h2 className='text-chang'>{title}</h2>
            <h3 className='text-large'>{descripcion}</h3>
            <label className="comb-word">{action}</label>
            <input type='text'  className="box-combo" ref={texto} id='eliminarCuentaContraseña' />
          </div>
          <button type="button" className="btn btn-confirm" onClick={cancel}>Cancelar</button>
          <button type="button" className="btn btn-cancel" onClick={()=>{accept(texto.current.value)}}>Confirmar</button>
    </div>
  )
}

export default ShowComponent