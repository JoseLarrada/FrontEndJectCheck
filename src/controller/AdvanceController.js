export const chargueAdvances = async (
  verificarExpiracionToken,
  navigate,
  tuToken,
  SetAvances
) => {
  try {
    if (!verificarExpiracionToken()) {
      navigate("/");
    }
    const response = await fetch(
      `http://localhost:8080/api/v1/PrincipalContent/chargueadvances/${localStorage.getItem(
        "id_ruta"
      )}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${tuToken}`,
        },
      }
    );

    if (response.ok) {
      const data = await response.json();
      SetAvances(data);
    } else {
      console.error("Error al cargar los datos:", response.statusText);
    }
  } catch (error) {
    console.error("Error de red:", error);
  }
};

export const saveAdvance = async (
  verificarExpiracionToken,
  navigate,
  tuToken,
  title,
  descripcion,
  rubric
) => {
  try {
    if (!verificarExpiracionToken()) {
      navigate("/");
    }
    const response = await fetch(
      "http://localhost:8080/api/v1/PrincipalContent/createadvance",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${tuToken}`,
        },
        body: JSON.stringify({
          tittle: title,
          description: descripcion,
          rubric: rubric,
          routeId: localStorage.getItem("id_ruta"),
        }),
      }
    );
    if (response.ok) {
      const userData = await response.text();
      return {success: true, userData}
    } else {
      const dataError = await response.text();
      return {success: false, dataError}
    }
  } catch (error) {
    return {success: false, error}
  }
};

export const updateadvance = async (
  verificarExpiracionToken,
  navigate,
  tuToken,
  title,
  descripcion,
  rubric
) => {
  try {
    if (!verificarExpiracionToken()) {
      navigate("/");
    }
    const response = await fetch(
      "http://localhost:8080/api/v1/PrincipalContent/updateadvance",
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${tuToken}`,
        },
        body: JSON.stringify({
          tittle: title,
          description: descripcion,
          rubric: rubric,
          routeId: localStorage.getItem("id_ruta"),
          advanceId: localStorage.getItem("id_avance"),
        }),
      }
    );
    if (response.ok) {
      const userData = await response.text();
      return {success: true, userData}
    } else {
      const dataError = await response.text();
      return {success: false, dataError}
    }
  } catch (error) {
    return {success: false, error}
  }
};
//Eliminar Avances
export const deleteAdvance= async (texto,tuToken,verificarExpiracionToken,navigate) => {
    try {
      if(!verificarExpiracionToken()){
        navigate('/');
      }
      const response = await fetch(`http://localhost:8080/api/v1/PrincipalContent/deleteadvance/${texto}/${localStorage.getItem('id_avance')}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${tuToken}`
        }
      });
      if (response.ok) {
        const userData = await response.text();
         return {success: true, userData}
      }else{
        const dataError = await response.text();
        console.log(dataError)
        return {success: false, dataError}
      } 
    } catch (error) {
      console.log(error)      
      return {success: false, error}
    }
  };