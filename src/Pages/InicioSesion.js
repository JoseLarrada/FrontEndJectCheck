import React, { useRef, useState  } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/InicioSesion.css';
import login from '../controller/LoginController'
import {validateText} from '../Configs/FormValidation'
import {customMessage, onClose} from '../Configs/MessageViews'
import MessageDialog from '../Components/MessageDialog';
import {handleChange} from '../Configs/data'

function InicioSesion() {
    const usernameRef = useRef();
    const passwordRef = useRef();
    const navigate = useNavigate();
    const [message, setMessage] = useState('');
    const [title, setTitle] = useState('');
    const [mostrarDialogo, setMostrarDialogo] = useState(false);

    const validateControlerLogin = async ()=>{
      const result = await login(usernameRef.current.value, passwordRef.current.value);
      customMessage(result,setTitle,setMessage,setMostrarDialogo);
    }

    const handleClick = async (event) => {
        if(validateText(event, 'exampleFormControlInput1', 'exampleFormControlInput2')){
          setMessage('Rellene todos los campos');
          setTitle('¡Fallo!');
          setMostrarDialogo(true);
        }else{
          validateControlerLogin();
        }
    };
  return (
    <div>
        <div className='container'>
          <section className='auntentication'>
            <h4 className='text-login'>Iniciar Sesión</h4>
            <h5 className='text-account'>Inicia sesión con tu cuenta</h5>
            <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Nombre de Usuario</label>
                <input onChange={()=>{handleChange(usernameRef,15,setMessage,setTitle,setMostrarDialogo)}} type="text" class="form-control" id="exampleFormControlInput1" ref={usernameRef} required/>
            </div>
            <div class="mb-3">
                <label for="exampleFormControlInput2" class="form-label">Contraseña</label>
                <input onChange={()=>{handleChange(passwordRef,20,setMessage,setTitle,setMostrarDialogo)}} type="password" class="form-control" id="exampleFormControlInput2" ref={passwordRef} required/>
            </div>
            <Link to={"/resetpassword"}>
                <button type="button" class="btn btn-link ">¿Olvidaste tu contraseña?</button>
            </Link>
            <button type="button" class="btn btn-primary" onClick={(event) => {handleClick(event)}}>Iniciar Sesión</button>
          </section>
    </div>

    <section className='Register'>
        <h1 className='title'>¿Aún no estás registrado?</h1>
        <h6 className='subtitle'>Crea tu cuenta</h6>
        <Link to={"/registro"}>
          <button type="button" className="btn btn-secondary">Regístrate Ahora</button>
        </Link>
    </section>
    {mostrarDialogo && <MessageDialog onClose={()=>{
        onClose(title,setMostrarDialogo,navigate,'/principalview')}} message={message} title={title}/>}
    </div>
  )
}

export default InicioSesion