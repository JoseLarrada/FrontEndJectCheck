import {React,useState} from 'react'
import logo from '../resources/Icon.ico'
import {useNavigate} from 'react-router-dom';
import '../styles/sidebarOptions.css'
import FormProject from '../Components/FormProject'
import ShowComponent from '../Components/ShowComponent'
import verificarExpiracionToken from '../Configs/verificarExpiracionToken .js'
import {deleteProject,filterProjects} from '../controller/ProjectController.js'
import Cards from "../Components/Cards.js";
import FormAvances from '../Components/FormAvances'

function SideBarOption({nameFunction}) {
  const [isHover, setIsHover]= useState(false);
  const [selectedOption, setSelectedOption] = useState('');
  const tuToken = localStorage.getItem('token')
  const navigate=useNavigate()
  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };
  const handleConfirmarEliminarCuenta =async(inputValue) => {
     const hola= await deleteProject(inputValue,tuToken,verificarExpiracionToken,navigate);
     return hola;
  }; 
  const renderForm = () => {
    switch(selectedOption){
      case 'Crear': return <FormProject titleForm={'Crear Proyecto'} textBotom={'Crear'}/>;
      case 'Modificar': return <FormProject titleForm={'Modificar Proyecto'} textBotom={'Modificar'}/>;
      case 'Eliminar': return <ShowComponent titleComponent={'Eliminar Proyecto'} 
            descripcion={'Esto eliminará el proyecto y cualquier dato asociado a el. Por favor ingresa tu contraseña para confirmar.'}
            action={'Ingrese Nombre del proyecto'} cancel={()=>{}} accept={handleConfirmarEliminarCuenta}/>;
      case 'Pendientes': return <Cards optionCard={(verificarExpiracionToken, navigate, tuToken, setDatos) => filterProjects(verificarExpiracionToken, navigate, tuToken, setDatos, 5)}/>
      case 'Aceptados': return <Cards optionCard={(verificarExpiracionToken, navigate, tuToken, setDatos) => filterProjects(verificarExpiracionToken, navigate, tuToken, setDatos, 1)}/>
      case 'Rechazados': return <Cards optionCard={(verificarExpiracionToken, navigate, tuToken, setDatos) => filterProjects(verificarExpiracionToken, navigate, tuToken, setDatos, 2)}/>
      case 'Crear Avance': return <FormAvances tittle={"Crear Avance"} action={"Guardar Avance"}/>
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