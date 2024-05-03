//Buscar Profesor
export const findTeacher = async (
  profesor,
  tuToken,
  verificarExpiracionToken,
  navigate
) => {
  try {
    if (!verificarExpiracionToken()) {
      navigate("/");
    }
    const response = await fetch(
      `http://localhost:8080/api/v1/auth/GetTeacher/${profesor}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${tuToken}`,
        },
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
//Buscar Estudiante
export const findStudent = async (
  estudiante,
  tuToken,
  verificarExpiracionToken,
  navigate
) => {
  try {
    if (!verificarExpiracionToken()) {
      navigate("/");
    }
    const response = await fetch(
      `http://localhost:8080/api/v1/auth/GetStudent/${estudiante}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${tuToken}`,
        },
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

//Agregar Proyecto
export const addProject = async (
  title,
  teacher,
  member2,
  member1,
  descripcion,
  tuToken
) => {
  try {
    const response = await fetch(
      "http://localhost:8080/api/v1/PrincipalContent/CreateRoute",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${tuToken}`,
        },
        body: JSON.stringify({
          nameRoute: title,
          teacher: teacher,
          id_Member2: member2,
          id_Member: member1,
          description: descripcion,
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

//Actualizar Proyecto
export const updateProject = async (
  title,
  teacher,
  member2,
  member1,
  description,
  tuToken
) => {
  try {
    const response = await fetch(
      "http://localhost:8080/api/v1/PrincipalContent/UpdateRoute",
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${tuToken}`,
        },
        body: JSON.stringify({
          id: localStorage.getItem("id_ruta"),
          nameRoute: title,
          teacher: teacher,
          id_Member2: member2,
          id_Member: member1,
          description: description,
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

//Eliminar Proyecto
export const deleteProject = async (
  texto,
  tuToken,
  verificarExpiracionToken,
  navigate
) => {
  try {
    if (!verificarExpiracionToken()) {
      navigate("/");
    }
    const response = await fetch(
      `http://localhost:8080/api/v1/PrincipalContent/DeleteRoute/${texto}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${tuToken}`,
        },
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

//Cargar Proyectos
export const charguedProject = async (
  verificarExpiracionToken,
  navigate,
  tuToken,
  setDatos
) => {
  try {
    if (!verificarExpiracionToken()) {
      navigate("/");
    }
    const response = await fetch(
      "http://localhost:8080/api/v1/PrincipalContent",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${tuToken}`,
        },
      }
    );
    if (response.ok) {
      const userData = await response.json();
      setDatos(userData);
    } else {
      const dataError = await response.text();
      alert(dataError)
    }
  } catch (error) {
    return {success: false, error}
  }
};
