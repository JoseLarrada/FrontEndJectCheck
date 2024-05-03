import React, { useState } from 'react';
import Nav from '../Components/Nav'
import Sidebar from '../Components/Siderbar'
import Cards from '../Components/Cards'
import '../styles/Card.css';

function PrincipalView() {
  const [showCards, setShowCards] = useState(true);

  const handleSidebarOptionClick = () => {
    setShowCards(!showCards);
  };
  return (
    <div>
        <Nav/>
    </div>
  )
}

export default PrincipalView