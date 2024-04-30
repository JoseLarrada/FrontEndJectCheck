import React, { useState } from 'react';
import comprobar from '../resources/comprobar.png';
import "../styles/MessageDialog.css";

function MessageDialog({onClose,message}) {
    const [isVisible, setIsVisible] = useState(true);

    const handleClose = () => {
        setIsVisible(false);
        onClose();
    };
    return (
        <>
            {isVisible && (
                <div className='contenedorPrincipal'>
                    <section className='contenedorSecundario'>
                        <img className='iconoConfirmacion' src={comprobar} alt="" />
                        <p className='tituloEmergente'>¡Felicidades!</p>
                    </section>
                    <p className='mensaje'>
                        {message}
                    </p>
                    <button type="button" className="botonAceptar" onClick={handleClose}>Aceptar</button>
                </div>
            )}
        </>
    );
}

export default MessageDialog;
