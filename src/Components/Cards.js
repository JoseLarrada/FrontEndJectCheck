import React, { useState, useEffect } from 'react'
import Card from '../Components/Card'
import '../styles/Card.css';
import verificarExpiracionToken from '../Configs/verificarExpiracionToken .js'
import {useNavigate} from 'react-router-dom';

function Cards() {
    const tuToken = localStorage.getItem('token');
    const navigate= useNavigate();
    const [datos, setDatos] = useState([]);

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
            console.log(data);
          }else{
            const errorData = await response.json();
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

    function getnamestate(idestado){
       if(idestado==5){
        return "Pendiente"
       }else if(idestado==1){
        return "En proceso"
       }else if(idestado==2){
        return "Completado"
       }
    }


    return (
        <div className="container">
            <div className="row">
                {datos.map((item, index) => (
                    <div key={index} className="col-md-4" onClick={() => {handleClick(item)}}>
                        <Card Title={item.nombre} teacher={item.id_docente} page={"newPage"} owner={getnamestate(item.id_estado)}/>
                    </div>
                ))}
                
            </div>
        </div>
    )
}

export default Cards