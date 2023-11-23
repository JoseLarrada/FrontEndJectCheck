import React, { useState }from 'react'
import '../styles/confirmlog.css'

function ConfirmLog({ texto, onConfirm, onCancel }) {
    const [mostrarAviso, setMostrarAviso] = useState(true);

    const ChoiceConfirm = () => {
        onConfirm(); 
        setMostrarAviso(false); 
  };

  const ChoiceCancel = () => {
        onCancel();
        setMostrarAviso(false);
  };
  return (
    <div>
    {mostrarAviso && (
      <div className='confirm-log'>
        <label htmlFor="exampleFormControlInput1" className="form-label confirm-label">{texto}</label>
        <button type="button" className="btn btn-primary confirm-btn" onClick={ChoiceConfirm}>Si</button>
        <button type="button" className="btn btn-primary confirm-btn" onClick={ChoiceCancel}>No</button>
      </div>
    )}
  </div>
  )
}

export default ConfirmLog
