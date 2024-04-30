import React, { useState} from 'react';
import comprobar from '../resources/comprobar.png'
import "../styles/MessageDialog.css"

function MessageDialog() {
    const [mostrarForm, setMostrarForm] = useState(true);
    const toggleFormAdd = () => {
        setMostrarForm(!mostrarForm);
    };
  return (
    <>
        {mostrarForm && (
            <div className='contenedorPrincipal'>
                <section className='contenedorSecundario'>
                    <img className='iconoConfirmacion' src={comprobar} alt="" />
                    <p className='tituloEmergente'>¡Felicidades!</p>
                </section>
                <p className='mensaje'>
                    hola este es un mensaje de prueba, aqui ira un mensaje random
                 </p>
                 <button type="button" className="botonAceptar" onClick={toggleFormAdd()}>Aceptar</button>
            </div>
        )}
    </>
  )
}

export default MessageDialog