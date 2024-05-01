export const validateText = (event,field1,field2) => {
    var nombreUsuario = document.getElementById(field1).value;
    var contraseña = document.getElementById(field2).value;
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