export const validateText = (event,field1,field2) => {
    const nombreUsuario = document.getElementById(field1).value;
    const contraseña = document.getElementById(field2).value;
    if (nombreUsuario.trim() === '' || contraseña.trim() === '') {
      event.preventDefault();
      return true;
    }
}

export const obtenerTipoUsuario = () => {
    const radioProfesor = document.getElementById('flexRadioDefault1');
    const radioEstudiante = document.getElementById('flexRadioDefault2');
    if (radioProfesor.checked) {
      return 2;
    } else if (radioEstudiante.checked) {
      return 1;
    } else {
      return 0;
    }
}

export const validateTextAutentication = (event,field1,field2,field3,field4) =>{
    if(field1.trim() === '' || field2.trim() === '' || field3.trim() === '' || field4.trim() === ''){
      event.preventDefault();
      return true;
    }
}
export const validateTextCreateProject = (event,field1,field2,field3,field4,field5) =>{
    if(field1.trim() === '' || field2.trim() === '' || field3.trim() === '' || field4.trim() === ''|| field5.trim() === ''){
      event.preventDefault();
      return true;
    }
}

export const validateTextProjects = (event,field1,field2,field3) =>{
  if(field1.trim() === '' || field2.trim() === '' || field3.trim() === ''){
    event.preventDefault();
    return true;
  }
}

export const validateTextfield = (event,field1) =>{
  if(field1.trim() === ''){
    event.preventDefault();
    return true;
  }
}

export const cleanTextBox =(field1,field2,field3,field4)=>{
    field1.current.value='';
    field2.current.value='';
    field3.current.value='';
    field4.current.value='';
}
export const handleChange = (text,maxLength,setMessage,setTitle,setMostrarDialogo) => {
        const newValue = text.current.value;
        if (newValue.length > maxLength) {
            setMessage('Esta a punto de exceder el valor minimo');
            setTitle('¡Fallo!');
            setMostrarDialogo(true);
            text.current.value = newValue.slice(0, maxLength);
        }
};

export const handleTextInputChange = (text,setMessage,setTitle,setMostrarDialogo) => {
        const value = text.current.value;
        const lettersRegex = /^[A-Za-z]*$/;
        if (!lettersRegex.test(value)) {
            setMessage('No se permiten valores numericos');
            setTitle('¡Fallo!');
            setMostrarDialogo(true);
            text.current.value=''
        }
};
export const handleNumberInputChange = (text,setMessage,setTitle,setMostrarDialogo) => {
        const value = text.current.value;
        const numbersRegex = /^[0-9]*$/;
        if (!numbersRegex.test(value)) {
            setMessage('No se permiten caracteres');
            setTitle('¡Fallo!');
            setMostrarDialogo(true);
            text.current.value=''
        }
};