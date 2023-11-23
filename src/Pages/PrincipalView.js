import React from 'react'
import Nav from '../Components/Nav'
import Sidebar from '../Components/Siderbar'
import Cards from '../Components/Cards'
import '../styles/Card.css';

function PrincipalView() {
  return (
    <div>
        <Nav/>
        <Sidebar/>
        <div className="back-c"><Cards/></div>
    </div>
  )
}

export default PrincipalView