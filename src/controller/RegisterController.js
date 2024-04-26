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
        console.log(userData);
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
        console.log(userData);
      } else {
        console.error("Error al cargar los datos:", response.statusText);
      }
    } catch (error) {
      console.error("Error de red:", error);
    }
  };

  export const register = async (id,name,lastnanme,email,navigate) => {
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
        const data = await response.text();
        alert("Registrado Correctamente");
        localStorage.removeItem("username");
        localStorage.removeItem("password");
        localStorage.removeItem("city");
        navigate('/');
      } else {
        const errorData = await response.text();
        alert(errorData.token);
      }
    } catch (error) {
      alert("Error de red:", error);
      // Puedes mostrar un mensaje de error al usuario aquí si lo deseas
    }
  };