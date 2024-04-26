const validateText = (event,field1,field2) => {
    var nombreUsuario = document.getElementById(field1).value;
    var contraseña = document.getElementById(field2).value;
    if (nombreUsuario.trim() === '' || contraseña.trim() === '') {
      alert('Por favor, completa todos los campos.');
      event.preventDefault();
    }
  }

export default validateText;