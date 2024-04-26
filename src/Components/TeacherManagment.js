import React,{useState,useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import verificarExpiracionToken from '../Configs/verificarExpiracionToken .js'
import '../styles/Teacher.css'
function TeacherManagment({title}) {
const [datos, setDatos] = useState([])
const tuToken = localStorage.getItem('token');
const navigate= useNavigate();


const CargarPersonalizado= async (id_state) => {
    try {
      if(!verificarExpiracionToken()){
        navigate('/');
      }
      const response = await fetch(`http://localhost:8080/api/v1/PrincipalContent/FilterProject/${id_state}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${tuToken}`
        }
      });
      console.log(response);
      if (response.ok) {
        const data = await response.json();
        setDatos(data);
      }else{
        const errorData = await response.text();
        console.log(errorData)
        alert(errorData);
      } 
    } catch (error) {
      alert('Error de red:', error);
    }
  };

  //Funciones de profesores
  const AceptarProyecto= async () => {
    try {
      if(!verificarExpiracionToken()){
        navigate('/');
      }
      const response = await fetch(`http://localhost:8080/api/v1/PrincipalContent/AcceptProject/${localStorage.getItem('id_ruta')}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${tuToken}`
        }
      });
      console.log(response);
      if (response.ok) {
        const data = await response.text();
        alert(data)
      }else{
        const errorData = await response.text();
        alert(errorData);
      } 
    } catch (error) {
      alert('Error de red:', error);
    }
  };

  const FinalizarProyecto= async () => {
    try {
      if(!verificarExpiracionToken()){
        navigate('/');
      }
      const response = await fetch(`http://localhost:8080/api/v1/PrincipalContent/FinishProject/${localStorage.getItem('id_ruta')}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${tuToken}`
        }
      });
      console.log(response);
      if (response.ok) {
        const data = await response.text();
        alert(data)
      }else{
        const errorData = await response.text();
        alert(errorData);
      } 
    } catch (error) {
      alert('Error de red:', error);
    }
  };

  const handleClick = (item) => {
    localStorage.setItem('id_ruta', item.id_ruta);
  }

  useEffect(() => {
     if(title==='Aceptar Proyecto'){
        CargarPersonalizado(5);
     }else if(title==='Finalizar Proyecto'){
        CargarPersonalizado(1);
     }
  }, []);

  function setOption(titulo){
    if(titulo==='Aceptar Proyecto'){
      return AceptarProyecto();
    }else if(titulo==='Finalizar Proyecto'){
      return FinalizarProyecto();
    }
  }

  

  return (
    <div class="list-group list">
          <button type="button" class="list-group-item list-group-item-action active" aria-current="true">
            {title}
          </button>
          {datos.map((item, index) => (
          <button key={index} type="button" class="list-group-item list-group-item-action" onClick={()=>{handleClick(item);setOption(title)}}>
            {item.id_ruta}
          </button>
        ))}
    </div>
  )
}

export default TeacherManagment