import {React,useState,useEffect} from 'react'
import '../styles/inforProject.css'
import {getProjectById} from '../controller/ProjectController'

function ViewInfoProject() {
    const [response,SetResponse] = useState([]);
    const [members,setMembers] = useState([]);

  return (
    <div className='viewInfo'>
        <h1 className='principal_title'>Informacion del proyecto</h1>
        <div className="bodyInfo">
            <section className='principal_information'>
                <span className='info_position'>
                    <label htmlFor="">Titulo de proyecto</label>
                    <input type="text" className='input_desing'/>
                </span>
                <span className='info_position'>
                    <label htmlFor="">Categoria</label>
                    <input type="text" className='input_desing'/>
                </span>
            </section>
            <section className='principal_information'>
                <span className='info_position'>
                    <label htmlFor="">Descripcion</label>
                    <textarea name="" id="" className='input_desing inp_desc'></textarea>
                </span>
                <span className='info_position'>
                    <label htmlFor="" className='inp_sta'>Estado</label>
                    <input type="text" className='input_desing inp_sta'/>
                </span>
            </section>
            <section className='third_information'>
                <label htmlFor="">Integrantes</label>
                <span>
                    <input className='redondedInput' type="text" value={'JL'} disabled/>
                    <input className='redondedInput' type="text" value={'LB'} disabled/>
                </span>
            </section>
        </div>
        <span className='buttons'>
            <button className='buttons_desing accept'>Aceptar</button>
            <button className='buttons_desing reject'>Rechazar</button>
        </span>
    </div>
  )
}

export default ViewInfoProject