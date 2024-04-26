import React, {useRef} from 'react';
import {useNavigate} from 'react-router-dom';
import verificarExpiracionToken from '../Configs/verificarExpiracionToken .js'
function FormEntregas({tittle,action}) {
  const file=useRef();
  const annexes=useRef();
  const comment=useRef();
  const navigate=useNavigate();
  const tuToken = localStorage.getItem('token');
  var keigenerate=null;
  const SubirArchivo = async () => {
    try {
      if (!verificarExpiracionToken()) {
        navigate('/');
      }
  
      const formData = new FormData();
      formData.append('file', file.current.files[0]);
      const response = await fetch('http://localhost:8080/api/v1/assets/Upload', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${tuToken}`,
        },
        body: formData,
      });
  
      if (response.ok) {
        const key = await response.text();
        alert(key);
      } else {
        const errorData = await response.json();
        alert(errorData.token);
      }
    } catch (error) {
      alert('Error de red:', error);
    }
  };
  const Guardar= async () => {
    try {
      if(!verificarExpiracionToken()){
        navigate('/');
      }
      const response = await fetch('http://localhost:8080/api/v1/PrincipalContent/addAssignment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${tuToken}`
        },
        body: JSON.stringify({
          id_advance:localStorage.getItem('id_avance'),   
          annexes: annexes.current.value,
          file:file.current.value,
          comment: comment.current.value
        })
      });
      console.log(response);
      if (response.ok) {
        const data = await response.text();
        alert(data);
      }else{
        const errorData = await response.text();
        alert(errorData.token);
      } 
    } catch (error) {
      alert('Error de red:', error);
    }
  };
  return (
    <div>
      <section class="form-register">
          <h4>{tittle}</h4>
          <input class="controls" type="file" ref={file} placeholder="Añadir Archivo"/>
          <input class="controls" type="text" ref={annexes} placeholder="Añadir Anexos"/>
          <input class="controls" type="text" ref={comment} placeholder="Comentario"/>
          <button type="submit" class="botons" onClick={()=>{SubirArchivo();Guardar()}}>
            {action}
          </button>
      </section>
    </div>
  )
}

export default FormEntregas
