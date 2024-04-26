import React, { useState, useEffect, useRef } from "react";
import "../styles/formregistro.css";
import { useNavigate } from 'react-router-dom';
import log from "../LogoJ.jpg";
import {receivedepartment,receiveCities,register} from '../controller/RegisterController'



function FormRegistro() {

  const [departamentos, setDepartamentos] = useState([]);
  const [selectedDepartment, setSelectedDepartment] = useState("");
  const [selectedCity, setselectedCity] = useState("");
  const [ciudades, setCiudades] = useState([]);
  //Declaracion de variables
  const names = useRef();
  const lastname = useRef();
  const id = useRef();
  const email = useRef();
  const navigate = useNavigate();

  const handleDepartmentChange = (event) => {
    // Obtener el valor actual seleccionado
    const selectedValue = event.target.value;
    setSelectedDepartment(selectedValue);
    receiveCities(selectedValue,setCiudades);
  };
  const handleCityChange = (event) => {
    // Obtener el valor actual seleccionado
    const selectedValuecity = event.target.value;
    setselectedCity(selectedValuecity);
    localStorage.setItem("city", selectedValuecity);
  };
  useEffect(() => {
    receivedepartment(setDepartamentos);
    receiveCities("",setCiudades);
  }, []);
  
  return (
    <div class="container" className="fondo">
      <div class="background">
        <section className="inputs">
          <div className="move">
            <img className="logo" src={log} alt="" />
          </div>
          <input
            type="text"
            class="form-control direccion"
            id="validationDefault01"
            ref={names}
            placeholder="Nombres"
            required
          />
          <input
            type="text"
            class="form-control direccion"
            id="validationDefault02"
            ref={lastname}
            placeholder="Apellido"
            required
          />
          <input
            type="text"
            class="form-control direccion"
            id="validationDefault03"
            ref={id}
            placeholder="Cedula o T.I"
            required
          />

          <select
            class="form-select direccion"
            id="validationDefault04"
            onChange={handleDepartmentChange}
            value={selectedDepartment}
            required
          >
            <option selected disabled value="">
              Departamento...
            </option>
            {departamentos.map((departamento, index) => (
              <option key={index}>{departamento}</option>
            ))}
          </select>
          <select
            class="form-select direccion"
            id="validationDefault05"
            onChange={handleCityChange}
            value={selectedCity}
            required
          >
            <option selected disabled value="">
              Ciudad de residencia...
            </option>
            {ciudades.map((ciudad, index) => (
              <option key={index}>{ciudad}</option>
            ))}
          </select>
          <input
            type="email"
            placeholder="Correo"
            class="form-control direccion correo"
            id="validationDefault04"
            ref={email}
            required
          />
          <button
            type="button"
            class="btn btn-primary movimientos"
            onClick={() => register(id.current.value,names.current.value,lastname.current.value,email.current.value,navigate)}
          >
            Guardar
          </button>
        </section>
      </div>
    </div>
  );
}

export default FormRegistro;
