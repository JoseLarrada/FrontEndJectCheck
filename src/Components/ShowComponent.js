import React,{useRef,useState} from 'react'
import '../styles/showComponent.css'
import {customMessage,onCloseWithOutNavigate} from '../Configs/MessageViews'
import MessageDialog from '../Components/MessageDialog'

function ShowComponent({titleComponent,descripcion,action,cancel,accept}) {
  const [message, setMessage] = useState('');
  const [title, setTitle] = useState('');
  const [mostrarDialogo, setMostrarDialogo] = useState(false);
  const texto=useRef();
  const handleAccept =  async() => {
    const inputValue = texto.current.value;
    const result = await accept(inputValue);
    console.log(result)
    customMessage(result, setTitle, setMessage, setMostrarDialogo);
};
  return (
    <div className='showOption'>
          <section className='comboPass'>
            <h2 className='textChang'>{titleComponent}</h2>
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
          {mostrarDialogo && <MessageDialog onClose={()=>{onCloseWithOutNavigate(title,setMostrarDialogo)}} title={title} message={message}/>}
    </div>
  )
}

export default ShowComponent