export const generateGeneralReport= async (verificarExpiracionToken,navigate,tuToken) => {
    try {
      if(!verificarExpiracionToken()){
        navigate('/');
      }
      const response = await fetch('http://localhost:8080/api/v1/PrincipalContent/generate/document', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${tuToken}`
        }
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
      console.log(error)
    }
};

export const generateCustomReport= async (verificarExpiracionToken,navigate,tuToken) => {
    try {
      if(!verificarExpiracionToken()){
        navigate('/');
      }
      const url = `http://localhost:8080/api/v1/PrincipalContent/Generate/CustomDocument/${localStorage.getItem('id_ruta')}`;
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${tuToken}`
        }
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

export const readReport= async (verificarExpiracionToken,navigate,tuToken,setDatos) => {
    try {
      if(!verificarExpiracionToken()){
        navigate('/');
      }
      const response = await fetch('http://localhost:8080/api/v1/PrincipalContent', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${tuToken}`
        }
      });
      if (response.ok) {
        const data = await response.json();
        setDatos(data);
      }else{
        const errorData = await response.text();
        alert(errorData);
      } 
    } catch (error) {
      alert('Error de red:', error);
    }
};