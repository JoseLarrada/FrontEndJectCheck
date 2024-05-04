import {React, useState} from 'react'
import '../styles/FormProject.css'

function FormProject({title,textBotom}) {
  const [Ischecked,setIschecked]=useState(false)
  return (
    <div className="formProjects">
        <h3>{title}</h3>
        <section className="principalForm">
            <input type="text" placeholder='Titulo del proyecto' required/>
            <textarea name="Decription" id="" cols="30" rows="5" placeholder='Descripcion'></textarea>
            <span className="findTeacher">
                <input type="text" placeholder='Nombre del docente' required/>
                <ion-icon name="search-outline"></ion-icon>
            </span>
            <span className="addAditional">
              <input type="checkbox" id="miCheckbox" name="miCheckbox" value="valor" checked={Ischecked}
              onChange={() => setIschecked(!Ischecked)}/>
              <h6 for="miCheckbox">Adicionar Colaborador</h6>
            </span>
        </section>
        <section className="aditionalOwners">
          {Ischecked && (
            <div>
              <span className="findTeacher">
                <input type="text" placeholder='Nombre del estudiante' required/>
                <ion-icon name="search-outline"></ion-icon>
              </span>
              <span className="findTeacher">
                <input type="text" placeholder='Nombre del estudiante' required/>
                <ion-icon name="search-outline"></ion-icon>
              </span>
            </div>
          )}
        </section>
        <button type="button" class="btn btn-outline-secondary">{textBotom}</button>
    </div>
  )
}

export default FormProject