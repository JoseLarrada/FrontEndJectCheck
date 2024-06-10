import React,{useState,useEffect} from 'react'
import '../styles/viewInfoAssignment.css'
import {renderOptionsButtos,isRate,HandleClickComponents,handleButtonClick,closeComponent} from '../Configs/viewAssingmentConfig'
import {useNavigate} from 'react-router-dom'
import verificarExpiracionToken from '../Configs/verificarExpiracionToken '
import {getInfoAssignment,deleteAssignment} from '../controller/AssignmentController'
import {charguedRate} from '../controller/RateController'
import FormEntregas from '../Components/FormEntregas'
import RateAssignment from '../Components/RateAssignment'
import ShowComponent from '../Components/ShowComponent'

function ViewInfoAdvances({closeForm}) {
  const [closeView, setCloseView] = useState(true);
  const [datos,setDatos] = useState([])
  const [urlLinks,setUrlLinks] = useState([])
  const [dataRate,setDataRate] = useState([])
  const [rate,setRate] = useState(false)
  const [componentAssign,setComponentAssign] = useState(false)
  const [componentDel,setComponentDel] = useState(false)
  const [componentRate,setComponentRate] = useState(false)
  const [componentUpdate,setComponentUpdate] = useState(false)
  const [refreshView, setRefreshView] = useState(false);
  const navigate=useNavigate();
  const tuToken=localStorage.getItem('token')
  let option;
   useEffect(() => {
    const fetchData = async () => {
      const data = await getInfoAssignment(verificarExpiracionToken, navigate, tuToken, setDatos);
      const dataRate = await charguedRate(verificarExpiracionToken,navigate,tuToken,setDataRate);
    };
    fetchData();
  }, [navigate, tuToken,refreshView]);

  useEffect(() => {
    if (datos.filesUpload) {
      setUrlLinks(datos.filesUpload);
    }
    if (datos.valueRate) {
      setRate(isRate(datos.state));
    }
  }, [datos]);

  const handleClickOption=(event)=>{
    option =handleButtonClick(event);
    HandleClickComponents(option,setComponentAssign,setComponentDel,setComponentRate,setCloseView,setComponentUpdate,closeForm)
  }
  const handleDeleteAssignment=async ()=>{
      const result= await deleteAssignment(verificarExpiracionToken,navigate,tuToken);
     return result;
  }

  return (
    <>
      {closeView && <div className='bodyInfo_Assign'>
        <h3>Informacion de la entrega</h3>
        <section className="infoAssignment">
          <span className='commetsAssign positionFlex'>
            <label>Comentario de la entrega</label>
            <textarea name="" id="" className='commentsBox' disabled value={datos.comment}></textarea>
          </span>
          <span className='fileAssign positionFlex'>
            <label>Lista de archivos subidos</label>
            {urlLinks.map((item,index)=>(
                <a href={item.url} key={index}>{item.fileName}</a>
            ))}
          </span>
        </section>

         {rate && <section className="infoRate">
          <span className='commentRate positionFlex'>
            <label>Comentario de la Calificacion</label>
            <textarea name="" id="" className='commentsBox' disabled value={datos.rateComment}></textarea>
          </span>
          <span className='valueRate positionFlex'>
            <label>Nota final</label>
            <input type="text" disabled value={datos.valueRate}/>
          </span>
        </section>}
        
        <section className='buttonsOptions'>
            {renderOptionsButtos(datos.state,handleClickOption)}
        </section>
      </div>}
      {componentAssign && <FormEntregas tittle={'Modificar Entrega'} action={'Modificar'} onOptionClick={()=>{closeComponent(setComponentAssign,setCloseView,componentAssign,closeView)}} assinngmentData={datos.comment}/>}
      {componentDel && <ShowComponent titleComponent={'Eliminar Entrega'} 
            descripcion={'Esto eliminará la entrega y cualquier dato asociado a ello. Por favor ingresa tu nombre de usuario para confirmar.'}
            action={'Ingrese la palabra aceptar y presione confirmar'} cancel={()=>{closeComponent(setComponentDel,setCloseView,componentDel,closeView)}} accept={handleDeleteAssignment}/>}
      {componentRate && <RateAssignment action={'Crear Calificacion'} onClose={()=>{closeComponent(setComponentRate,setCloseView,componentRate,closeView);setRefreshView(prev => !prev);}} rateData={[]}/>}
      {componentUpdate && <RateAssignment action={'Modificar Calificacion'} onClose={()=>{closeComponent(setComponentUpdate,setCloseView,componentUpdate,closeView);setRefreshView(prev => !prev);}} rateData={dataRate}/>}  
    </>
  )
}

export default ViewInfoAdvances