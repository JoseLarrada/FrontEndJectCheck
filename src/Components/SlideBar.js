import React, { useState} from 'react';
import FormAvances from '../Components/FormAvances'
import ShowComponent from './ShowComponent'
import {useNavigate} from 'react-router-dom';
import verificarExpiracionToken from '../Configs/verificarExpiracionToken .js'
import '../styles/Sidebar.css'
function SlideBar({create,update,deletes}) {
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

  const tuToken = localStorage.getItem('token');
  const navigate = useNavigate();
  const EliminarAvance= async (texto) => {
    try {
      if(!verificarExpiracionToken()){
        navigate('/');
      }
      const response = await fetch(`http://localhost:8080/api/v1/PrincipalContent/deleteadvance/${texto}`, {
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
            <label>{create}</label>
            {mostrarFormAdd && <FormAvances tittle={"Crear Avance"} action={"Guardar Avance"}/>}
        </div>
        <div className="nav-link active person ico control-move" to="/" >
            <ion-icon name="create" onClick={toggleFormUpd}></ion-icon>
            <label>{update}</label>
            {mostrarFormUpd && <FormAvances tittle={"Modificar Avance"} action={"modificar Avance"}/>}
        </div>
        <div className="nav-link active person ico control-move" to="/" >
            <ion-icon name="trash-bin" onClick={toggleFormDel}></ion-icon>
            <label>{deletes}</label>
            {mostrarFormDel && <ShowComponent title={'Eliminar Proyecto'} 
            descripcion={'Esto eliminará el Avance y cualquier dato asociado a ello. Por favor ingresa tu contraseña para confirmar.'}
            action={'Ingrese titulo del avance'} cancel={toggleFormDel} accept={(value)=>{EliminarAvance(value)}}/>}
        </div>
    </section>
  )
}

export default SlideBar