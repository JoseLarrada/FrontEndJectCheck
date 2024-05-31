//Buscar Profesor
export const findTeacher = async (
  profesor,
  setDatos,
  tuToken,
  verificarExpiracionToken,
  navigate,
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
      const userData = await response.json();
      setDatos(userData);
    } else {
      const dataError = await response.text();
      console.log(dataError)
    }
  } catch (error) {
    console.log(error)
  }
};
//Buscar Estudiante
export const findStudent = async (
  estudiante,
  setDatos,
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
      const userData = await response.json();
      setDatos(userData);
      alert(userData)
    } else {
      const dataError = await response.text();
      alert(dataError)
    }
  } catch (error) {
    alert(error)
  }
};

//Agregar Proyecto
export const addProject = async (
  title,
  teacher,
  member2,
  member1,
  descripcion,
  tuToken,
  verificarExpiracionToken,
  navigate,
  idFacultly,
  idArea
) => {
  try {
    if (!verificarExpiracionToken()) {
      navigate("/");
    }
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
          idFacultly: idFacultly,
          idArea: idArea
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
  tuToken,
  verificarExpiracionToken,
  navigate,
  idFacultly,
  idArea
) => {
  try {
    if (!verificarExpiracionToken()) {
      navigate("/");
    }
    const response = await fetch(
      "http://localhost:8080/api/v1/PrincipalContent/UpdateRoute",
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${tuToken}`,
        },
        body: JSON.stringify({
          id: localStorage.getItem('id_ruta'),
          nameRoute: title,
          teacher: teacher,
          id_Member2: member2,
          id_Member: member1,
          description: description,
          idFacultly: idFacultly,
          idArea: idArea
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
    console.log(error)
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

//Filtrar Proyectos
export const filterProjects = async (
  verificarExpiracionToken,
  navigate,
  tuToken,
  setDatos,
  state
) => {
  try {
    if (!verificarExpiracionToken()) {
      navigate("/");
    }
    const response = await fetch(
      `http://localhost:8080/api/v1/PrincipalContent/filterroutes/${state}`,
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

//Buscar proyectos por id
export const getProjectById = async (
  verificarExpiracionToken,
  navigate,
  tuToken,
  SetResponse
) => {
  try {
    if (!verificarExpiracionToken()) {
      navigate("/");
    }
    const response = await fetch(
      `http://localhost:8080/api/v1/PrincipalContent/getProject/${localStorage.getItem('id_ruta')}`,
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
      SetResponse(userData);
    } else {
      const dataError = await response.text();
      alert(dataError)
    }
  } catch (error) {
    return {success: false, error}
  }
};
  //Funciones de profesores
export  const acceptProject= async (verificarExpiracionToken,navigate,tuToken) => {
    try {
      if(!verificarExpiracionToken()){
        navigate('/');
      }
      const response = await fetch(`http://localhost:8080/api/v1/PrincipalContent/AcceptProject/${localStorage.getItem('id_ruta')}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${tuToken}`
        }
      });
      console.log(response);
      if (response.ok) {
        const userData = await response.text();
       return {success: true, userData}
      }else{
        const dataError = await response.text();
        return {success: false, dataError}
      } 
    } catch (error) {
      return {success: false, error}
    }
};
//Finalizar Proyecto
export const finishProject= async (verificarExpiracionToken,navigate,tuToken) => {
    try {
      if(!verificarExpiracionToken()){
        navigate('/');
      }
      const response = await fetch(`http://localhost:8080/api/v1/PrincipalContent/FinishProject/${localStorage.getItem('id_ruta')}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${tuToken}`
        }
      });
      console.log(response);
      if (response.ok) {
        const userData = await response.text();
        return {success: true, userData}
      }else{
        const dataError = await response.text();
        return {success: false, dataError}
      } 
    } catch (error) {
      return {success: false, error}
    }
};
//Finalizar Proyecto
export const rejectProject= async (verificarExpiracionToken,navigate,tuToken) => {
    try {
      if(!verificarExpiracionToken()){
        navigate('/');
      }
      const response = await fetch(`http://localhost:8080/api/v1/PrincipalContent/RejectProject/${localStorage.getItem('id_ruta')}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${tuToken}`
        }
      });
      console.log(response);
      if (response.ok) {
        const userData = await response.text();
        return {success: true, userData}
      }else{
        const dataError = await response.text();
        return {success: false, dataError}
      } 
    } catch (error) {
      return {success: false, error}
    }
};