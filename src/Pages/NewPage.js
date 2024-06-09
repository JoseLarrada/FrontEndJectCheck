import React,{useState} from 'react'
import Nav from '../Components/Nav'
import Cards from '../Components/Cards'
import { chargueAdvances } from "../controller/AdvanceController.js";
import {handleClickAdvances} from '../Configs/cardsOptionConfig.js';
import SiderBarOption from '../Components/SideBarOption'
import {dataNavAvances,dataNavProjectsConfig} from '../Configs/data'
function NewPage() {
  const [showCards, setShowCards] = useState(true);

  const handleSidebarOptionClick = () => {
    setShowCards(!showCards);
  };
  const viewOption = () =>{
    if(localStorage.getItem('perfil')==2){
      return <SiderBarOption nameFunction={dataNavAvances} onOptionClick={handleSidebarOptionClick}/>
    }
    if(localStorage.getItem('perfil')==1){
      return <SiderBarOption nameFunction={dataNavProjectsConfig} onOptionClick={handleSidebarOptionClick}/>
    }
  }
  return (
    <div>
        <Nav/>
        {viewOption()}
        {showCards && <div className="back-c"><Cards optionCard={chargueAdvances} page={"entregasPage"} handleClick={handleClickAdvances}/></div>}
    </div>
  )
}

export default NewPage