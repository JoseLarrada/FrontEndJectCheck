export const receiveFacultly = async (setFacultly,verificarExpiracionToken,navigate,tuToken) => {
    try {
        if (!verificarExpiracionToken()) {
        navigate("/");
        }
        const response = await fetch(
            "http://localhost:8080/api/v1/investigationArea/facultly",
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
            setFacultly(userData);
        } else {
            console.error("Error al cargar los datos:", response.statusText);
        }
        } catch (error) {
        console.error("Error de red:", error);
    }
};

//Traer las carreras
export const receiveAreas = async (setAreas,id,verificarExpiracionToken,navigate,tuToken) => {
    try {
        if (!verificarExpiracionToken()) {
        navigate("/");
        }
        const response = await fetch(
            `http://localhost:8080/api/v1/investigationArea/areas/${id}`,
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
            setAreas(userData);
            console.log(userData)
        } else {
            console.error("Error al cargar los datos:", response.statusText);
        }
        } catch (error) {
        console.error("Error de red:", error);
    }
};