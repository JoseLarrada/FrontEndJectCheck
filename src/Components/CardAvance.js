import React, { useState, useEffect } from 'react'
import Card from '../Components/Card'
import '../styles/Card.css';
import verificarExpiracionToken from '../Configs/verificarExpiracionToken .js'
import {useNavigate} from 'react-router-dom';
function CardAvance() {
    const tuToken = localStorage.getItem('token');
    const navigate= useNavigate();
    const [avances, SetAvances] = useState([]);
    const CargarPersonalizado2 = async () => {
        try {
          if (!verificarExpiracionToken()) {
            navigate('/');
          }
          const response = await fetch(`http://localhost:8080/api/v1/PrincipalContent/chargueadvances/${localStorage.getItem('id_ruta')}`, {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${tuToken}`
            }
          });
      
          if (response.ok) {
            const data = await response.json();
            console.log('Datos obtenidos:', data);
            SetAvances(data);
          } else {
            console.error('Error al cargar los datos:', response.statusText);
          }
        } catch (error) {
          console.error('Error de red:', error);
        }
      };
      useEffect(() => {
        CargarPersonalizado2();
      }, []);
      const handleClick = (item) => {
        localStorage.setItem('id_ruta', item.id_ruta);
      }
  return (
        <div className="container">
            <div className="row">
                {avances.map((item, index) => (
                    <div key={index} className="col-md-4" onClick={() => {handleClick(item)}}>
                        <Card Title={item.titulo} teacher={item.id_ruta} page={"entregasPage"} owner={item.fecha_creacion}/>
                    </div>
                ))}
            </div>
        </div>
  )
}

export default CardAvance