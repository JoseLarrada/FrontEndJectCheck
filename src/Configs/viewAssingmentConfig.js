const renderButtons = (perfil,textFirtsBtn,textSecondBtn,textThirdBtn,showAction) =>{
    if(localStorage.getItem('perfil')==perfil){
        return (
            <span className="btn_Option">
                <button className="btnUpdateAssign" data-value={textFirtsBtn} onClick={(event)=>{showAction(event)}}>{textFirtsBtn}</button>
                <button className="btnDeleteAssign" data-value={textSecondBtn} onClick={(event)=>{showAction(event)}}>{textSecondBtn}</button>
            </span>
        )
    }else{
        return <button className="btnRateAssign" data-value={textThirdBtn} onClick={(event)=>{showAction(event)}}>{textThirdBtn}</button>
    }
}

export const renderOptionsButtos=(state,showAction)=>{
    switch(state){
        case 'No calificado':
            return renderButtons(1,'Modificar Entrega','Eliminar Entrega','Calificar Entrega',showAction);
        case 'Calificado':
            return renderButtons(2,'Cambiar Calificacion','Aceptar','Aceptar',showAction);
    }
}
export const isRate=(state)=>{
    return state==='Calificado';
}
export const HandleClickComponents=(option,setComponentAssign,setComponentDel,setComponentRate,setCloseView,setComponentUpdate,closeForm)=>{
    switch(option){
        case 'Modificar Entrega':
            toogleComponent(setComponentAssign,setComponentDel,setComponentRate,setCloseView,setComponentUpdate,true,false,false,false,false)
            break
        case 'Eliminar Entrega' :
            toogleComponent(setComponentAssign,setComponentDel,setComponentRate,setCloseView,setComponentUpdate,false,true,false,false,false)
            break
        case 'Calificar Entrega':
            toogleComponent(setComponentAssign,setComponentDel,setComponentRate,setCloseView,setComponentUpdate,false,false,true,false,false)
            break
        case 'Aceptar':
            toogleComponent(setComponentAssign,setComponentDel,setComponentRate,setCloseView,setComponentUpdate,false,false,false,true,false)
            closeForm()
            break
        case 'Cambiar Calificacion':
            toogleComponent(setComponentAssign,setComponentDel,setComponentRate,setCloseView,setComponentUpdate,false,false,false,false,true)
            break
    }
}
const toogleComponent = (setComponentAssign,setComponentDel,setComponentRate,setCloseView,setComponentUpdate,value1,value2,value3,value4,value5) =>{
    setComponentAssign(value1);
    setComponentDel(value2);
    setComponentRate(value3);
    setCloseView(value4);
    setComponentUpdate(value5)
}
export const closeComponent = (setComponent,setCloseView,value1,value2) =>{
    setComponent(!value1);
    setCloseView(!value2);
}
export const handleButtonClick = (event) => {
  const buttonValue = event.target.getAttribute('data-value');
  return buttonValue;
};