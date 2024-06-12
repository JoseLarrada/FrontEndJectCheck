import React,{useState,useRef} from 'react'
import {useNavigate} from 'react-router-dom'
import '../styles/rate.css'
import {onCloseWithOutNavigate} from '../Configs/MessageViews'
import MessageDialog from '../Components/MessageDialog.js'
import {toogleFunctionRate,handleCommentChange} from '../Configs/rateConfig'
import {handleChange} from '../Configs/FormValidation'
function RateAssignme({onClose,action,rateData}) {
  const [viewFormRate,setViewFormRate] = useState(true)
  const [message, setMessage] = useState('');
  const [importRate, setImportRate] = useState(rateData.valorCalificacion);
  const [importComment, setImportComment] = useState(rateData.comentario);
  const [title,setTitle] = useState()
  const [mostrarDialogo,setMostrarDialogo] = useState(false)
  const valueRate = useRef()
  const commentRate = useRef()
  const navigate = useNavigate()
  const verifyChangue=(event)=>{
    handleCommentChange(event,setImportComment)
    handleChange(commentRate,255,setMessage,setTitle,setMostrarDialogo)
  }
  const viewNullRateAssignment=(event)=>{
    if(valueRate.current.value==='' || commentRate.current.value===''){
      event.preventDefault();
      return true;
    }
  }
  const handleClickRate=(event)=>{
    if(viewNullRateAssignment(event)){
        setMessage('Hay campos sin rellenar, rellenelos');
        setTitle('¡Fallo!');
        setMostrarDialogo(true);
    }else{
        toogleFunctionRate(action,navigate,valueRate.current.value,commentRate.current.value,setTitle,setMessage,setMostrarDialogo)
    }
  }
  return (
    <>
      {viewFormRate && <div className='head_form'>
          <section className='body_form'>
              <h3>{action}</h3>
              <div className="form_rate">
                  <p>¿Cual será la nota perteneciente a esta entrega?</p>
                  <input type="text" className='rate_box box_desing' ref={valueRate} value={importRate} onChange={(event)=>{handleCommentChange(event,setImportRate)}}/>
                  <textarea ref={commentRate} name="Comment" id="" placeholder='Deje su comentario aquí' 
                  className='comment_box box_desing' value={importComment} onChange={verifyChangue}></textarea>
                  <button className='btn_calificar' onClick={handleClickRate}>Calificar</button>
              </div>
          </section>
          <button className='btnCancelar' onClick={onClose}>Cancelar</button>
          {mostrarDialogo && <MessageDialog onClose={()=>{onCloseWithOutNavigate(title,setMostrarDialogo,onClose)}} title={title} message={message}/>}
        </div>
      }
    </>
  )
}

export default RateAssignme