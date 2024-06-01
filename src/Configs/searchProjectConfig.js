import FormProject from '../Components/FormProject'
import FormAvances from '../Components/FormAvances'
export const renderFuntion =(title,datosProject,toogleCloseForms,view)=>{
    if (title==='Listar Proyectos'){
        return <FormProject titleForm={'Modificar Proyecto'} textBotom={'Modificar'} datosProject={datosProject} closeForm={()=>{toogleCloseForms(view)}}/>
    }else if(title==='Listar Avances'){
        return <FormAvances tittle={"Modificar Avance"} action={"Modificar Avance"} advancesData={datosProject} closeForm={()=>{toogleCloseForms(view)}}/>
    }
}

export const toogleOpenForms=(item,title,setItem,setCloseView,setDatosProject,setView,closeView)=>{
    setItem(item,setDatosProject,setView)
    setCloseView(!closeView)
    if(title==='Listar Proyectos'){
        localStorage.setItem('id_ruta',item.id_ruta);
    }else if(title==='Listar Avances'){
        localStorage.setItem("id_avance", item.id_avance);
    }
}