import React,{useState} from 'react'
import Nav from '../Components/Nav'
import Cards from '../Components/Cards'
import { chargueAdvances } from "../controller/AdvanceController.js";
import {handleClickAdvances} from '../Configs/cardsOptionConfig.js';
import SiderBarOption from '../Components/SideBarOption'
import {dataNavAvances} from '../Configs/data'
function NewPage() {
  const [showCards, setShowCards] = useState(true);

  const handleSidebarOptionClick = () => {
    setShowCards(!showCards);
  };

  return (
    <div>
        <Nav/>
        <SiderBarOption nameFunction={dataNavAvances} onOptionClick={handleSidebarOptionClick}/>
        {showCards && <div className="back-c"><Cards optionCard={chargueAdvances} page={"entregasPage"} handleClick={handleClickAdvances}/></div>}
    </div>
  )
}

export default NewPage