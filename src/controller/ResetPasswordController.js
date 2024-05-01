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
        const userData = await response.text();
        return {success: true, userData}
      }else{
        const dataError = await response.text();
        return {success: false, dataError}
      } 
    } catch (error) {
      return{success: false, error};
    }
  };

export default resetPassword