import React, { useState, useRef } from 'react'
import '../styles/basicdata.css'
import ConfirmLog from '../Components/ConfirmLog'
import verificarExpiracionToken from '../Configs/verificarExpiracionToken .js'
import {useNavigate} from 'react-router-dom';

function BasicData() {
    const [mostrarConfirmacion, setMostrarConfirmacion] = useState(false);
    //Variables de las cajas de texto
    const names = useRef();
    const id = useRef();
    const email = useRef();
    const lastname = useRef();
    const city = useRef();
    const tuToken = localStorage.getItem('token');
    //Verificacion de token
    const navigate = useNavigate();
        const chargeUserDate = async () => {
            try{
                if(!verificarExpiracionToken()){
                    navigate('/');
                }
                const response = await fetch('http://localhost:8080/api/v1/PrincipalContent/profile', {
                    method: 'GET',
                    headers: {
                      'Content-Type': 'application/json',
                      'Authorization': `Bearer ${tuToken}`
                    }
                  });
                  if (response.ok) {
                    const userData = await response.json();
                    // Actualiza los valores de las cajas de texto con los datos del usuario
                    names.current.value = userData.nombres;
                    id.current.value = userData.id;
                    email.current.value = userData.correo;
                    lastname.current.value = userData.apellidos;
                    city.current.value = userData.ciudad;
                    console.log(userData);
                } else {
                    // Manejar el caso en que la respuesta no sea exitosa
                    console.error('Error al cargar los datos del usuario:', response.statusText);
                }
            } catch (error) {
                console.error('Error de red:', error);
            }
        }


    const ConfirmAction = () => {
        window.location.href = '/';
        localStorage.removeItem('token'); 
        setMostrarConfirmacion(false); 

      };
    
      const CancelAction = () => {
        setMostrarConfirmacion(false);
      };


  return (
    <div>
        <label class="user-label">Perfil</label>
        <div className='Userlogo'>
            <ion-icon name="person-circle-outline"></ion-icon>
            <label class="name-label" onClick={() => {chargeUserDate()}}>Justine Skye</label>
        </div>
        <section class="custom-row">
            <div class="custom-column">
                <div class="mb-3">
                    <label for="nombres" class="form-label">Nombres</label>
                    <input type="text" id="nombres" class="form-control lineborde" ref={names} disabled />
                </div>
                <div class="mb-3">
                    <label for="cedula" class="form-label">Cedula o T.I</label>
                    <input type="text" id="cedula" class="form-control lineborde" ref={id} disabled />
                </div>
                <div class="mb-3">
                    <label for="correo" class="form-label">Correo</label>
                    <input type="text" id="correo" class="form-control lineborde" ref={email} disabled />
                </div>
            </div>
            <div class="custom-column2">
                <div class="mb-3">
                    <label for="departamento" class="form-label">Apellido</label>
                    <input type="text" id="departamento" class="form-control lineborde" ref={lastname} disabled />
                </div>
                <div class="mb-3">
                    <label for="ciudad" class="form-label">Ciudad</label>
                    <input type="text" id="ciudad" class="form-control lineborde" ref={city} disabled />
                </div>
            </div>
        </section>

        {mostrarConfirmacion && (
        <ConfirmLog
          texto="¿Desea cerrar la sesión?"
          onConfirm={ConfirmAction}
          onCancel={CancelAction}
        />
      )}
      <div className='Logout' to='/'>
            <ion-icon name="log-out" onClick={() => setMostrarConfirmacion(true)}></ion-icon>
        </div>
    </div>
    

  )
}

export default BasicData
