import React, { useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/InicioSesion.css';

function InicioSesion() {
    const usernameRef = useRef();
    const passwordRef = useRef();
    const navigate = useNavigate();
    const IniciarSesion= async () => {
      try {
        const response = await fetch('http://localhost:8080/api/v1/auth/authenticate', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            username: usernameRef.current.value,
            password: passwordRef.current.value
          })
        });
    
        console.log(response);
    
        if (response.ok) {
          const data = await response.json();
          localStorage.setItem('token', data.token);
          console.log(data);
          navigate('/principalview');
        }else{
          const errorData = await response.json();
          alert(errorData.token);
        } 
      } catch (error) {
        alert('Contraseña incorrecta', error);
        // Puedes mostrar un mensaje de error al usuario aquí si lo deseas
      }
    };

  //Validar que los campos esten correctos
    const validarFormulario = (event) => {
      var nombreUsuario = document.getElementById('exampleFormControlInput1').value;
      var contraseña = document.getElementById('exampleFormControlInput2').value;
      if (nombreUsuario.trim() === '' || contraseña.trim() === '') {
        alert('Por favor, completa todos los campos.');
        event.preventDefault();
      }
    }
  return (
    <div>
        <div className='container'>
          <section className='auntentication'>
            <h4 className='text-login'>Iniciar Sesión</h4>
            <h5 className='text-account'>Inicia sesión con tu cuenta</h5>
            <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Nombre de Usuario</label>
                <input type="text" class="form-control" id="exampleFormControlInput1" ref={usernameRef} required/>
            </div>
            <div class="mb-3">
                <label for="exampleFormControlInput2" class="form-label">Contraseña</label>
                <input type="password" class="form-control" id="exampleFormControlInput2" ref={passwordRef} required/>
            </div>
            <Link to={"/resetpassword"}>
                <button type="button" class="btn btn-link ">¿Olvidaste tu contraseña?</button>
            </Link>
            <button type="button" class="btn btn-primary" onClick={() => {validarFormulario();IniciarSesion();}}>Iniciar Sesión</button>
          </section>
    </div>

    <section className='Register'>
        <h1 className='title'>¿Aún no estás registrado?</h1>
        <h6 className='subtitle'>Crea tu cuenta</h6>
        <Link to={"/registro"}>
          <button type="button" className="btn btn-secondary">Regístrate Ahora</button>
        </Link>
    </section>
    </div>
  )
}

export default InicioSesion