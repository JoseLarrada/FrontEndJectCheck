import React, { useRef,useState } from "react";
import verificarExpiracionToken from "../Configs/verificarExpiracionToken .js";
import "../styles/advances.css";
import { saveAdvance, updateadvance } from "../controller/AdvanceController.js";
import { useNavigate } from "react-router-dom";
import {uploadRubrics,deleteRubric,getrubrics} from '../controller/FilesUploadController'
import FilesComponents from '../Components/FilesComponents.js'
import MessageDialog from '../Components/MessageDialog.js'
import {customMessage,onCloseWithOutNavigate} from '../Configs/MessageViews'
import {handleChange} from '../Configs/data.js'

function FormAvances({ tittle, action, advancesData, closeForm}) {
  const title = useRef();
  const descripcion = useRef();
  const navigate = useNavigate();
  const tuToken = localStorage.getItem("token");
  const [viewFormUpload,setViewFormUpload] = useState(false)
  const [titleDialog, setTitleDialog] = useState('');
  const [message, setMessage] = useState('');
  const [viewFormAvances,setViewFormAvances] = useState(true)
  const [rubrics,setRubrics] = useState([])
  const [listRubricId,setListRubricId] = useState([])
  const [importTittle, setImportTittle] = useState(advancesData.titulo);
  const [importDescripcion, setImportDescripcion] = useState(advancesData.descripcion);
  const [mostrarDialogo,setMostrarDialogo] = useState(false)
  
  const toogleOptionUser= async (event)=>{
    if(viewNullBoxAssignment(event)){
      setMessage('Hay campos sin rellenar, rellenelos');
      setTitleDialog('¡Fallo!');
      setMostrarDialogo(true);
    }else{
      if(action==='Guardar Avance'){
        const result= await saveAdvance(verificarExpiracionToken,navigate,tuToken,title.current.value,descripcion.current.value,rubrics)
        customMessage(result,setTitleDialog,setMessage,setMostrarDialogo)
      }else{
          const result= await updateadvance(verificarExpiracionToken,navigate,tuToken,title.current.value,descripcion.current.value,rubrics)
          console.log(rubrics)
          customMessage(result,setTitleDialog,setMessage,setMostrarDialogo)
      }
    }
  }
  const viewNullBoxAssignment=(event)=>{
    if(title.current.value==='' || descripcion.current.value===''){
      event.preventDefault();
      return true;
    }
  }
  const handleTituloChange = (event) => {
    setImportTittle(event.target.value);
    handleChange(title,30,setMessage,setTitleDialog,setMostrarDialogo)
  };

  const handleDescripcionChange = (event) => {
    setImportDescripcion(event.target.value);
    handleChange(descripcion,255,setMessage,setTitleDialog,setMostrarDialogo)
  };

  const clidkFormAddRubric = async () =>{
    await getrubrics(verificarExpiracionToken,navigate,tuToken,setListRubricId)
    setViewFormUpload(!viewFormUpload)
  }

  return (
    <>
      {viewFormAvances && <section class="form-register">
          <span className='header-form-assingment'>
            <h4>{tittle}</h4>
            <ion-icon name="close-circle-outline" onClick={closeForm}></ion-icon>
          </span>
          <input class="controls" type="text" ref={title} placeholder="Ingrese el titulo" value={importTittle} onChange={handleTituloChange}/>
          <textarea name="description" id="" class="controls" type="text" ref={descripcion} 
          placeholder="Ingrese la descripcion" value={importDescripcion} onChange={handleDescripcionChange}></textarea>
          <button class="controls controlsbuttom" onClick={clidkFormAddRubric}>Añadir Rubrica</button>
          <button type="submit" class="botons" onClick={toogleOptionUser}>{action}</button>
          {mostrarDialogo && <MessageDialog onClose={()=>{onCloseWithOutNavigate(titleDialog,setMostrarDialogo,closeForm)}} title={titleDialog} message={message}/>}
        </section>
      }    
      {viewFormUpload&&<FilesComponents uploadFunction={uploadRubrics} deleteFunction={deleteRubric} setList={setRubrics} listInitial={listRubricId}/>}
    </>
  );
}

export default FormAvances;
