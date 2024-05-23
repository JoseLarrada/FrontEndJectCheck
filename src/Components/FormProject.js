import {React, useState,useRef,useEffect} from 'react'
import '../styles/FormProject.css'
import {useNavigate} from 'react-router-dom';
import verificarExpiracionToken from '../Configs/verificarExpiracionToken .js'
import {validateTextProjects,validateTextfield} from '../Configs/FormValidation'
import {customMessage,onCloseWithOutNavigate} from '../Configs/MessageViews'
import MessageDialog from '../Components/MessageDialog'
import {findTeacher,findStudent,addProject,updateProject} from '../controller/ProjectController'
import {receiveFacultly,receiveAreas} from '../controller/investigationController.js'

function FormProject({titleForm,textBotom}) {
  const [Ischecked,setIschecked]=useState(false)
  const [message, setMessage] = useState('');
  const [title, setTitle] = useState('');
  const [mostrarDialogo, setMostrarDialogo] = useState(false);
  const [facultly, setFacultly] = useState([]);
  const [selectedFacultly, setSelectedFacultly] = useState("");
  const [selectedAreas, setselectedAreas] = useState("");
  const [areas, setAreas] = useState([]);
  const navigate=useNavigate();
  const titulo = useRef();
  const descripcion = useRef();
  const docente = useRef(); 
  const estudiante1= useRef();
  const estudiante2=useRef();
  const token=localStorage.getItem("token")

  const validateFindTeacher= async ()=>{
    const resultFindTeacher=await findTeacher(docente.current.value,token,verificarExpiracionToken,navigate);
    customMessage(resultFindTeacher,setTitle,setMessage,setMostrarDialogo);
  }
  const validateFindStudent= async (student)=>{
    const resultFindStudent=await findStudent(student,token,verificarExpiracionToken,navigate);
    customMessage(resultFindStudent,setTitle,setMessage,setMostrarDialogo);
  }
  const validatePersitence= async (functioProject)=>{
      if (estudiante2.current === undefined && estudiante1.current === undefined) {
          const result = await functioProject(titulo.current.value, docente.current.value, null, null, descripcion.current.value, token, verificarExpiracionToken, navigate);
          customMessage(result, setTitle, setMessage, setMostrarDialogo);
      }else if(estudiante2.current === undefined){
          const result = await functioProject(titulo.current.value, docente.current.value,null,estudiante1.current.value, descripcion.current.value, token, verificarExpiracionToken, navigate);
          customMessage(result, setTitle, setMessage, setMostrarDialogo);
      }else if(estudiante1.current === undefined){
          const result = await functioProject(titulo.current.value, docente.current.value,estudiante2.current.value,null, descripcion.current.value, token, verificarExpiracionToken, navigate);
          customMessage(result, setTitle, setMessage, setMostrarDialogo);
      }else{
        const result = await functioProject(titulo.current.value, docente.current.value,estudiante2.current.value,estudiante1.current.value, descripcion.current.value, token, verificarExpiracionToken, navigate);
        customMessage(result, setTitle, setMessage, setMostrarDialogo);
      }
  }

  const handleClickTeacher = (event)=>{
    if(validateTextfield(event,docente.current.value)){
      setMessage('Rellene todos los campos');
      setTitle('¡Fallo!');
      setMostrarDialogo(true);
    }else{
      validateFindTeacher();
    }
  }
  const handleClickStudent = (event,student)=>{
    if(validateTextfield(event,student)){
      setMessage('Rellene todos los campos');
      setTitle('¡Fallo!');
      setMostrarDialogo(true);
    }else{
      validateFindStudent(student);
    }
  }
  const handleClickSave = (event)=>{
    if(validateTextProjects(event,titulo.current.value,descripcion.current.value,docente.current.value)){
      setMessage('Rellene todos los campos');
      setTitle('¡Fallo!');
      setMostrarDialogo(true);
    }else{
      if(titleForm === 'Crear Proyecto'){
        validatePersitence(addProject);
      }else{
        validatePersitence(updateProject);
      }
      
    }
  }
  const handleFacultlyChange = (event) => {
    // Obtener el valor actual seleccionado
    const selectedValue = event.target.value;
    setSelectedFacultly(selectedValue);
    receiveAreas(setAreas,selectedValue,verificarExpiracionToken,navigate,token);
  };
  const handleAreasChange = (event) => {
    const selectedValue = event.target.value;
    setselectedAreas(selectedValue);
  };
  useEffect(() => {
    receiveFacultly(setFacultly,verificarExpiracionToken,navigate,token);
    receiveAreas(setAreas,"",verificarExpiracionToken,navigate,token);
  }, [navigate,token]);

  return (
    <div className="formProjects">
        <h3>{titleForm}</h3>
        <section className="principalForm">
            <input type="text" placeholder='Titulo del proyecto' ref={titulo} required/>
            <textarea name="Decription" id="" ref={descripcion} cols="30" rows="5" placeholder='Descripcion'></textarea>
            {/**Combobox para facultades */}
            <select name="facultly" id="" value={selectedFacultly} onChange={handleFacultlyChange}>
              <option selected disabled value="">
                Facultad...
              </option>
              {facultly.map((facultly,index)=>(
                <option key={index}>{facultly.nombre}</option>
              ))}
            </select>
            <select name="areas" id="" value={selectedAreas} onChange={handleAreasChange}>
              <option selected disabled value="">
                Areas...
              </option>
              {areas.map((areas,index)=>(
                <option key={index}>{areas.nombre}</option>
              ))}
            </select>
            <span className="findTeacher">
                <input type="text" placeholder='Nombre del docente' ref={docente} required/>
                <a className="iconSearch" onClick={(event)=>{handleClickTeacher(event)}}><ion-icon name="search-outline"></ion-icon></a>
            </span>
            <span className="addAditional">
              <input type="checkbox" id="miCheckbox" name="miCheckbox" value="valor" checked={Ischecked}
              onChange={() => setIschecked(!Ischecked)}/>
              <h6 for="miCheckbox">Adicionar Colaborador</h6>
            </span>
        </section>
        <section className="aditionalOwners">
          {Ischecked && (
            <div>
              <span className="findTeacher">
                <input type="text" placeholder='Nombre del estudiante' ref={estudiante1}required/>
                <a className="iconSearch" onClick={(event)=>{handleClickStudent(event,estudiante1.current.value)}}><ion-icon name="search-outline"></ion-icon></a>
              </span>
              <span className="findTeacher">
                <input type="text" placeholder='Nombre del estudiante' ref={estudiante2} required/>
                <a className="iconSearch" onClick={(event)=>{handleClickStudent(event,estudiante2.current.value)}}><ion-icon name="search-outline"></ion-icon></a>
              </span>
            </div>
          )}
        </section>
        <button type="button" class="btn btn-outline-secondary" onClick={(event)=>{handleClickSave(event)}}>{textBotom}</button>
        {mostrarDialogo && <MessageDialog onClose={()=>{onCloseWithOutNavigate(title,setMostrarDialogo)}} title={title} message={message}/>}
    </div>
  )
}

export default FormProject