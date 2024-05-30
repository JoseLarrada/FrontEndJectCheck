import ConfirmLog from '../Components/ConfirmLog'
import {acceptProject} from '../controller/ProjectController'
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