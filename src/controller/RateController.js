//Calificar Entrega
export const ratePersitence = async (verificarExpiracionToken,navigate,tuToken,valueRate,comment,url,method) => {
  try {
    if (!verificarExpiracionToken()) {
      navigate("/");
    }
    const response = await fetch(
      url,
      {
        method: method,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${tuToken}`,
        },
        body: JSON.stringify({
          rateValue: valueRate,
          comment: comment,
          idAssignment: localStorage.getItem("id_Entrega")
        }),
      }
    );
    console.log(response);
    if (response.ok) {
      const userData = await response.text();
      return {success: true, userData}
    } else {
      const dataError = await response.text();
      return {success: false, dataError}
    }
  } catch (error) {
    console.log(error.message)
    return {success: false, error}
  }
};

//Obtener Dato de entregas
export const charguedRate = async (
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
      `http://localhost:8080/api/v1/rate/getRate/${localStorage.getItem('id_Entrega')}`,
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
