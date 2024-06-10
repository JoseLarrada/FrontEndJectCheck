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
        <div className="content">
        <main>
            <div className="header_Anal">
                <div className="left">
                    <h1>Dashboard</h1>
                </div>
            </div>
            {/**Insights*/}
            <ul className="insights">
                <li>
                    <i className='bx bx-calendar-check'><ion-icon name="create-outline"></ion-icon></i>
                    <span className="info">
                        <h3>
                            {datos.numberProjects}
                        </h3>
                        <p>Proyectos</p>
                    </span>
                </li>
                <li><i className='bx bx-show-alt'><ion-icon name="filter-outline"></ion-icon></i>
                    <span className="info">
                        <h3>
                            {datos.numberAdvances}
                        </h3>
                        <p>Avances</p>
                    </span>
                </li>
                <li><i className='bx bx-line-chart'><ion-icon name="share-outline"></ion-icon></i>
                    <span className="info">
                        <h3>
                           {datos.numberAssignments}
                        </h3>
                        <p>Entregas</p>
                    </span>
                </li>
            </ul>
            {/**End of Insights*/}
            <div className="bottom-data">
                <div className="orders">
                    <div className="header_Anal">
                        <i className='bx bx-receipt'><ion-icon name="reader-outline"></ion-icon></i>
                        <h3>Estado de avances</h3>
                        <i className='bx bx-filter'></i>
                        <i className='bx bx-search'></i>
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
                                    <td><span className="status completed">{getnamestate(item.idEstado)}</span></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                {/**Reminders*/}
                <div className="reminders">
                    <div className="header_Anal">
                        <i className='bx bx-note'><ion-icon name="library-outline"></ion-icon></i>
                        <h3>Areas con mas proyectos</h3>
                        <i className='bx bx-filter'></i>
                        <i className='bx bx-plus'></i>
                    </div>
                    <ul className="task-list">
                        {datosAreas.map((item,index)=>(
                             <li className="completed" key={index}>
                                <div className="task-title">
                                    <p>{item.initial}</p>
                                </div>
                                <i className='bx bx-dots-vertical-rounded'></i>
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