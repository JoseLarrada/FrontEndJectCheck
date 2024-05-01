import React, { useState } from 'react';
import comprobar from '../resources/comprobar.png';
import multiplicar from '../resources/multiplicar.png'
import "../styles/MessageDialog.css";

function MessageDialog({onClose,message,title}) {
    const [isVisible, setIsVisible] = useState(true);

    const handleClose = () => {
        setIsVisible(false);
        onClose();
    };
    var color='';
    const personIcon = () =>{
        if(title==='¡Felicidades!'){
            color='rgb(98, 182, 250)'
            return comprobar;
        }else{
            color='red'
            return multiplicar;
        }
    }
    var image=personIcon();
    return (
        <>
            {isVisible && (
                <div className='contenedorPrincipal' style={{border: `2px solid ${color}` }}>
                    <section className='contenedorSecundario'>
                        <img className='iconoConfirmacion' src={image} alt="" />
                        <p className='tituloEmergente'>{title}</p>
                    </section>
                    <p className='mensaje'>
                        {message}
                    </p>
                    <button type="button" className="botonAceptar" style={{backgroundColor: color}} onClick={handleClose}>Aceptar</button>
                </div>
            )}
        </>
    );
}

export default MessageDialog;
