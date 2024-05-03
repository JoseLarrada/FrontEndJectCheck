import {React,useState} from 'react'
import logo from '../resources/Icon.ico'
import '../styles/sidebarOptions.css'
import {dataNav} from '../Configs/data'
function SideBarOption() {
  const [isHover, setIsHover]= useState(false);  
  return (
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
              {dataNav.map((item) => {
                return (
                  <li key={item.title} className="nav-menu__item">
                    <a href={'#'} className="nav-menu__link">
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
  )
}

export default SideBarOption