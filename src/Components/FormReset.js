import React, { useRef }  from 'react'
import '../styles/formreset.css'
import resetPassword from '../controller/ResetPasswordController'


function FormReset() {
    const email=useRef();
    const password=useRef();
    const confirmpassword=useRef();
    const id=useRef();

  return (
        <div className='cont'>
            <section className='form position'>
                <div className='posicionamiento'>
                    <div className='handling'>
                        <h2 className='titulo'>Restablecer contraseña</h2>
                        <h5 className='subtitulo'>Ingrese los siguientes datos para <br/>
                        restablecer su contraseña.</h5>
                    </div>
                    <input type="email" class="form-control reset espaciado" id="exampleFormControlInput1" placeholder="Ingrese el correo electronico" ref={email}/>
                    <input className="form-control reset espaciado" type="text" placeholder="Ingrese su nueva contraseña" aria-label="default input example" ref={password}/>
                    <input className="form-control reset espaciado" type="text" placeholder=" Confirme la contraseña" aria-label="default input example" ref={confirmpassword}/>
                    <input className="form-control reset espaciado" type="text" placeholder="Ingrese su cedula" aria-label="default input example" ref={id}/>
                </div>
                <button type="button" className="btn btn-primary btnhandler" 
                onClick={()=> resetPassword(email.current.value,password.current.value,confirmpassword.current.value,id.current.value)}>Restablecer</button>
            </section>
        </div>
  )
}

export default FormReset