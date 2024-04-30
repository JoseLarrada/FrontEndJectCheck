import React, { useEffect, useState } from 'react';
import '../styles/repor.css'
import {useNavigate} from 'react-router-dom'
import verificarExpiracionToken from '../Configs/verificarExpiracionToken .js'
import {generateGeneralReport, generateCustomReport, readReport} from '../controller/ReportController.js'
function Report() {
  const tuToken = localStorage.getItem('token');
  const navigate= useNavigate();
  const [datos, setDatos] = useState([]);
  
  useEffect(() => {
    readReport(verificarExpiracionToken,navigate,tuToken,setDatos);
  }, []);

  const handleClick = (item) => {
    localStorage.setItem('id_ruta', item.id_ruta);
  }

  return (
    <section className='control sidecontrol'>
         <div className="nav-link active person ico control-move">
            <ion-icon name="document"></ion-icon>
            <label>Personalizado</label>
        </div>
        <div className="nav-link active person ico control-move" to="/" >
            <ion-icon onClick={()=>{generateGeneralReport(verificarExpiracionToken,navigate,tuToken)}} name="documents"></ion-icon>
            <label>General</label>
        </div>
        <div class="list-group">
          <button type="button" class="list-group-item list-group-item-action active" aria-current="true">
            Proyectos
          </button>
          {datos.map((item, index) => (
          <button key={index} type="button" class="list-group-item list-group-item-action" onClick={() => {handleClick(item);
            generateCustomReport(verificarExpiracionToken,navigate,tuToken)}}>{item.id_ruta}
          </button>
        ))}
          <button type="button" class="list-group-item list-group-item-action" disabled>A disabled button item</button>
        </div>
    </section>
  )
}

export default Report
