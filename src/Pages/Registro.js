import React, { useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/registrate.css';
import {validateText,obtenerTipoUsuario} from '../Configs/FormValidation'
import {validateUser} from '../controller/RegisterController';
import {customMessage,onClose} from '../Configs/MessageViews'
import MessageDialog from '../Components/MessageDialog';

function Registro() {

  const Username=useRef();
  const Password=useRef();
  const navigate=useNavigate();
  const [message, setMessage] = useState('');
  const [title, setTitle] = useState('');
  const [mostrarDialogo, setMostrarDialogo] = useState(false);
  
  //Validamos la entrada del controlador a verificar y en base a los resultados customizamos el cuadro de mensaje
  const validateController = async () =>{
      const result = await validateUser(Username.current.value,Password.current.value,obtenerTipoUsuario);
      customMessage(result,setTitle,setMessage,setMostrarDialogo);
  }

  const handleClick = (event)=>{
    if(validateText(event,'exampleFormControlInput1','exampleFormControlInput2')){
      setMessage('Rellene todos los campos');
      setTitle('¡Fallo!');
      setMostrarDialogo(true);
    }else{
      validateController();
    }
  }
  return (
    <div className='secondColor'>
        <section className='Register Color'>
          <h1 className='title doublecolor'>¿Estás registrado?</h1>
          <h6 className='subtitle doublecolor'>Ingresa con tu cuenta ahora</h6>
          <Link to={"/"}>
            <button type="button" className="btn btn-secondary">Inicia sesión</button>
          </Link>
      </section>

      <div className='container'>
          <section className='auntentication'>
            <h4 className='text-login changecolor'>Regístrate</h4>
            <h5 className='text-account changecolor'>Crea tu cuenta</h5>
            <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label changecolor">Nombre de Usuario</label>
                <input type="text" class="form-control" id="exampleFormControlInput1" ref={Username} required/>
            </div>
            <div class="mb-3">
                <label for="exampleFormControlInput2" class="form-label changecolor">Contraseña</label>
                <input type="password" class="form-control control2" id="exampleFormControlInput2" ref={Password} required/>
            </div>
            <section className='justchecked'>
              <div class="form-check">
                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                <label class="form-check-label" for="flexRadioDefault1">
                  Profesor
                </label>
              </div>
              <div class="form-check">
                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                <label class="form-check-label" for="flexRadioDefault1">
                  Estudiante
                </label>
              </div>
            </section>
            <button type="button" class="btn btn-primary" onClick={(event)=> {handleClick(event)}}>Registrar</button>
          </section>
      </div>
      {mostrarDialogo && <MessageDialog onClose={()=>{
        onClose(title,setMostrarDialogo,navigate,'/registro/continueregister')}} message={message} title={title}/>}
    </div>
  )
}

export default Registro