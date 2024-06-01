import FormAvances from '../Components/FormAvances'
import ShowComponent from '../Components/ShowComponent'
import FormProject from '../Components/FormProject'
import ViewInfoProject from '../Components/ViewInfoProject'
import SearchProject from '../Components/searchproject'
export const handleOption = (option,setAvanceOption,avanceOption,setCancelOption,cancelOption,onOptionClick) => {
    switch(option){
        case 'Crear Avance':
            setAvanceOption(!avanceOption)
            onOptionClick();
            break;
        case 'Modificar Avance':
            setAvanceOption(!avanceOption)
            onOptionClick();
            break;
        case 'Eliminar Avance':
            setAvanceOption(!avanceOption)
            onOptionClick();
            break;
        case 'Eliminar':
            setCancelOption(!cancelOption)
            break;
    }
};

export const handleFormAvances = (option,avanceOption,handleConfirmarEliminarAvance,handleOptionClick) => {
    switch(option){
        case 'Crear Avance': 
        localStorage.removeItem('id_avance')
        return (
          <div>
            {avanceOption && <FormAvances tittle={"Crear Avance"} action={"Guardar Avance"} advancesData={[]} closeForm={()=>{}}/>}
          </div>
        );
        case 'Modificar Avance': return (
          <div>
            {avanceOption && <FormAvances tittle={"Modificar Avance"} action={"modificar Avance"}/>}
          </div>
        );
        case 'Eliminar Avance': return (
          <div>
            {avanceOption && <ShowComponent titleComponent={'Eliminar Avance'} 
            descripcion={'Esto eliminará el Avance y cualquier dato asociado a ello. Por favor ingresa tu contraseña para confirmar.'}
            action={'Ingrese titulo del avance'} cancel={()=>{handleOptionClick('Eliminar Avance')}} accept={handleConfirmarEliminarAvance}/>}
          </div>
        );
    }
};

export const handleFormProjects = (option,cancelOption,handleConfirmarEliminarProyecto,handleOptionClick) =>{
    switch(option){
        case 'Crear': return <FormProject titleForm={'Crear Proyecto'} textBotom={'Crear'} datosProject={[]} closeForm={()=>{}}/>;
        case 'Eliminar': return (
          <div>
            {cancelOption && <ShowComponent titleComponent={'Eliminar Proyecto'} 
            descripcion={'Esto eliminará el proyecto y cualquier dato asociado a el. Por favor ingresa tu contraseña para confirmar.'}
            action={'Ingrese Nombre del proyecto'} cancel={()=>{handleOptionClick('Eliminar')}} accept={handleConfirmarEliminarProyecto}/>}
          </div>
        );
    }
}

export const handleViewInfoProject = (toggleFind)=>{
   return <ViewInfoProject closeForm={toggleFind}/>
}