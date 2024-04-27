export const uploadFile = async (verificarExpiracionToken,navigate,file,tuToken) => {
  try {
    if (!verificarExpiracionToken()) {
      navigate("/");
    }
    const formData = new FormData();
    formData.append("file", file);
    const response = await fetch("http://localhost:8080/api/v1/assets/Upload", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${tuToken}`,
      },
      body: formData,
    });

    if (response.ok) {
      const key = await response.text();
      alert(key);
    } else {
      const errorData = await response.json();
      alert(errorData.token);
    }
  } catch (error) {
    alert("Error de red:", error);
    console.log(error)
  }
};

export const saveAssignment = async (verificarExpiracionToken,navigate,tuToken,annexes,file,comment) => {
  try {
    if (!verificarExpiracionToken()) {
      navigate("/");
    }
    const response = await fetch(
      "http://localhost:8080/api/v1/PrincipalContent/addAssignment",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${tuToken}`,
        },
        body: JSON.stringify({
          id_advance: localStorage.getItem("id_avance"),
          annexes: annexes,
          file: file,
          comment: comment
        }),
      }
    );
    console.log(response);
    if (response.ok) {
      const data = await response.text();
      alert(data);
    } else {
      const errorData = await response.text();
      alert(errorData.token);
    }
  } catch (error) {
    alert("Error de red:", error);
  }
};
