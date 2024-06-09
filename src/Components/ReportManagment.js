import React,{useState} from 'react'
import Overview from '../resources/project-overview-data-vector.jpg'
import '../styles/repor.css'
import {useNavigate} from 'react-router-dom'
import verificarExpiracionToken from '../Configs/verificarExpiracionToken .js'
import {customMessage,onCloseWithOutNavigate} from '../Configs/MessageViews'
import {generateGeneralReport, generateCustomReport, readReport} from '../controller/ReportController.js'
import SearchProject from '../Components/searchproject'
import MessageDialog from '../Components/MessageDialog.js'
function ReportManagment() {
  const [viewPrincipal, setViewPrincipal] = useState(true);
  const [viewCustomReport, setViewCustomReport] = useState(false);
  const [titleDialog, setTitleDialog] = useState('');
  const [message, setMessage] = useState('');
  const [mostrarDialogo,setMostrarDialogo] = useState(false)
  const tuToken = localStorage.getItem('token');
  const navigate= useNavigate();

  const handleViewForms=()=>{
    setViewPrincipal(!viewPrincipal)
    setViewCustomReport(!viewCustomReport)
  }
  const handleView=()=>{
    setViewPrincipal(true)
  }
  const handleGeneralReport =async()=>{
    const result = await generateGeneralReport(verificarExpiracionToken,navigate,tuToken);
    customMessage(result,setTitleDialog,setMessage,setMostrarDialogo);
  }
  return (
    <>
        {viewPrincipal && <div className='componentReport'>
            <section className="textAndButton">
                <span className='textReport'>
                    <h1>Reportes de <br /> proyectos</h1>
                    <p>Vista para generar los informes de los proyectos <br /> 
                    que tiene creado o asociado a su cuenta. <br />
                    ¿Cual desea generar?</p>
                </span>
                <span className="OptionsReport">
                    <button className='desingBtnReport generalReportDesing' onClick={handleGeneralReport}>Reporte General</button>
                    <button className='desingBtnReport personReportDesing' onClick={handleViewForms}>Reporte Personalizado</button>
                </span>
            </section>
            <section className='image_Report'>
                <img src={Overview} alt="" />
            </section>
            {mostrarDialogo && <MessageDialog onClose={()=>{onCloseWithOutNavigate(titleDialog,setMostrarDialogo,handleView)}} title={titleDialog} message={message}/>}
        </div>}
        {viewCustomReport && <SearchProject closeForm={handleViewForms} paragraph={'Generar reporte personalizado, seleccione un proyecto para crear reporte'} 
        charguedItem={readReport} title={'Informes Personalizados'}/>}  
    </>
  )
}

export default ReportManagment