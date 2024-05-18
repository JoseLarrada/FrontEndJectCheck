import React, { useState } from 'react';
import Nav from '../Components/Nav'
import Cards from '../Components/Cards'
import '../styles/Card.css';
import { charguedProject } from "../controller/ProjectController.js";

function PrincipalView() {
  const [showCards, setShowCards] = useState(true);

  const handleSidebarOptionClick = () => {
    setShowCards(!showCards);
  };
  return (
    <div>
        <Nav/>
        <Cards optionCard={charguedProject} page={"newPage"}/>
    </div>
  )
}

export default PrincipalView