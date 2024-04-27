export const chargeUserDate = async (
  verificarExpiracionToken,
  navigate,
  tuToken
) => {
  try {
    if (!verificarExpiracionToken()) {
      navigate("/");
    }
    const response = await fetch(
      "http://localhost:8080/api/v1/PrincipalContent/profile",
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
      return userData;
    } else {
      console.error(
        "Error al cargar los datos del usuario:",
        response.statusText
      );
    }
  } catch (error) {
    console.error("Error de red:", error);
  }
};

//1. Cambiar Contraseña
export const updatePassword = async (
  verificarExpiracionToken,
  tuToken,
  confirmarNueva,
  nueva,
  actual,
  navigate
) => {
  try {
    if (!verificarExpiracionToken()) {
      navigate("/");
    }
    const response = await fetch(
      "http://localhost:8080/api/v1/PrincipalContent/profile/ChangePassword",
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${tuToken}`,
        },
        body: JSON.stringify({
          confirmPassword: confirmarNueva,
          newPassword: nueva,
          nowPassword: actual,
        }),
      }
    );
    if (response.ok) {
      const data = await response.text();
      alert(data);
    } else {
      const errorData = await response.text();
      alert(errorData);
    }
  } catch (error) {
    console.log(error);
    alert("Error de red:", error);
  }
};

export const accountUpdate = async (
  verificarExpiracionToken,
  navigate,
  tuToken,
  nombre,
  apellido,
  ciudad,
  correo
) => {
  try {
    if (!verificarExpiracionToken()) {
      navigate("/");
    }
    const response = await fetch(
      "http://localhost:8080/api/v1/PrincipalContent/profile/UpdateUser",
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${tuToken}`,
        },
        body: JSON.stringify({
          name: nombre,
          lastname: apellido,
          city: ciudad,
          email: correo,
        }),
      }
    );
    if (response.ok) {
      const data = await response.text();
      alert(data);
    } else {
      const errorData = await response.text();
      alert(errorData);
    }
  } catch (error) {
    console.log("Error de red:", error);
  }
};

export const accountDelete = async (
  verificarExpiracionToken,
  navigate,
  tuToken,
  contraseña
) => {
  try {
    if (!verificarExpiracionToken()) {
      navigate("/");
    }
    const response = await fetch(
      `http://localhost:8080/api/v1/PrincipalContent/profile/DeleteAccount/${contraseña}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${tuToken}`,
        },
      }
    );
    if (response.ok) {
      const data = await response.text();
      alert(data);
      localStorage.removeItem("token");
      navigate("/");
    } else {
      const errorData = await response.text();
      alert(errorData);
    }
  } catch (error) {
    console.log("Error de red:", error);
  }
};
