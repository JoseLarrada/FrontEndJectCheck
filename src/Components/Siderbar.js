import React, { useState,useEffect} from 'react'
import '../styles/Sidebar.css'
import {useNavigate} from 'react-router-dom';
import ProjectManagment from '../Components/ProjectManagment'
import verificarExpiracionToken from '../Configs/verificarExpiracionToken .js'
import ShowComponent from './ShowComponent'
import TeacherManagment from './TeacherManagment.js';
import {deleteProject} from '../controller/ProjectController.js'

function Siderbar({ onOptionClick }) {
  const [mostrarFormAdd, setMostrarFormAdd] = useState(false);
  const [mostrarFormUpd, setMostrarFormUpd] = useState(false);
  const [mostrarFormDel,setmostrarFormDel]=useState(false);
  const toggleFormAdd = () => {
    setMostrarFormAdd(!mostrarFormAdd);
    setMostrarFormUpd(false);
    setmostrarFormDel(false);
    onOptionClick();
  };

  const toggleFormUpd = () => {
    setMostrarFormUpd(!mostrarFormUpd);
    setMostrarFormAdd(false);
    setmostrarFormDel(false);
    onOptionClick();
  };

  const toggleFormDel = () => {
    setmostrarFormDel(!mostrarFormDel);
    setMostrarFormAdd(false);
    setMostrarFormUpd(false);
    onOptionClick();
  };

  //Eliminar Proyecto
  const tuToken = localStorage.getItem('token');
  const navigate = useNavigate();
  
  const [firtsOptionText, setFirtsOptionText] = useState()
  const [SecondOptionText, setSeconOptionText] = useState()

  useEffect(() => {
    const text = (localStorage.getItem('perfil') === '1') ? 'Crear Proyecto' : 'Aceptar Proyecto';
    const text2 = (localStorage.getItem('perfil') === '1') ? 'Modificar Proyecto' : 'Finalizar Proyecto';
    setFirtsOptionText(text);
    setSeconOptionText(text2);
  }, []);
  
  //Para hacer eso te creas el componente del formulario y listo aqui con un condicional lo usas 
  function OptionFormAdd(){
    if (mostrarFormAdd && localStorage.getItem('perfil') === '1' && firtsOptionText === 'Crear Proyecto'){
      return <ProjectManagment NameOption={firtsOptionText} Option={'Enviar solicitud'}/>;
    }else{
      return <TeacherManagment title={'Aceptar Proyecto'} />;
    }
  }

  function OptionFormUpd(){
    if (mostrarFormUpd && localStorage.getItem('perfil') === '1' && SecondOptionText === 'Modificar Proyecto'){
      return <ProjectManagment NameOption={SecondOptionText} Option={'Actualizar'}/>;
    }else{
      return <TeacherManagment title={'Finalizar Proyecto'} />;
    }
  }

  return (
    <section className='control'>
         <div className="nav-link active person ico control-move">
            <ion-icon name="duplicate" onClick={toggleFormAdd}></ion-icon>
            <label id='FirtsOption'>{firtsOptionText}</label>
            {mostrarFormAdd &&  OptionFormAdd() }
        </div>
        <div className="nav-link active person ico control-move" to="/" >
            <ion-icon name="create" onClick={toggleFormUpd}></ion-icon>
            <label>{SecondOptionText}</label>
            {mostrarFormUpd && OptionFormUpd()}
        </div>
        <div className="nav-link active person ico control-move" to="/" >
            <ion-icon name="trash-bin" onClick={toggleFormDel}></ion-icon>
            <label>Deshabilitar proyecto</label>
            {mostrarFormDel && <ShowComponent title={'Eliminar Proyecto'} 
            descripcion={'Esto eliminará el proyecto y cualquier dato asociado a ello. Por favor ingresa tu contraseña para confirmar.'}
            action={'Ingrese Nombre del proyecto'} cancel={toggleFormDel} accept={(value)=>{deleteProject(value,tuToken,verificarExpiracionToken,navigate)}}/>}
        </div>
    </section>
  )
}

export default Siderbar
