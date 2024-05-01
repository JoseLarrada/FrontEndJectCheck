import React, { useState, useEffect, useRef } from "react";
import "../styles/formregistro.css";
import { useNavigate } from 'react-router-dom';
import log from "../LogoJ.jpg";
import {validateTextAutentication} from '../Configs/FormValidation'
import {receivedepartment,receiveCities,register} from '../controller/RegisterController'
import {customMessage,onClose} from '../Configs/MessageViews'
import MessageDialog from '../Components/MessageDialog'

function FormRegistro() {
   //Declaracion de variables
  const [departamentos, setDepartamentos] = useState([]);
  const [selectedDepartment, setSelectedDepartment] = useState("");
  const [selectedCity, setselectedCity] = useState("");
  const [ciudades, setCiudades] = useState([]);
  const [message, setMessage] = useState('');
  const [title, setTitle] = useState('');
  const [mostrarDialogo, setMostrarDialogo] = useState(false);
  const names = useRef();
  const lastname = useRef();
  const id = useRef();
  const email = useRef();
  const navigate = useNavigate();

  const validateRegisterController = async ()=>{
    const result= await register(id.current.value,names.current.value,lastname.current.value,email.current.value);
    customMessage(result,setTitle,setMessage,setMostrarDialogo);
  }

  const handleClick = (event)=>{
    if(validateTextAutentication(event,names.current.value,lastname.current.value,id.current.value,email.current.value)){
      setMessage('Rellene todos los campos');
      setTitle('¡Fallo!');
      setMostrarDialogo(true);
    }else{
      validateRegisterController();
    }
  }

  const handleDepartmentChange = (event) => {
    // Obtener el valor actual seleccionado
    const selectedValue = event.target.value;
    setSelectedDepartment(selectedValue);
    receiveCities(selectedValue,setCiudades);
  };
  const handleCityChange = (event) => {
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
            onClick={(event) => {handleClick(event)}}
          >
            Guardar
          </button>
        </section>
      </div>
      {mostrarDialogo && <MessageDialog onClose={()=>{onClose(title,setMostrarDialogo,navigate,'/principalview')}} title={title} message={message}/>}
    </div>
  );
}

export default FormRegistro;
