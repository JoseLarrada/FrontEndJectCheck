import React, { useState} from 'react'
import '../styles/Sidebar.css'
import {useNavigate} from 'react-router-dom';
import ProjectManagment from '../Components/ProjectManagment'
import verificarExpiracionToken from '../Configs/verificarExpiracionToken .js'
import ShowComponent from './ShowComponent'
function Siderbar() {
  const [mostrarFormAdd, setMostrarFormAdd] = useState(false);
  const toggleFormAdd = () => {
        setMostrarFormAdd(!mostrarFormAdd);
    }
  const [mostrarFormUpd, setMostrarFormUpd] = useState(false);

  const toggleFormUpd = () => {
        setMostrarFormUpd(!mostrarFormUpd);
  }
  const [mostrarFormDel,setmostrarFormDel]=useState(false);
  const toggleFormDel = () => {
    setmostrarFormDel(!mostrarFormDel);
  }

  //Eliminar Proyecto
  const tuToken = localStorage.getItem('token');
  const navigate = useNavigate();
  const EliminarProyecto= async (texto) => {
    try {
      if(!verificarExpiracionToken()){
        navigate('/');
      }
      const response = await fetch(`http://localhost:8080/api/v1/PrincipalContent/DeleteRoute/${texto}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${tuToken}`
        }
      });
      console.log(response);
      if (response.ok) {
        const data = await response.text();
        alert(data);
      }else{
        const errorData = await response.text();
        alert(errorData);
      } 
    } catch (error) {
      console.log('Error de red:', error);
    }
  };

  return (
    <section className='control'>
         <div className="nav-link active person ico control-move">
            <ion-icon name="duplicate" onClick={toggleFormAdd}></ion-icon>
            <label>Crear proyecto</label>
            {mostrarFormAdd && <ProjectManagment NameOption={'Nuevo proyecto'} Option={'Enviar solicitud'}/>}
        </div>
        <div className="nav-link active person ico control-move" to="/" >
            <ion-icon name="create" onClick={toggleFormUpd}></ion-icon>
            <label>Modificar proyecto</label>
            {mostrarFormUpd && <ProjectManagment NameOption={'Actualizar proyecto'} Option={'Actualizar'}/>}
        </div>
        <div className="nav-link active person ico control-move" to="/" >
            <ion-icon name="trash-bin" onClick={toggleFormDel}></ion-icon>
            <label>Deshabilitar proyecto</label>
            {mostrarFormDel && <ShowComponent title={'Eliminar Proyecto'} 
            descripcion={'Esto eliminará el proyecto y cualquier dato asociado a ello. Por favor ingresa tu contraseña para confirmar.'}
            action={'Ingrese Nombre del proyecto'} cancel={toggleFormDel} accept={(value)=>{EliminarProyecto(value)}}/>}
        </div>
    </section>
  )
}

export default Siderbar
