import React, { useState }from 'react'
import '../styles/confirmlog.css'

function ConfirmLog({ texto, onConfirm, onCancel }) {
    const [mostrarAviso, setMostrarAviso] = useState(true);

    const ChoiceConfirm = () => {
        onConfirm(); 
        setMostrarAviso(!mostrarAviso); 
  };

  const ChoiceCancel = () => {
        onCancel();
        setMostrarAviso(!mostrarAviso);
  };
  return (
    <>
    {mostrarAviso && (
      <div className='confirm-log'>
        <p className="confirmLabel">{texto}</p>
        <span className='buttonsConfirms'>
          <button type="button" className="btn btn-primary confirmBtn BtnDesingConfirm" onClick={ChoiceConfirm}>Si</button>
          <button type="button" className="btn btn-primary CancelBtn BtnDesingConfirm" onClick={ChoiceCancel}>No</button>
        </span>
      </div>
    )}
  </>
  )
}

export default ConfirmLog
