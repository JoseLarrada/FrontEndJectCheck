import ConfirmLog from '../Components/ConfirmLog'
import {acceptProject} from '../controller/ProjectController'
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

export const renderOption = (text,verificarExpiracionToken,navigate,tuToken) =>{
    if(text==='Aceptar'){
       return <ConfirmLog texto={'¿Está Seguro de que desea aceptar el proyecto?'} 
       onConfirm={()=>{acceptProject(verificarExpiracionToken,navigate,tuToken)}} onCancel={()=>{}}/>
    }else{
        return <ConfirmLog texto={'¿Está Seguro de que desea rechazar el proyecto?'} 
       onConfirm={()=>{alert('se esta activando antes')}} onCancel={()=>{}}/>
    }
}
const toogleButton=(option,setOpenConfirmLog,openConfirmLog,setText)=>{
        setText(option);
        setOpenConfirmLog(!openConfirmLog);
        console.log(openConfirmLog)
}
export const renderButtons = (setOpenConfirmLog,openConfirmLog,setText,closeForm) =>{
    if(localStorage.getItem("perfil")==1){
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

