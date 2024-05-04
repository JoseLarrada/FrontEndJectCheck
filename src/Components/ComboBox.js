import React, { useState, useRef } from "react";
import "../styles/combo.css";
import verificarExpiracionToken from "../Configs/verificarExpiracionToken .js";
import {updatePassword,accountUpdate,accountDelete} from "../controller/ProfileController.js";
import { useNavigate } from "react-router-dom";
import ShowComponent from '../Components/ShowComponent'

function ComboBox() {
  const [mostrarDropdown, setMostrarDropdown] = useState(false);
  const [mostrarCambioContraseña, setMostrarCambioContraseña] = useState(false);
  const [mostrarModificarCuenta, setMostrarModificarCuenta] = useState(false);
  const [mostrarEliminarCuenta, setMostrarEliminarCuenta] = useState(false);

  const toggleDropdown = () => {
    if (
      !mostrarCambioContraseña &&
      !mostrarModificarCuenta &&
      !mostrarEliminarCuenta
    ) {
      setMostrarDropdown(!mostrarDropdown);
    }
  };

  const handleCambioContraseña = () => {
    setMostrarCambioContraseña(true);
    setMostrarModificarCuenta(false);
    setMostrarEliminarCuenta(false);
    setMostrarDropdown(false);
  };

  const handleModificarCuenta = () => {
    setMostrarModificarCuenta(true);
    setMostrarCambioContraseña(false);
    setMostrarEliminarCuenta(false);
    setMostrarDropdown(false);
  };
  const handleEliminarCuenta = () => {
    setMostrarEliminarCuenta(true);
    setMostrarCambioContraseña(false);
    setMostrarModificarCuenta(false);
    setMostrarDropdown(false);
  };
  const handleCancel = () => {
    setMostrarCambioContraseña(false);
    setMostrarModificarCuenta(false);
    setMostrarEliminarCuenta(false);
    setMostrarDropdown(true); // Volver a habilitar el dropdown cuando se cancela
  };

  const handleConfirmarCambioContraseña = () => {
    const contraseñaActual = document.querySelector("#contraseñaActual").value;
    const nuevaContraseña = document.querySelector("#nuevaContraseña").value;
    const confirmarNuevaContraseña = document.querySelector(
      "#confirmarNuevaContraseña"
    ).value;

    if (
      contraseñaActual.trim() === "" ||
      nuevaContraseña.trim() === "" ||
      confirmarNuevaContraseña.trim() === ""
    ) {
      alert("Por favor, completa todos los campos.");
      return;
    }
    console.log("Contraseña cambiada:", nuevaContraseña);
    setMostrarCambioContraseña(false);
    setMostrarDropdown(true);
  };
  const handleGuardarModificarCuenta = () => {
    // Lógica para guardar los datos al actualizar la cuenta...
    console.log("Datos actualizados");
    setMostrarModificarCuenta(false);
    setMostrarDropdown(true);
  };
  const handleConfirmarEliminarCuenta = (inputValue) => {
    setMostrarEliminarCuenta(false);
    setMostrarDropdown(true);
    accountDelete(verificarExpiracionToken, navigate, tuToken, inputValue); // Pasa el valor del input como argumento
  };

  const tuToken = localStorage.getItem("token");
  const Actual = useRef();
  const Nueva = useRef();
  const ConfirmarNueva = useRef();
  const navigate = useNavigate();
  const nombre = useRef();
  const apellido = useRef();
  const ciudad = useRef();
  const correo = useRef();
  const contraseña = useRef();

  return (
    <section>
      <ion-icon name="ellipsis-vertical" onClick={toggleDropdown}></ion-icon>
      {mostrarDropdown && (
        <div className="flex flex-col dropdown">
          <ul className="uls gap-4">
            <li className="icons" onClick={handleCambioContraseña}>
              <ion-icon name="lock-closed"></ion-icon>
              Cambiar contraseña
            </li>
            <li className="icons" onClick={handleModificarCuenta}>
              <ion-icon name="create"></ion-icon>
              Modificar cuenta
            </li>
            <li className="icons" onClick={handleEliminarCuenta}>
              <ion-icon name="close-circle"></ion-icon>
              Eliminar cuenta
            </li>
          </ul>
        </div>
      )}

      {mostrarCambioContraseña && (
        <div className="show-option">
          <div className="combo-pass">
            <h2 className="text-chang">Cambiar Contraseña</h2>
            <label class="comb-word">Contraseña Actual:</label>
            <input
              type="password"
              ref={Actual}
              class="box-combo pass"
              id="contraseñaActual"
            />

            <label class="comb-word">Nueva Contraseña:</label>
            <input
              type="password"
              ref={Nueva}
              class="box-combo passnew"
              id="nuevaContraseña"
            />

            <label class="comb-word">Confirmar Nueva Contraseña:</label>
            <input
              type="password"
              ref={ConfirmarNueva}
              class="box-combo confpass"
              id="confirmarNuevaContraseña"
            />
          </div>
          <button type="button" class="btn btn-confirm" onClick={handleCancel}>
            Cancelar
          </button>
          <button
            type="button"
            class="btn btn-cancel"
            onClick={() => {
              handleConfirmarCambioContraseña();
              updatePassword(
                verificarExpiracionToken,
                tuToken,
                ConfirmarNueva.current.value,
                Nueva.current.value,
                Actual.current.value,
                navigate
              );
            }}
          >
            Confirmar
          </button>
        </div>
      )}

      {mostrarModificarCuenta && (
        <div className="show-large">
          <div className="combo-pass">
            <h2 className="text-chang">Actualizar Datos</h2>
            <label className="comb-word">Nombre:</label>
            <input
              type="text"
              ref={nombre}
              className="box-combo"
              id="nombreModificarCuenta"
            />

            <label className="comb-word">Apellido:</label>
            <input
              type="text"
              ref={apellido}
              className="box-combo"
              id="departamentoModificarCuenta"
            />

            <label className="comb-word">Ciudad de Residencia:</label>
            <input
              type="text"
              ref={ciudad}
              className="box-combo"
              id="ciudadModificarCuenta"
            />

            <label className="comb-word">Correo Electrónico:</label>
            <input
              type="email"
              ref={correo}
              className="box-combo"
              id="correoModificarCuenta"
            />
          </div>
          <button
            type="button"
            className="btn btn-cancel"
            onClick={handleCancel}
          >
            Cancelar
          </button>
          <button
            type="button"
            className="btn btn-confirm"
            onClick={() => {
              handleGuardarModificarCuenta();
              accountUpdate(
                verificarExpiracionToken,
                navigate,
                tuToken,
                nombre.current.value,
                apellido.current.value,
                ciudad.current.value,
                correo.current.value
              );
            }}
          >
            Guardar
          </button>
        </div>
      )}
      {mostrarEliminarCuenta && <ShowComponent title={'Eliminar Cuenta'} descripcion={
              "Esto eliminará el acceso a tu cuenta y cualquier dato asociado a ella Por favor ingresa tu contraseña para confirmar"}
              action={'Contraseña Actual:' } cancel={handleCancel} accept={handleConfirmarEliminarCuenta}/>}
    </section>
  );
}

export default ComboBox;
