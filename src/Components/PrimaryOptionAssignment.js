import {React, useState} from 'react'
import '../styles/optionAssignment.css'
import FormEntregas from '../Components/FormEntregas'

function PrimaryOptionAssignment({onOptionClick}) {
  const [mostrarFormAdd, setMostrarFormAdd] = useState(false);
  const toggleFormAdd = () => {
    setMostrarFormAdd(!mostrarFormAdd);
    onOptionClick()
  };
  return (
    <div>
        <span className='principalOption' onClick={toggleFormAdd}>
            <ion-icon name="add-circle-outline"></ion-icon>
            <p htmlFor="">Añadir Entrega</p>
        </span>
        {mostrarFormAdd && <FormEntregas tittle={"Añadir Entrega"} action={"Añadir"} onOptionClick={toggleFormAdd}
        assinngmentData={[]}/>}
    </div>
  )
}

export default PrimaryOptionAssignment