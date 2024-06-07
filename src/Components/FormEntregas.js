import React, {useRef,useState} from 'react';
import {useNavigate} from 'react-router-dom';
import verificarExpiracionToken from '../Configs/verificarExpiracionToken .js'
import {saveAssignment,UpdateAssignment} from '../controller/AssignmentController.js'
import {uploadFile,deleteFile,getFiles} from '../controller/FilesUploadController.js'
import FilesComponents from '../Components/FilesComponents.js'
import MessageDialog from '../Components/MessageDialog.js'
import {customMessage,onCloseWithOutNavigate} from '../Configs/MessageViews'
import {handleCommentChange} from '../Configs/assingmentConfig.js'
function FormEntregas({tittle,action,onOptionClick,assinngmentData}) {
  const comment=useRef();
  const navigate=useNavigate();
  const tuToken = localStorage.getItem('token');
  const [importComment, setImportComment] = useState(assinngmentData.comentario);
  const [viewFormEntregas,setViewFormEntregas] = useState(true)  
  const [listFilesId,setListFilesId] = useState([])
  const [files,setFiles] = useState([])
  const [viewFormUpload,setViewFormUpload] = useState(false)
  const [titleDialog, setTitleDialog] = useState('');
  const [message, setMessage] = useState('');
  const [mostrarDialogo,setMostrarDialogo] = useState(false)
  
  const toogleOptionUser= async ()=>{
    if(tittle==='Añadir Entrega'){
        const result= await saveAssignment(verificarExpiracionToken,navigate,tuToken,files,comment.current.value)
        customMessage(result,setTitleDialog,setMessage,setMostrarDialogo)
    }else{
        const result= await UpdateAssignment(verificarExpiracionToken,navigate,tuToken,files,comment.current.value)
        customMessage(result,setTitleDialog,setMessage,setMostrarDialogo)
    }
  }

  const clidkFormAddFile = async () =>{
    await getFiles(verificarExpiracionToken,navigate,tuToken,setListFilesId)
    setViewFormUpload(!viewFormUpload)
  }

  return (
    <div>
      {viewFormEntregas && <section class="form-register">
          <span className='header-form-assingment'>
            <h4>{tittle}</h4>
            <ion-icon name="close-circle-outline" onClick={()=>{onOptionClick()}}></ion-icon>
          </span>
          <button class="controls controlsbuttom" onClick={clidkFormAddFile}>Añadir Entrega</button>
          <textarea name="description" id="" class="controls" type="text" ref={comment} 
          placeholder="Ingrese la descripcion" value={importComment} onChange={(event)=>{handleCommentChange(event,setImportComment)}}></textarea>
          <button type="submit" class="botons" onClick={toogleOptionUser}>
            {action}
          </button>
          {mostrarDialogo && <MessageDialog onClose={()=>{onCloseWithOutNavigate(titleDialog,setMostrarDialogo,onOptionClick)}} title={titleDialog} message={message}/>}
      </section>}
      {viewFormUpload&&<FilesComponents uploadFunction={uploadFile} deleteFunction={deleteFile} setList={setFiles} listInitial={listFilesId}/>}      
    </div>
  )
}

export default FormEntregas
