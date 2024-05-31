import React, { useState, useEffect } from "react";
import {charguedProject} from '../controller/ProjectController'
import verificarExpiracionToken from '../Configs/verificarExpiracionToken '
import {useNavigate} from 'react-router-dom'
import FormProject from '../Components/FormProject'
import {setItem} from '../Configs/searchUserConfig'

function Searchproject({closeForm,paragraph}) {
  const [closeView, setCloseView] = useState(true);
  const [datosProject, setDatosProject] = useState([]);
  const [view, setView] = useState(false);
  const [datos,setDatos] = useState([])
  const navigate=useNavigate();
  const tuToken=localStorage.getItem('token')
  useEffect(() => {
    charguedProject(verificarExpiracionToken, navigate, tuToken, setDatos);
  }, [navigate,tuToken]);
  const toogleOpenForms=(item,view)=>{
    setItem(item,setDatosProject,setView)
    setCloseView(!closeView)
    localStorage.setItem('id_ruta',item.id_ruta)
    if(item==null || item==undefined){
        setView(!view)
        setCloseView(!closeView)
    }
  }
  const toogleCloseForms=(view)=>{
      setView(!view)
      setCloseView(!closeView)
  }

  return (
    <>
         {closeView && <div className='head_search'>
            <section className='header_search'>
                <span className='search_info'>
                    <h1>Búsqueda</h1>
                    <p>{paragraph}</p>
                </span>
                <div className='icon_close'><ion-icon name="close-outline" onClick={()=>{closeForm()}}></ion-icon></div>
            </section>
            <section className="body_search">
                {datos.map((item,index)=>(
                    <span className='result_search' key={index}>
                        <input type="text" disabled className='rendonded_result' value={item.idEstado}/>
                        <input type="text" disabled className='name_result'value={item.titulo}/>
                        <ion-icon name="person-add-outline" onClick={()=>{toogleOpenForms(item)}}></ion-icon>
                    </span>
                ))}
                <h4 className='cancel_search' onClick={()=>{closeForm()}}>Cancelar</h4>
            </section>
        </div>}
        {view &&<FormProject titleForm={'Modificar Proyecto'} textBotom={'Modificar'} datosProject={datosProject} closeForm={()=>{toogleCloseForms(view)}}/>}        
    </>
  )
}

export default Searchproject