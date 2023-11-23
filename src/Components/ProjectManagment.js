import React, { useState, useRef } from 'react'
import '../styles/managment.css'
import verificarExpiracionToken from '../Configs/verificarExpiracionToken .js'
import {useNavigate} from 'react-router-dom';


function ProjectManagment({NameOption,Option}) {
  const Titulo=useRef();
  const descripcion=useRef();
  const profesor=useRef();
  const integrante1=useRef();
  const integrante2=useRef();
  const navigate=useNavigate();
  const tuToken = localStorage.getItem('token');
  //Buscar Profesor 
  const FindTeacher = async () => {
    try{
        if(!verificarExpiracionToken()){
            navigate('/');
        }
        const response = await fetch(`http://localhost:8080/api/v1/auth/GetTeacher/${profesor.current.value}`, {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${tuToken}`
            }
          });
          console.log(response);
          if (response.ok) {
            const message = await response.text();
            alert(message);
        } else {
          const Badmessage = await response.text();
            alert("Docente no encontrado");
        }
    } catch (error) {
        console.error('Error de red:');
    }
  }

  //Buscar estudiante
  const FindStudent = async (estudiante) => {
    try{
        if(!verificarExpiracionToken()){
            navigate('/');
        }
        const response = await fetch(`http://localhost:8080/api/v1/auth/GetStudent/${estudiante}`, {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${tuToken}`
            }
          });
          console.log(response);
          if (response.ok) {
            const message = await response.text();
            alert(message);
        } else {
          const Badmessage = await response.text();
            alert("Estudiante no encontrado");
        }
    } catch (error) {
        console.error('Error de red:');
    }
  }

  //Llenar Formulario
  const AddProject= async () => {
    try {
      const response = await fetch('http://localhost:8080/api/v1/PrincipalContent/CreateRoute', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${tuToken}`
        },
        body: JSON.stringify({
          nameRoute: Titulo.current.value,
          teacher: profesor.current.value,
          id_Member2: integrante2.current.value,
          id_Member: integrante1.current.value,
          description: descripcion.current.value
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
    }
  };

// Modificar 

const UpdateProject= async () => {
  try {
    const response = await fetch('http://localhost:8080/api/v1/PrincipalContent/UpdateRoute', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${tuToken}`
      },
      body: JSON.stringify({
        id:localStorage.getItem('id_ruta'),
        nameRoute: Titulo.current.value,
        teacher: profesor.current.value,
        id_Member2: integrante2.current.value,
        id_Member: integrante1.current.value,
        description: descripcion.current.value
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
  }
};



  return (
    <div className='projectM'>
        <div className='project-title'>
          <h6 className='decoratetext'>{NameOption}</h6>
        </div>
        <div className='textbox'>
          <input class="form-control reset espaciado" ref={Titulo} id="exampleFormControlInput1"/>
          <input class="form-control reset espaciado" ref={descripcion} type="text"  aria-label="default input example"/>
          <input class="form-control reset espaciado" ref={profesor} type="text"  aria-label="default input example"/>
          <input class="form-control reset espaciado" ref={integrante1} type="text"  aria-label="default input example"/>
          <input class="form-control reset espaciado" ref={integrante2} type="text"  aria-label="default input example"/>
        </div>
        <div className='labels'>
          <label for="exampleFormControlInput1" class="form-label reg">Nombre del proyecto</label>
          <label for="exampleFormControlInput1" class="form-label reg">Descripción</label>
          <label for="exampleFormControlInput1" class="form-label reg">Asignar profesor</label>
          <div class="form-check reg">
            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
            <label class="form-check-label" for="flexCheckDefault">
              Integrante 1
            </label>
          </div>
          <label for="exampleFormControlInput1" class="form-label reg">Integrante 2</label>
        </div>
        <div className='buttons'>
          <a className='search' href="#" onClick={FindTeacher}><ion-icon name="search"></ion-icon></a>
          <a className='search' href="#" onClick={()=>{FindStudent(integrante1.current.value)}}><ion-icon name="search"></ion-icon></a>     
          <a className='search' href="#" onClick={()=>{FindStudent(integrante2.current.value)}}><ion-icon name="search"></ion-icon></a>     
        </div>
        <button type="button" class="btn btn-primary sendject" onClick={Option === 'Enviar Solicitud' ? AddProject : UpdateProject}>
            {Option}
        </button>
    </div>
  )
}

export default ProjectManagment
