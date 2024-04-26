const resetPassword= async (email,password,confirmPassword,identification) => {
    try {
      const response = await fetch('http://localhost:8080/api/v1/auth/recoverypassword', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email: email,
          password: password,
          confirmPassword: confirmPassword,
          id: identification
        })
      });
  
      if (response.ok) {
        const data = await response.text();
        alert(data);
      }else{
        const errorData = await response.text();
        alert(errorData);
      } 
    } catch (error) {
      alert('Error de red:', error);
    }
  };

export default resetPassword