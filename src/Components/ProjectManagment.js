import React, { useState, useRef } from 'react'
import '../styles/managment.css'
import verificarExpiracionToken from '../Configs/verificarExpiracionToken .js'
import {useNavigate} from 'react-router-dom';
import {findTeacher,findStudent,addProject,updateProject} from '../controller/ProjectController.js'

function ProjectManagment({NameOption,Option}) {
  const titulo=useRef();
  const descripcion=useRef();
  const profesor=useRef();
  const integrante1=useRef();
  const integrante2=useRef();
  const navigate=useNavigate();
  const tuToken = localStorage.getItem('token');

  return (
    <div className='projectM'>
        <div className='project-title'>
          <h6 className='decoratetext'>{NameOption}</h6>
        </div>
        <div className='textbox'>
          <input class="form-control reset espaciado" ref={titulo} id="exampleFormControlInput1"/>
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
          <a className='search' href="#" onClick={()=>{findTeacher(profesor.current.value,tuToken,verificarExpiracionToken,navigate)}}><ion-icon name="search"></ion-icon></a>
          <a className='search' href="#" onClick={()=>{findStudent(integrante1.current.value,tuToken,verificarExpiracionToken,navigate)}}><ion-icon name="search"></ion-icon></a>     
          <a className='search' href="#" onClick={()=>{findStudent(integrante2.current.value,tuToken,verificarExpiracionToken,navigate)}}><ion-icon name="search"></ion-icon></a>     
        </div>
        <button type="button" class="btn btn-primary sendject" 
        onClick={()=>{Option === 'Enviar solicitud' ? addProject(titulo.current.value,profesor.current.value,
        integrante2.current.value,integrante1.current.value,descripcion.current.value,tuToken) : updateProject(
        titulo.current.value,profesor.current.value,integrante2.current.value,integrante1.current.value,descripcion.current.value,tuToken)}}>
            {Option}
        </button>
    </div>
  )
}

export default ProjectManagment
