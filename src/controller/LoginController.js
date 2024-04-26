const login = async (username, password, navigate) => {
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
        localStorage.setItem('token', data.token);
        localStorage.setItem('perfil',data.perfil);
        navigate('/principalview');
      }else{
        const errorData = await response.json();
        alert(errorData.token);
      } 
    } catch (error) {
      alert('Contraseña incorrecta', error);
    }
  };

export default login;