import React, { useState, useEffect } from "react";
import verificarExpiracionToken from '../Configs/verificarExpiracionToken '
import {useNavigate} from 'react-router-dom'
import {renderFuntion,toogleOpenForms} from '../Configs/searchProjectConfig'
import {setItem} from '../Configs/searchUserConfig'
import MessageDialog from '../Components/MessageDialog.js'
import {customMessage,onCloseWithOutNavigate} from '../Configs/MessageViews'
import {generateCustomReport} from '../controller/ReportController.js'

function Searchproject({closeForm,paragraph,charguedItem,title,fuctionDelete}) {
  const [closeView, setCloseView] = useState(true);
  const [datosProject, setDatosProject] = useState([]);
  const [view, setView] = useState(false);
  const [datos,setDatos] = useState([])
  const [titleDialog, setTitleDialog] = useState('');
  const [message, setMessage] = useState('');
  const [mostrarDialogo,setMostrarDialogo] = useState(false)
  const navigate=useNavigate();
  const tuToken=localStorage.getItem('token')
  useEffect(() => {
    charguedItem(verificarExpiracionToken, navigate, tuToken, setDatos);
  }, [navigate,tuToken]);
  const toogleCloseForms=(view)=>{
      setView(!view)
      setCloseView(!closeView)
  }
  const handleClick=async (item)=>{
    if (title==='Informes Personalizados'){
        localStorage.setItem('id_ruta',item.id_ruta);
        const result = await generateCustomReport(verificarExpiracionToken,navigate,tuToken);
        customMessage(result,setTitleDialog,setMessage,setMostrarDialogo);
    }else{
        toogleOpenForms(item,title,setItem,setCloseView,setDatosProject,setView,closeView)
    }
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
                        <ion-icon name="add-circle-outline" onClick={()=>{handleClick(item)}}></ion-icon>
                    </span>
                ))}
                <h4 className='cancel_search' onClick={()=>{closeForm()}}>Cancelar</h4>
            </section>
            {mostrarDialogo && <MessageDialog onClose={()=>{onCloseWithOutNavigate(titleDialog,setMostrarDialogo,()=>{})}} title={titleDialog} message={message}/>}
        </div>}
        {view && renderFuntion(title,datosProject,toogleCloseForms,view,fuctionDelete)}        
    </>
  )
}

export default Searchproject