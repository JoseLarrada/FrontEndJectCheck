import React, { useRef, useState }  from 'react'
import '../styles/formreset.css'
import resetPassword from '../controller/ResetPasswordController'
import {validateTextAutentication,cleanTextBox} from '../Configs/FormValidation'
import MessageDialog from '../Components/MessageDialog'
import {customMessage, onCloseWithOutNavigate} from '../Configs/MessageViews'
import {handleChange,handleNumberInputChange} from '../Configs/FormValidation'

function FormReset() {
    const email=useRef();
    const password=useRef();
    const confirmpassword=useRef();
    const id=useRef();
    const [message, setMessage] = useState('');
    const [title, setTitle] = useState('');
    const [mostrarDialogo, setMostrarDialogo] = useState(false);

    const validateControllerReset = async () =>{
        const result = await resetPassword(email.current.value,password.current.value,confirmpassword.current.value,id.current.value);
        customMessage(result,setTitle,setMessage,setMostrarDialogo);
    }
    const clean = () =>{
        cleanTextBox(email,password,confirmpassword,id)
    }
    const handleClick = (event)=>{
        if(validateTextAutentication(event, email.current.value, password.current.value, 
            confirmpassword.current.value, id.current.value)){
            setMessage('Rellene todos los campos');
            setTitle('¡Fallo!');
            setMostrarDialogo(true);
        }else{
            validateControllerReset();
        }
    }

  return (
        <div className='cont'>
            <section className='form position'>
                <div className='posicionamiento'>
                    <div className='handling'>
                        <h2 className='titulo'>Restablecer contraseña</h2>
                        <h5 className='subtitulo'>Ingrese los siguientes datos para <br/>
                        restablecer su contraseña.</h5>
                    </div>
                    <input  type="email" class="form-control reset espaciado" id="exampleFormControlInput1" placeholder="Ingrese el correo electronico" 
                    ref={email} onChange={()=>{handleChange(email,40,setMessage,setTitle,setMostrarDialogo)}}/>
                    <input className="form-control reset espaciado" type="text" placeholder="Ingrese su nueva contraseña" aria-label="default input example" 
                    ref={password} onChange={()=>{handleChange(password,70,setMessage,setTitle,setMostrarDialogo)}}/>
                    <input className="form-control reset espaciado" type="text" placeholder=" Confirme la contraseña" aria-label="default input example" 
                    ref={confirmpassword} onChange={()=>{handleChange(confirmpassword,70,setMessage,setTitle,setMostrarDialogo)}}/>
                    <input className="form-control reset espaciado" type="text" placeholder="Ingrese su cedula" aria-label="default input example" 
                    ref={id} onChange={()=>{handleChange(id,10,setMessage,setTitle,setMostrarDialogo);handleNumberInputChange(id,setMessage,setTitle,setMostrarDialogo)}}/>
                </div>
                <button type="button" className="btn btn-primary btnhandler" 
                onClick={(event)=> {handleClick(event)}}>Restablecer</button>
            </section>
            {mostrarDialogo && <MessageDialog onClose={()=>{
                onCloseWithOutNavigate(title,setMostrarDialogo,clean)}} 
                title={title} message={message}/>}
        </div>
  )
}

export default FormReset