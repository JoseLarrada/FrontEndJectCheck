const chargeUserDate = async (verificarExpiracionToken,navigate,tuToken) => {
    try{
        if(!verificarExpiracionToken()){
            navigate('/');
        }
        const response = await fetch('http://localhost:8080/api/v1/PrincipalContent/profile', {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${tuToken}`
            }
          });
          if (response.ok) {
            const userData = await response.json();
            return userData;
        } else {
            console.error('Error al cargar los datos del usuario:', response.statusText);
        }
    } catch (error) {
        console.error('Error de red:', error);
    }
}

export default chargeUserDate;