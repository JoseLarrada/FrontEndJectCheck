import React, {useRef} from 'react';
import {useNavigate} from 'react-router-dom';
import verificarExpiracionToken from '../Configs/verificarExpiracionToken .js'
import {uploadFile, saveAssignment} from '../controller/AssignmentController.js'
function FormEntregas({tittle,action}) {
  const file=useRef();
  const annexes=useRef();
  const comment=useRef();
  const navigate=useNavigate();
  const tuToken = localStorage.getItem('token');
  var keigenerate=null;
  
  return (
    <div>
      <section class="form-register">
          <h4>{tittle}</h4>
          <input class="controls" type="file" ref={file} placeholder="Añadir Archivo"/>
          <input class="controls" type="text" ref={annexes} placeholder="Añadir Anexos"/>
          <input class="controls" type="text" ref={comment} placeholder="Comentario"/>
          <button type="submit" class="botons" onClick={()=>{uploadFile(verificarExpiracionToken,navigate,file.current.files[0],tuToken)}}>
            {action}
          </button>
      </section>
    </div>
  )
}

export default FormEntregas
