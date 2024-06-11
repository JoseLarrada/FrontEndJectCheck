import {React, useState,useRef,useEffect} from 'react'
import '../styles/FormProject.css'
import {useNavigate} from 'react-router-dom';
import verificarExpiracionToken from '../Configs/verificarExpiracionToken .js'
import {validateTextProjects,handleChange,cleanTextBox} from '../Configs/FormValidation'
import {customMessage,onCloseWithOutNavigate} from '../Configs/MessageViews'
import MessageDialog from '../Components/MessageDialog'
import {addProject,updateProject} from '../controller/ProjectController'
import {toogleFindTeache,renderToogle} from '../Configs/optionSearchConfig.js'
import {receiveFacultly,receiveAreas} from '../controller/investigationController.js'

function FormProject({titleForm,textBotom,datosProject,closeForm}) {
  const [Ischecked,setIschecked]=useState(false)
  const [message, setMessage] = useState('');
  const [title, setTitle] = useState('');
  const [mostrarDialogo, setMostrarDialogo] = useState(false);
  const [facultly, setFacultly] = useState([]);
  const [selectedFacultly, setSelectedFacultly] = useState("");
  const [selectedAreas, setselectedAreas] = useState("");
  const [areas, setAreas] = useState([]);
  const [viewForm, setViewForm] = useState(true);
  const [text, setText] = useState("");
  const [textStudent, setTextStudent] = useState("");
  const [textStudent2, setTextStudent2] = useState("");
  const [role, setRole] = useState("");
  const [viewSearch, setViewSearch] = useState(false);
  const [importTittle, setImportTittle] = useState(datosProject.titulo);
  const [importDescripcion, setImportDescripcion] = useState(datosProject.descripcion);

  const navigate=useNavigate();
  const titulo = useRef();
  const descripcion = useRef();
  const docente = useRef(); 
  const estudiante1= useRef();
  const estudiante2=useRef();
  const token=localStorage.getItem("token")

  const validatePersitence= async (functioProject)=>{
      if (estudiante2.current === undefined && estudiante1.current === undefined) {
          const result = await functioProject(titulo.current.value, docente.current.value, null, null, 
            descripcion.current.value, token, verificarExpiracionToken, navigate,selectedFacultly,selectedAreas);
          customMessage(result, setTitle, setMessage, setMostrarDialogo);
      }else if(estudiante2.current === undefined){
          const result = await functioProject(titulo.current.value, docente.current.value,null,estudiante1.current.value, 
            descripcion.current.value, token, verificarExpiracionToken, navigate,selectedFacultly,selectedAreas);
          customMessage(result, setTitle, setMessage, setMostrarDialogo);
      }else if(estudiante1.current === undefined){
          const result = await functioProject(titulo.current.value, docente.current.value,estudiante2.current.value,null, 
            descripcion.current.value, token, verificarExpiracionToken, navigate,selectedFacultly,selectedAreas);
          customMessage(result, setTitle, setMessage, setMostrarDialogo);
      }else{
        const result = await functioProject(titulo.current.value, docente.current.value,estudiante2.current.value,
          estudiante1.current.value, descripcion.current.value, token, verificarExpiracionToken, navigate,selectedFacultly,selectedAreas);
        customMessage(result, setTitle, setMessage, setMostrarDialogo);
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
  const toggleFind = (rol) => {
    setRole(rol)
    setViewSearch(!viewSearch);
  };

  const closedMessage = () => {
    if(titleForm==='Crear Proyecto'){
        setImportTittle(''); setImportDescripcion('');setText('');setTextStudent('');setTextStudent2('')
        setSelectedFacultly('Facultad...')
        setselectedAreas('Areas...')
    }else{
      closeForm()
    }
  };

  const handleTituloChange = (event) => {
    setImportTittle(event.target.value);
    handleChange(titulo,25,setMessage,setTitle,setMostrarDialogo)
  };

  const handleDescripcionChange = (event) => {
    setImportDescripcion(event.target.value);
    handleChange(descripcion,255,setMessage,setTitle,setMostrarDialogo)
  };

  useEffect(() => {
    receiveFacultly(setFacultly,verificarExpiracionToken,navigate,token);
    receiveAreas(setAreas,"",verificarExpiracionToken,navigate,token);
  }, [navigate,token]);

  return (
    <>
      {viewForm && <div className="formProjects">
          <h3>{titleForm}</h3>
          <section className="principalForm">
              <input type="text" placeholder='Titulo del proyecto' ref={titulo} value={importTittle} onChange={handleTituloChange}required/>
              <textarea name="Decription" id="" ref={descripcion} cols="30" rows="5" placeholder='Descripcion' 
              value={importDescripcion} onChange={handleDescripcionChange}></textarea>
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
                  <input type="text" placeholder='Nombre del docente' ref={docente} disabled value={text}/>
                  <a className="iconSearch"><ion-icon name="search-outline" onClick={()=>{toggleFind('docente')}}></ion-icon></a>
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
                  <input type="text" placeholder='Nombre del estudiante' ref={estudiante1} disabled value={textStudent}/>
                  <a className="iconSearch" onClick={()=>{toggleFind('integrante 1')}}><ion-icon name="search-outline"></ion-icon></a>
                </span>
                <span className="findTeacher">
                  <input type="text" placeholder='Nombre del estudiante' ref={estudiante2} disabled value={textStudent2}/>
                  <a className="iconSearch" onClick={()=>{toggleFind('integrante 2')}}><ion-icon name="search-outline"></ion-icon></a>
                </span>
              </div>
            )}
          </section>
          <button type="button" class="btn btn-outline-secondary" onClick={(event)=>{handleClickSave(event)}}>{textBotom}</button>
          {mostrarDialogo && <MessageDialog onClose={()=>{onCloseWithOutNavigate(title,setMostrarDialogo,closedMessage)}} title={title} message={message}/>}
      </div>}
      {viewSearch&&renderToogle(toggleFind,viewSearch,token,verificarExpiracionToken,navigate,setText,setTextStudent,setTextStudent2,role)}
    </>
    
  )
}

export default FormProject