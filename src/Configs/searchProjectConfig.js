import FormProject from '../Components/FormProject'
import FormAvances from '../Components/FormAvances'
import ShowComponent from '../Components/ShowComponent'
export const renderFuntion =(title,datosProject,toogleCloseForms,view,fuctionDelete)=>{
    if (title==='Listar Proyectos'){
        return <FormProject titleForm={'Modificar Proyecto'} textBotom={'Modificar'} datosProject={datosProject} closeForm={()=>{toogleCloseForms(view)}}/>
    }else if(title==='Listar Avances'){
        return <FormAvances tittle={"Modificar Avance"} action={"Modificar Avance"} advancesData={datosProject} closeForm={()=>{toogleCloseForms(view)}}/>
    }else if(title==='Eliminar Avances'){
        return <ShowComponent titleComponent={'Eliminar Avance'} 
            descripcion={'Esto eliminará el Avance y cualquier dato asociado a ello. Por favor ingresa tu contraseña para confirmar.'}
            action={'Ingrese titulo del avance'} cancel={()=>{toogleCloseForms(view)}} accept={fuctionDelete}/>
    }
}

export const toogleOpenForms=(item,title,setItem,setCloseView,setDatosProject,setView,closeView)=>{
    setItem(item,setDatosProject,setView)
    setCloseView(!closeView)
    if(title==='Listar Proyectos'){
        localStorage.setItem('id_ruta',item.id_ruta);
    }else if(title==='Listar Avances' || title==='Eliminar Avances'){
        localStorage.setItem("id_avance", item.id_avance);
    }
}