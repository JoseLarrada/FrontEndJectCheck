import React, { useState } from 'react';
import Nav from '../Components/Nav'
import Analitycs from '../Components/Analitics'
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
        <section className='moveAnalitycs'>
          <Analitycs/>
        </section>
    </div>
  )
}

export default PrincipalView