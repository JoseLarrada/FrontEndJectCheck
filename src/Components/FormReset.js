import React, { useRef }  from 'react'
import '../styles/formreset.css'
function FormReset() {
    const email=useRef();
    const password=useRef();
    const confirmpassword=useRef();
    const id=useRef();

    const ResetPassword= async () => {
        try {
          const response = await fetch('http://localhost:8080/api/v1/auth/recoverypassword', {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              email: email.current.value,
              password: password.current.value,
              confirmPassword: confirmpassword.current.value,
              id: id.current.value
            })
          });
      
          console.log(response);
      
          if (response.ok) {
            const data = await response.text();
            alert(data);
          }else{
            const errorData = await response.text();
            alert(errorData);
          } 
        } catch (error) {
          alert('Error de red:', error);
          // Puedes mostrar un mensaje de error al usuario aquí si lo deseas
        }
      };


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
                <button type="button" className="btn btn-primary btnhandler" onClick={()=> ResetPassword()}>Restablecer</button>
            </section>
        </div>
  )
}

export default FormReset