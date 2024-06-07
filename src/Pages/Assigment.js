import React,{useState} from 'react'
import Nav from '../Components/Nav'
import Dropdowns from '../Components/Dropdowns'
import Cards from '../Components/Cards'
import "../styles/dropdowns.css"
import {charguedAssignment} from '../controller/AssignmentController'
import {handleClickAssingment} from '../Configs/cardsOptionConfig.js'
import PrimaryOption from '../Components/PrimaryOptionAssignment'
import ViewInfoAssignment from '../Components/ViewInfoAssignment'

function Assigment() {
  const [showCards, setShowCards] = useState(true);

  const handleSidebarOptionClick = () => {
    setShowCards(!showCards);
  };
  
  const chargueContent=(toggleFind)=>{
    return <ViewInfoAssignment closeForm={toggleFind}/>
  }
  
    return (
        <div>
            <Nav/>
            <PrimaryOption onOptionClick={handleSidebarOptionClick}/>
            {showCards && <Cards optionCard={(verificarExpiracionToken, navigate, tuToken, setDatos) => 
                  charguedAssignment(verificarExpiracionToken, navigate, tuToken, setDatos, localStorage.getItem('id_avance'))} 
                  handleClick={handleClickAssingment} renderComponent={chargueContent}/>}
        </div>
    )
}

export default Assigment
