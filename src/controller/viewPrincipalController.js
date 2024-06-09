export const chargueAnalitycs = async (
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
      `http://localhost:8080/api/v1/PrincipalContent/analitycs`,
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