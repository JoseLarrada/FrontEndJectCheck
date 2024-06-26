import React, { useState, useRef, useEffect } from "react";
import "../styles/basicdata.css";
import ConfirmLog from "../Components/ConfirmLog";
import verificarExpiracionToken from "../Configs/verificarExpiracionToken .js";
import { useNavigate } from "react-router-dom";
import { chargeUserDate } from "../controller/ProfileController.js";

function BasicData() {
  const [mostrarConfirmacion, setMostrarConfirmacion] = useState(false);
  const [setDatos] = useState([]);
  //Variables de las cajas de texto
  const names = useRef();
  const id = useRef();
  const email = useRef();
  const lastname = useRef();
  const city = useRef();
  const tuToken = localStorage.getItem("token");
  //Verificacion de token
  const navigate = useNavigate();

  const ConfirmAction = () => {
    window.location.href = "/";
    localStorage.removeItem("token");
    localStorage.removeItem("perfil");
    setMostrarConfirmacion(false);
  };

  const CancelAction = () => {
    setMostrarConfirmacion(false);
  };

  useEffect(() => {
    const userDate = async () => {
      try {
        const datos = await chargeUserDate(
          verificarExpiracionToken,
          navigate,
          tuToken
        );
        names.current.value = datos.nombres;
        id.current.value = datos.id;
        email.current.value = datos.correo;
        lastname.current.value = datos.apellidos;
        city.current.value = datos.ciudad;
        setDatos(datos);
      } catch (error) {
        console.error("Error al cargar los datos del usuario:", error);
      }
    };

    userDate();
  }, []);
  return (
    <div>
      <label className="user-label">Perfil</label>
      <div className="Userlogo">
        <ion-icon name="person-circle-outline"></ion-icon>
        <label className="name-label">Justine Skye</label>
      </div>
      <section className="custom-row">
        <div className="custom-column">
          <div className="mb-3">
            <label className="form-label">
              Nombres
            </label>
            <input
              type="text"
              id="nombres"
              className="form-control lineborde"
              ref={names}
              disabled
            />
          </div>
          <div className="mb-3">
            <label className="form-label">
              Cedula o T.I
            </label>
            <input
              type="text"
              id="cedula"
              className="form-control lineborde"
              ref={id}
              disabled
            />
          </div>
          <div className="mb-3">
            <label className="form-label">
              Correo
            </label>
            <input
              type="text"
              id="correo"
              className="form-control lineborde"
              ref={email}
              disabled
            />
          </div>
        </div>
        <div className="custom-column2">
          <div className="mb-3">
            <label className="form-label">
              Apellido
            </label>
            <input
              type="text"
              id="departamento"
              className="form-control lineborde"
              ref={lastname}
              disabled
            />
          </div>
          <div className="mb-3">
            <label class="form-label">
              Ciudad
            </label>
            <input
              type="text"
              id="ciudad"
              className="form-control lineborde"
              ref={city}
              disabled
            />
          </div>
        </div>
      </section>

      {mostrarConfirmacion && (
        <ConfirmLog
          texto="¿Desea cerrar la sesión?"
          onConfirm={ConfirmAction}
          onCancel={CancelAction}
        />
      )}
      <div className="Logout" to="/">
        <ion-icon
          name="log-out"
          onClick={() => setMostrarConfirmacion(true)}
        ></ion-icon>
      </div>
    </div>
  );
}

export default BasicData;
