import React, { useState, useEffect,useRef } from "react";
import {onCloseWithOutNavigate} from '../Configs/MessageViews'
import MessageDialog from '../Components/MessageDialog'
import {setTextItem,validateForm} from '../Configs/searchUserConfig'
import '../styles/searchUser.css'


function SearchUser({findUser,paragraph,closeForm,setText}) {
    const [closeView, setCloseView] = useState(true);
    const [datos, setDatos] =useState([]);
    const [message, setMessage] = useState('');
    const [title, setTitle] = useState('');
    const [mostrarDialogo, setMostrarDialogo] = useState(false);
    const nombre=useRef();
    const handleSearchClick = () => {
        const name = nombre.current.value;
        if(!validateForm(name,setMessage,setTitle,setMostrarDialogo)){
            findUser(name, setDatos);
        }
    };
  return (
    <>
        {closeView && <div className='head_search'>
            <section className='header_search'>
                <span className='search_info'>
                    <h1>Búsqueda</h1>
                    <p>{paragraph}</p>
                </span>
                <div className='icon_close'><ion-icon name="close-outline" onClick={()=>{closeForm();setText("")}}></ion-icon></div>
            </section>
            <section className="body_search">
                <span className='search_bar'>
                    <ion-icon name="search-outline" onClick={handleSearchClick}></ion-icon>
                    <input type="text" className='' ref={nombre}/>
                </span>
                {datos.map((item,index)=>(
                    <span className='result_search' key={index}>
                        <input type="text" disabled className='rendonded_result' value={item.initial}/>
                        <input type="text" disabled className='name_result'value={item.fullName}/>
                        <ion-icon name="person-add-outline" onClick={()=>{setTextItem(item,setText,closeForm,setMessage,setTitle,setMostrarDialogo)}}></ion-icon>
                    </span>
                ))}
                <h4 className='cancel_search' onClick={()=>{closeForm();setText("")}}>Cancelar</h4>
            </section>
        </div>}
        {mostrarDialogo && <MessageDialog onClose={()=>{onCloseWithOutNavigate(title,setMostrarDialogo)}} title={title} message={message}/>}
    </>
  )
}

export default SearchUser