import ConfirmLog from '../Components/ConfirmLog'
import {acceptProject,rejectProject} from '../controller/ProjectController'
import {customMessage} from '../Configs/MessageViews'

import '../styles/inforProject.css'
export const recievedMembers=(item)=>{
    const members=[];
    if(item.firstsMember!==""){
        members.push(item.firstsMember);
    }
    if (item.secondMember!==""){
        members.push(item.secondMember);
    }
    if(item.thirdMember!==""){
        members.push(item.thirdMember);
    }
    return members;
}

const customResponse= async (functionTeacher,verificarExpiracionToken,navigate,tuToken,setTitle,setMessage,setMostrarDialogo)=>{
    const result = await functionTeacher(verificarExpiracionToken,navigate,tuToken);
    customMessage(result,setTitle,setMessage,setMostrarDialogo);
}


export const renderOption = (text,verificarExpiracionToken,navigate,tuToken,setTitle,setMessage,setMostrarDialogo) =>{
    if(text==='Aceptar'){
       return <ConfirmLog texto={'¿Está Seguro de que desea aceptar el proyecto?'} 
       onConfirm={()=>{customResponse(acceptProject,verificarExpiracionToken,navigate,tuToken,setTitle,setMessage,setMostrarDialogo)}} onCancel={()=>{}}/>
    }else{
        return <ConfirmLog texto={'¿Está Seguro de que desea rechazar el proyecto?'} 
       onConfirm={()=>{customResponse(rejectProject,verificarExpiracionToken,navigate,tuToken,setTitle,setMessage,setMostrarDialogo)}} onCancel={()=>{}}/>
    }
}
const toogleButton=(option,setOpenConfirmLog,openConfirmLog,setText)=>{
        setText(option);
        setOpenConfirmLog(!openConfirmLog);
        console.log(openConfirmLog)
}
export const renderButtons = (setOpenConfirmLog,openConfirmLog,setText,closeForm,state) =>{
    if(localStorage.getItem("perfil")==1 || state==6){
        return <span className='buttons'>
             <button className='buttons_desing accept acceptStudent' onClick={()=>{closeForm()}}>Aceptar</button>
        </span>
    }else{
        return <span className='buttons'>
                <button className='buttons_desing accept' onClick={()=>{toogleButton('Aceptar',setOpenConfirmLog,openConfirmLog,setText)}}>Aceptar</button>
                <button className='buttons_desing reject' onClick={()=>{toogleButton('Rechazar',setOpenConfirmLog,openConfirmLog,setText)}}>Rechazar</button>
            </span>
    }
}

