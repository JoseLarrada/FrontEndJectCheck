import React,{useRef} from 'react'
import '../styles/showComponent.css'

function ShowComponent({title,descripcion,action,cancel,accept}) {
  const texto=useRef();
   const handleAccept = () => {
    const inputValue = texto.current.value;
    accept(inputValue);
  };
  return (
    <div className='showOption'>
          <section className='comboPass'>
            <h2 className='textChang'>{title}</h2>
            <h3 className='textLarge'>{descripcion}</h3>
            <span>
              <label className="combWord">{action}</label>
              <input type='text'  className="boxCombo" ref={texto} id='eliminarCuentaContraseña' />
            </span>
          </section>
          <section className="btnsConfirm">
            <button type="button" className="btn btnConfirm" onClick={cancel}>Cancelar</button>
            <button type="button" className="btn btnCancel" onClick={handleAccept}>Confirmar</button>
          </section>
    </div>
  )
}

export default ShowComponent