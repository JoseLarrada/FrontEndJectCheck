import React, { useState, useEffect } from "react";
import verificarExpiracionToken from '../Configs/verificarExpiracionToken '
import {useNavigate} from 'react-router-dom'
import {renderFuntion,toogleOpenForms} from '../Configs/searchProjectConfig'
import {setItem} from '../Configs/searchUserConfig'

function Searchproject({closeForm,paragraph,charguedItem,title,fuctionDelete}) {
  const [closeView, setCloseView] = useState(true);
  const [datosProject, setDatosProject] = useState([]);
  const [view, setView] = useState(false);
  const [datos,setDatos] = useState([])
  const navigate=useNavigate();
  const tuToken=localStorage.getItem('token')
  useEffect(() => {
    charguedItem(verificarExpiracionToken, navigate, tuToken, setDatos);
  }, [navigate,tuToken]);
  const toogleCloseForms=(view)=>{
      setView(!view)
      setCloseView(!closeView)
  }

  return (
    <>
         {closeView && <div className='head_search'>
            <section className='header_search'>
                <span className='search_info'>
                    <h1>{title}</h1>
                    <p>{paragraph}</p>
                </span>
                <div className='icon_close'><ion-icon name="close-outline" onClick={()=>{closeForm()}}></ion-icon></div>
            </section>
            <section className="body_search">
                {datos.map((item,index)=>(
                    <span className='result_search' key={index}>
                        <input type="text" disabled className='rendonded_result' value={item.idEstado}/>
                        <input type="text" disabled className='name_result'value={item.titulo}/>
                        <ion-icon name="add-circle-outline" onClick={()=>{toogleOpenForms(item,title,setItem,setCloseView,setDatosProject,setView,closeView)}}></ion-icon>
                    </span>
                ))}
                <h4 className='cancel_search' onClick={()=>{closeForm()}}>Cancelar</h4>
            </section>
        </div>}
        {view && renderFuntion(title,datosProject,toogleCloseForms,view,fuctionDelete)}        
    </>
  )
}

export default Searchproject