import {React,useState,useEffect} from 'react'
import logo from '../resources/Icon.ico'
import {useNavigate} from 'react-router-dom';
import '../styles/sidebarOptions.css'
import verificarExpiracionToken from '../Configs/verificarExpiracionToken .js'
import {deleteProject,filterProjects} from '../controller/ProjectController.js'
import {deleteAdvance} from '../controller/AdvanceController.js'
import Cards from '../Components/Cards'
import TeacherManagment from './TeacherManagment.js';
import {handleOption,handleFormAvances,handleFormProjects} from '../Configs/sidebarOptionsConfigs.js'
import {handleClickProjects} from '../Configs/cardsOptionConfig.js'


function SideBarOption({nameFunction,onOptionClick}) {
  const [isHover, setIsHover]= useState(false);
  const [selectedOption, setSelectedOption] = useState('');
  const [avanceOption, setAvanceOption] = useState(false);
  const [cancelOption, setCancelOption] = useState(true);
  const [acceptCard, setAcceptCard] = useState(false);
  const [declineCard, setDeclineCard] = useState(false);
  const [pendingCard, setPendingCard] = useState(false);
  const tuToken = localStorage.getItem('token')
  const navigate=useNavigate()
  const toogleAcceptCard = () =>{
    setAcceptCard(true);
    setDeclineCard(false);
    setPendingCard(false);
  }
  const toogleDeclineCard = () =>{
    setAcceptCard(false);
    setDeclineCard(true);
    setPendingCard(false);
  }
  const tooglePendingCard = () =>{
    setAcceptCard(false);
    setDeclineCard(false);
    setPendingCard(true);
  }
  const handleOptionClick = (option) => {
    setSelectedOption(option);
    handleOption(option,setAvanceOption,avanceOption,setCancelOption,cancelOption,onOptionClick);
  };
  const handleConfirmarEliminarProyecto =async(inputValue) => {
     const hola= await deleteProject(inputValue,tuToken,verificarExpiracionToken,navigate);
     return hola;
  }; 
  const handleConfirmarEliminarAvance =async(inputValue) => {
     const result= await deleteAdvance(inputValue,tuToken,verificarExpiracionToken,navigate);
     return result;
  };
  useEffect(() => {
    if (selectedOption === 'Pendientes') {
      tooglePendingCard();
    }
    if (selectedOption === 'Aceptados') {
      toogleAcceptCard();
    }
    if (selectedOption === 'Rechazados') {
      toogleDeclineCard();
    }
  }, [selectedOption, tooglePendingCard,toogleAcceptCard,toogleDeclineCard]);
  const renderForm = () => {
    switch(selectedOption){
      case 'Crear': return handleFormProjects('Crear',cancelOption,handleConfirmarEliminarProyecto);
      case 'Modificar': return handleFormProjects('Modificar',cancelOption,handleConfirmarEliminarProyecto);
      case 'Eliminar': return handleFormProjects('Eliminar',cancelOption,handleConfirmarEliminarProyecto,handleOptionClick);
      case 'Pendientes':
        return (
            <div className='MoveOptionsCards'>
                  {pendingCard && <Cards optionCard={(verificarExpiracionToken, navigate, tuToken, setDatos) => 
                  filterProjects(verificarExpiracionToken, navigate, tuToken, setDatos, 5)} 
                  page={"newPage"} handleClick={handleClickProjects}/>}  
            </div>
        );
      case 'Aceptados': 
        return (
            <div className='MoveOptionsCards'>
                {acceptCard && <Cards optionCard={(verificarExpiracionToken, navigate, tuToken, setDatos) => 
                filterProjects(verificarExpiracionToken, navigate, tuToken, setDatos, 1)} 
                page={"newPage"} handleClick={handleClickProjects}/>}
            </div>
        );
      case 'Rechazados': 
        return (
            <div className='MoveOptionsCards'>
                 {declineCard && <Cards optionCard={(verificarExpiracionToken, navigate, tuToken, setDatos) => 
                filterProjects(verificarExpiracionToken, navigate, tuToken, setDatos, 2)} 
                page={"newPage"} handleClick={handleClickProjects}/>}
            </div>
        );
      case 'Crear Avance':return handleFormAvances('Crear Avance',avanceOption,handleConfirmarEliminarAvance,handleOptionClick);
      case 'Modificar Avance':return handleFormAvances('Modificar Avance',avanceOption,handleConfirmarEliminarAvance,handleOptionClick);
      case 'Eliminar Avance':return handleFormAvances('Eliminar Avance',avanceOption,handleConfirmarEliminarAvance,handleOptionClick);
      case 'Aceptar': return <TeacherManagment title={'Aceptar Proyecto'} />;
      case 'Finalizar': return <TeacherManagment title={'Finalizar Proyecto'}/>;
    }
  };
  return (
    <div className="formSidebar">
    <aside className={`sidebar ${isHover ? "active" : ""}`}>
        <div className="open-btn" onClick={() => setIsHover((prev) => !prev)}>
          <span className="material-symbols-outlined symbolOpen"><ion-icon name="chevron-forward-outline"></ion-icon></span>
        </div>
        <div className="wrapper">
          <div className="top__wrapper">
            <div className="headerSide">
              <span className="header-logo">
                <img src={logo} alt="" />
              </span>
              <div className="header-details">
                <span className="header-name">Panel Principal</span>
                <span className="header-email">Proyectos</span>
              </div>
            </div>
            <div className="search-box">
              <span className=" material-symbols-outlined search-icon">
                <ion-icon name="search-outline"></ion-icon>
              </span>
              <input type="text" name="searchBox" placeholder="Search..." />
            </div>
            <nav className="sidebar-nav">
              <ul className="nav-menu">
                {nameFunction.map((item) => {
                  return (
                    <li key={item.title} className="nav-menu__item">
                      <a className="nav-menu__link" onClick={() => handleOptionClick(item.title)}>
                        <span className="material-symbols-outlined simbolsItems">
                          {item.img}
                        </span>
                        <span className="text">{item.title}</span>
                      </a>
                    </li>
                  );
                })}
              </ul>
            </nav>
          </div>
          <div className="footer">
            <a href="/" className="nav-menu__link">
              <span className="material-symbols-outlined footer-icon">
                <ion-icon name="log-out-outline"></ion-icon>
              </span>
              <span className="footer-text">Logout</span>
            </a>
          </div>
        </div>
      </aside>
      {renderForm()}
    </div>
  )
}

export default SideBarOption