export const customMessage = async (result,setTitle,setMessage,setMostrarDialogo) =>{
    if (result.success){
        setTitle('¡Felicidades!');
        setMessage(result.userData);
        setMostrarDialogo(true);
    }else{
        setTitle('¡Fallo!');
        setMessage(result.dataError);
        setMostrarDialogo(true);
    }
}

export const onClose = (title,setMostrarDialogo,navigate,path)=>{
  if(title==='¡Felicidades!'){
    setMostrarDialogo(false);
    navigate(path);
  }else{
    setMostrarDialogo(false);
  }
}
export const onCloseWithOutNavigate = (title,setMostrarDialogo,close)=>{
  if(title==='¡Felicidades!' && close!=undefined){
    setMostrarDialogo(false);
    close()
  }else{
    setMostrarDialogo(false);
  }
}
