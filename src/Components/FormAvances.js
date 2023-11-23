import React, {useRef} from 'react';
import verificarExpiracionToken from '../Configs/verificarExpiracionToken .js'
import "../styles/advances.css"
import {useNavigate} from 'react-router-dom';
function FormAvances({tittle,action}) {

  const title=useRef();
  const descripcion=useRef();
  const rubric=useRef();
  const navigate=useNavigate();
  const tuToken = localStorage.getItem('token');

  const Guardar= async () => {
    try {
      if(!verificarExpiracionToken()){
        navigate('/');
      }
      const response = await fetch('http://localhost:8080/api/v1/PrincipalContent/createadvance', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${tuToken}`
        },
        body: JSON.stringify({
          tittle: title.current.value,
          description: descripcion.current.value,
          rubric: rubric.current.value,
          route_id: localStorage.getItem('id_ruta')
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
      // Puedes mostrar un mensaje de error al usuario aquí si lo deseas
    }
  };

  const Modificar= async () => {
    try {
      if(!verificarExpiracionToken()){
        navigate('/');
      }
      const response = await fetch('http://localhost:8080/api/v1/PrincipalContent/updateadvance', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${tuToken}`
        },
        body: JSON.stringify({
          tittle: title.current.value,
          description: descripcion.current.value,
          rubric: rubric.current.value,
          route_id: localStorage.getItem('id_ruta'),
          advance_id :localStorage.getItem('id_advance')
        })
      });
  
      console.log(response);
  
      if (response.ok) {
        const data = await response.json();
        alert(data);
      }else{
        const errorData = await response.json();
        alert(errorData.token);
      } 
    } catch (error) {
      alert('Error de red:', error);
      // Puedes mostrar un mensaje de error al usuario aquí si lo deseas
    }
  };
  

  return (
    <section class="form-register">
      <h4>{tittle}</h4>
      <input class="controls" type="text" ref={title} placeholder="Ingrese el titulo"/>
      <input class="controls" type="text" ref={descripcion} placeholder="Ingrese la descripcion"/>
      <input class="controls" type="text" ref={rubric} placeholder="Ingrese Rubrica"/>
      <button type="submit" class="botons" onClick={action === 'Guardar Avance' ? Guardar : Modificar}>
        {action}
      </button>
    </section>
  )
}

export default FormAvances