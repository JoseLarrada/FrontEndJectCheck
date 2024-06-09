import {React,useState,useEffect} from 'react'
import '../styles/analitycs.css'
import verificarExpiracionToken from '../Configs/verificarExpiracionToken '
import {useNavigate} from 'react-router-dom'
import {chargueAnalitycs} from '../controller/viewPrincipalController'
import {getnamestate} from '../Configs/cardsOptionConfig'

function Analitics() {
    const [datos,setDatos]=useState([])
    const [datosAdvance,setDatosAdvance]=useState([])
    const [datosAreas,setDatosAreas]=useState([])
    const navigate=useNavigate()
    const tuToken=localStorage.getItem("token")
    useEffect(() => {
        chargueAnalitycs(verificarExpiracionToken,navigate,tuToken,setDatos)
    }, [navigate, tuToken]);
    useEffect(() => {
        if (datos.advances) {
            setDatosAdvance(datos.advances);
        }
        if(datos.areas){
            setDatosAreas(datos.areas)
        }
    }, [datos]);
    function formatDate(dateString) {
        const date = new Date(dateString);
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-based
        const day = String(date.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
    }
  return (
    <>
         {/**Main Content*/}
        <div class="content">
        <main>
            <div class="header_Anal">
                <div class="left">
                    <h1>Dashboard</h1>
                </div>
            </div>
            {/**Insights*/}
            <ul class="insights">
                <li>
                    <i class='bx bx-calendar-check'><ion-icon name="create-outline"></ion-icon></i>
                    <span class="info">
                        <h3>
                            {datos.numberProjects}
                        </h3>
                        <p>Proyectos</p>
                    </span>
                </li>
                <li><i class='bx bx-show-alt'><ion-icon name="filter-outline"></ion-icon></i>
                    <span class="info">
                        <h3>
                            {datos.numberAdvances}
                        </h3>
                        <p>Avances</p>
                    </span>
                </li>
                <li><i class='bx bx-line-chart'><ion-icon name="share-outline"></ion-icon></i>
                    <span class="info">
                        <h3>
                           {datos.numberAssignments}
                        </h3>
                        <p>Entregas</p>
                    </span>
                </li>
            </ul>
            {/**End of Insights*/}
            <div class="bottom-data">
                <div class="orders">
                    <div class="header_Anal">
                        <i class='bx bx-receipt'><ion-icon name="reader-outline"></ion-icon></i>
                        <h3>Estado de avances</h3>
                        <i class='bx bx-filter'></i>
                        <i class='bx bx-search'></i>
                    </div>
                    <table>
                        <thead>
                            <tr>
                                <th>Titulo</th>
                                <th>Fecha Creacion</th>
                                <th>Estado</th>
                            </tr>
                        </thead>
                        <tbody>
                            {datosAdvance.map((item,index)=>(
                                <tr key={index}>
                                    <td>
                                        <p>{item.titulo}</p>
                                    </td>
                                    <td>{formatDate(item.fecha_creacion)}</td>
                                    <td><span class="status completed">{getnamestate(item.idEstado)}</span></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                {/**Reminders*/}
                <div class="reminders">
                    <div class="header_Anal">
                        <i class='bx bx-note'><ion-icon name="library-outline"></ion-icon></i>
                        <h3>Areas con mas proyectos</h3>
                        <i class='bx bx-filter'></i>
                        <i class='bx bx-plus'></i>
                    </div>
                    <ul class="task-list">
                        {datosAreas.map((item,index)=>(
                             <li class="completed" key={index}>
                                <div class="task-title">
                                    <p>{item.initial}</p>
                                </div>
                                <i class='bx bx-dots-vertical-rounded'></i>
                            </li>
                        ))}
                    </ul>
                </div>

                {/**End of Reminders*/}

            </div>

        </main>

    </div>
    </>
  )
}

export default Analitics