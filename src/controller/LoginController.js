const login = async (username, password) => {
    try {
      const response = await fetch('http://localhost:8080/api/v1/auth/authenticate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          username: username,
          password: password
        })
      });
  
      if (response.ok) {
            const data = await response.json();
            localStorage.setItem('token', data.token,);
            localStorage.setItem('perfil', data.perfil);
            return { success: true, userData: 'Datos correctos puedes entrar correctamente al sistema'};
        } else {
            const errorData = await response.json();
            return { success: false, dataError: 'Fallo en alguna de las credenciales por favor ingrese bien los datos', errorData};
        }
    } catch (error) {
      alert('Contraseña incorrecta', error);
    }
  };

export default login;