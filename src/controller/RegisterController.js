//Cargue y seleccion de departamentos
export const receivedepartment = async (setDepartamentos) => {
    try {
      const response = await fetch(
        "http://localhost:8080/api/v1/auth/getdepartmen",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (response.ok) {
        const userData = await response.json();
        setDepartamentos(userData);
      } else {
        console.error("Error al cargar los datos:", response.statusText);
      }
    } catch (error) {
      console.error("Error de red:", error);
    }
};

//Cargue y seleccion de ciudades
export const receiveCities = async (namedepartment,setCiudades) => {
    try {
      const response = await fetch(
        `http://localhost:8080/api/v1/auth/getCity/${namedepartment}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (response.ok) {
        const userData = await response.json();
        setCiudades(userData);
      } else {
        console.error("Error al cargar los datos:", response.statusText);
      }
    } catch (error) {
      console.error("Error de red:", error);
    }
};
//Consumir servicio de registrar 
export const register = async (id,name,lastnanme,email) => {
    try {
      const response = await fetch(
        "http://localhost:8080/api/v1/auth/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            id: id,
            username: localStorage.getItem("username"),
            password: localStorage.getItem("password"),
            name: name,
            lastname: lastnanme,
            city: localStorage.getItem("city"),
            email: email,
            profile: localStorage.getItem("perfil"),
          }),
        }
      );

      if (response.ok) {
        const userData = await response.json();
        localStorage.removeItem("username");
        localStorage.removeItem("password");
        localStorage.removeItem("city");
        localStorage.setItem('token', userData.token,);
        localStorage.setItem('perfil', userData.perfil);
        return{success: true, userData: 'Registro Exitoso, ya puedes acceder al sistema'}
      } else {
        const dataError = await response.text();
        return{success: false, dataError}
      }
    } catch (error) {
      return{success: false, error};
    }
};

//Mirar si existe ya un usuario con esas credenciales
export const validateUser = async (Username,Password,obtenerTipoUsuario) => {
    try{
        const response = await fetch('http://localhost:8080/api/v1/auth/getUser', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              username: Username,
              password: Password
            })
          });
          if (response.ok) {
            const userData = await response.text();
            localStorage.setItem('username',Username);
            localStorage.setItem('password',Password);
            localStorage.setItem('perfil',obtenerTipoUsuario());
            return {success : true, userData}
        } else {
            const dataError=await response.text()
            return {success : false, dataError}
        }
    } catch (error) {
      console.log(error)
      return { success: false, dataError: 'Error de red' };
    }
}