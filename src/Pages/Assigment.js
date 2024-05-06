import React,{useState} from 'react'
import Nav from '../Components/Nav'
import Dropdowns from '../Components/Dropdowns'
import CardAssignment from '../Components/CardAssignment'
import "../styles/dropdowns.css"

function Assigment() {
  const [showCards, setShowCards] = useState(true);

  const handleSidebarOptionClick = () => {
    setShowCards(!showCards);
  };
  const chargueContent=()=>{
    if(localStorage.getItem('perfil')==1){
      return <Dropdowns onOptionClick={handleSidebarOptionClick}/>
    }
  }
  
    return (
        <div>
            <Nav/>
            {chargueContent()}
            {showCards && <CardAssignment/>}
        </div>
    )
}

export default Assigment
