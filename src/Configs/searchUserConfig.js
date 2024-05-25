export const setTextItem =(item,setText,closeForm,setMessage,setTitle,setMostrarDialogo)=>{
    if(item.fullName!=undefined || item.fullName!=null){
        setText(item.fullName);
        closeForm()
    }else{
        setMessage('Rellene todos los campos');
        setTitle('¡Fallo!');
        setMostrarDialogo(true);
    }
}

export const validateForm =(nombre,setMessage,setTitle,setMostrarDialogo)=>{
    if(!nombre){
        setMessage('Rellene el campo');
        setTitle('¡Fallo!');
        setMostrarDialogo(true);
        return true
    }
    return false;
}