const verificarExpiracionToken = () => {
    const tuToken = localStorage.getItem('token');
  
    if (tuToken) {
      // Decodificar el token para obtener la información de fecha de expiración
      const tokenData = JSON.parse(atob(tuToken.split('.')[1]));
      const expiracion = new Date(tokenData.exp * 1000); 
      if (new Date() > expiracion) {
        localStorage.removeItem('token'); 
        alert('Tu sesión ha expirado, por favor inicia sesión nuevamente.');
        return false; 
      } else {
        return true; 
      }
    } else {
      alert('No has iniciado sesión.');
      return false; 
    }
  };
  export default verificarExpiracionToken;