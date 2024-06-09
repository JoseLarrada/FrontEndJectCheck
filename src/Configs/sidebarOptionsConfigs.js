import FormAvances from '../Components/FormAvances'
import ShowComponent from '../Components/ShowComponent'
import FormProject from '../Components/FormProject'
import ViewInfoProject from '../Components/ViewInfoProject'
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
        case 'Eliminar Proyecto':
            setAvanceOption(!avanceOption)
            onOptionClick();
            break;
        case 'Ver Proyecto':
            setAvanceOption(!avanceOption)
            onOptionClick();
            break;
    }
};

export const handleFormAvances = (option,avanceOption,handleConfirmarEliminarAvance,handleOptionClick,handleConfirmarEliminarProyecto) => {
    switch(option){
        case 'Crear Avance': 
        localStorage.removeItem('id_avance')
        return (
          <div>
            {avanceOption && <FormAvances tittle={"Crear Avance"} action={"Guardar Avance"} advancesData={[]} closeForm={()=>{}}/>}
          </div>
        );
        case 'Eliminar Avance': return (
          <div>
            {avanceOption && <ShowComponent titleComponent={'Eliminar Avance'} 
            descripcion={'Esto eliminará el Avance y cualquier dato asociado a ello. Por favor ingresa el titulo del avance para confirmar.'}
            action={'Ingrese titulo del avance'} cancel={()=>{handleOptionClick('Eliminar Avance')}} accept={handleConfirmarEliminarAvance}/>}
          </div>
        );
        case 'Ver Proyecto': return (
          <div>
            {avanceOption && handleViewInfoProject()}
          </div>
        )
    }
};

export const handleFormProjects = (option,cancelOption,handleConfirmarEliminarProyecto,handleOptionClick) =>{
    switch(option){
        case 'Crear': return <FormProject titleForm={'Crear Proyecto'} textBotom={'Crear'} datosProject={[]} closeForm={()=>{}}/>;
    }
}

export const handleViewInfoProject = (toggleFind)=>{
   return <ViewInfoProject closeForm={toggleFind}/>
}