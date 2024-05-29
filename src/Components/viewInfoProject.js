import {React,useState,useEffect} from 'react'
import '../styles/inforProject.css'
import {getProjectById} from '../controller/ProjectController'
import {useNavigate} from 'react-router-dom';
import verificarExpiracionToken from '../Configs/verificarExpiracionToken '
import {getnamestate} from '../Configs/cardsOptionConfig'
import {recievedMembers} from '../Configs/infoProjectConfig'

function ViewInfoProject() {
    const [response,SetResponse] = useState([]);
    const navigate=useNavigate();
    const tuToken=localStorage.getItem('token');
    useEffect(() => {
        getProjectById(verificarExpiracionToken,navigate,tuToken,SetResponse)
    }, [navigate,tuToken]);
    const members=[response.firstsMember,response.secondMember,response.thirdMember]
  return (
    <div className='viewInfo'>
        <h1 className='principal_title'>Informacion del proyecto</h1>
        <div className="bodyInfo">
            <section className='principal_information'>
                <span className='info_position'>
                    <label htmlFor="">Titulo de proyecto</label>
                    <input type="text" className='input_desing' value={response.title} disabled/>
                </span>
                <span className='info_position'>
                    <label htmlFor="">Categoria</label>
                    <input type="text" className='input_desing' value={response.area} disabled/>
                </span>
            </section>
            <section className='principal_information'>
                <span className='info_position'>
                    <label htmlFor="">Descripcion</label>
                    <textarea name="" id="" className='input_desing inp_desc' value={response.description} disabled></textarea>
                </span>
                <span className='info_position'>
                    <label htmlFor="" className='inp_sta'>Estado</label>
                    <input type="text" className='input_desing inp_sta' value={getnamestate(response.state)} disabled/>
                </span>
            </section>
            <section className='third_information'>
                <label htmlFor="">Integrantes</label>
                <span>
                    {recievedMembers(response).map((item,index)=>(
                        <input key={index} className='redondedInput' type="text" value={item} disabled/>
                    ))}
                </span>
            </section>
        </div>
        <span className='buttons'>
            <button className='buttons_desing accept'>Aceptar</button>
            <button className='buttons_desing reject'>Rechazar</button>
        </span>
    </div>
  )
}

export default ViewInfoProject