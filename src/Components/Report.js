import React, { useEffect, useState } from 'react';
import '../styles/repor.css'
import {useNavigate} from 'react-router-dom'
import verificarExpiracionToken from '../Configs/verificarExpiracionToken .js'

function Report() {
  const tuToken = localStorage.getItem('token');
  const navigate= useNavigate();
  const [datos, setDatos] = useState([]);
  const GuardarGeneral= async () => {
    try {
      if(!verificarExpiracionToken()){
        navigate('/');
      }
      const response = await fetch('http://localhost:8080/api/v1/PrincipalContent/generate/document', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${tuToken}`
        }
      });

      console.log(response);
      if (response.ok) {
        const data = await response.text();
        alert(data);
      }else{
        const errorData = await response.text();
        alert(errorData.token);
      } 
    } catch (error) {
      alert('Error de red:', error);
    }
  };

  //Informe Personalizado
  const GuardarPersonalizado= async () => {
    try {
      if(!verificarExpiracionToken()){
        navigate('/');
      }
      const url = `http://localhost:8080/api/v1/PrincipalContent/Generate/CustomDocument/${localStorage.getItem('id_ruta')}`;
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${tuToken}`
        }
      });
      alert(localStorage.getItem('id_ruta'));
      console.log(response);
      if (response.ok) {
        const data = await response.text();
        alert(data);
      }else{
        const errorData = await response.text();
        alert(errorData.token);
      } 
    } catch (error) {
      alert('Error de red:', error);
    }
  };

  const CargarPersonalizado= async () => {
    try {
      if(!verificarExpiracionToken()){
        navigate('/');
      }
      const response = await fetch('http://localhost:8080/api/v1/PrincipalContent', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${tuToken}`
        }
      });
      console.log(response);
      if (response.ok) {
        const data = await response.json();
        setDatos(data);
      }else{
        const errorData = await response.text();
        alert(errorData);
      } 
    } catch (error) {
      alert('Error de red:', error);
    }
  };
  useEffect(() => {
    CargarPersonalizado();
  }, []);

  const handleClick = (item) => {
    localStorage.setItem('id_ruta', item.id_ruta);
  }

  return (
    <section className='control sidecontrol'>
         <div className="nav-link active person ico control-move">
            <ion-icon name="document"></ion-icon>
            <label>Personalizado</label>
        </div>
        <div className="nav-link active person ico control-move" to="/" >
            <ion-icon onClick={GuardarGeneral} name="documents"></ion-icon>
            <label>General</label>
        </div>
        <div class="list-group">
          <button type="button" class="list-group-item list-group-item-action active" aria-current="true">
            Proyectos
          </button>
          {datos.map((item, index) => (
          <button key={index} type="button" class="list-group-item list-group-item-action" onClick={() => {handleClick(item);GuardarPersonalizado()}}>
            {item.id_ruta}
          </button>
        ))}
          <button type="button" class="list-group-item list-group-item-action" disabled>A disabled button item</button>
        </div>
    </section>
  )
}

export default Report
