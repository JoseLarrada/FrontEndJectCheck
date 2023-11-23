import React, { useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/registrate.css';


function Registro() {

  const Username=useRef();
  const Password=useRef();
  const navigate=useNavigate();

  const validateUser = async () => {
    try{
        const response = await fetch('http://localhost:8080/api/v1/auth/getUser', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              username: Username.current.value,
              password: Password.current.value
            })
          });
          if (response.ok) {
            const userData = await response.text();
            navigate('/registro/continueregister')
            localStorage.setItem('username',Username.current.value);
            localStorage.setItem('password',Password.current.value);
            console.log(userData);
        } else {
            const DataError=await response.text()
            alert(DataError);
        }
    } catch (error) {
        console.error('Error de red:', error);
    }
}

  const validarFormulario = (event) => {
    var nombreUsuario = document.getElementById('exampleFormControlInput1').value;
    var contraseña = document.getElementById('exampleFormControlInput2').value;
    if (nombreUsuario.trim() === '' || contraseña.trim() === '') {
      alert('Por favor, completa todos los campos.');
      event.preventDefault();
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
            <button type="button" class="btn btn-primary" onClick={()=> {validarFormulario();validateUser()}}>Registrar</button>
          </section>
    </div>
    </div>
  )
}

export default Registro