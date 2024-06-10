import React from 'react'
import SideBarOption from '../Components/SideBarOption'
import Nav from '../Components/Nav'
import {dataNav,dataNavTeacher} from '../Configs/data'

function Projects() {
  const getProfile=()=>{
    if(localStorage.getItem('perfil')==1){
        return dataNav
    }else{
      return dataNavTeacher
    }
  }
  let option=getProfile();
  return (
    <div>
        <Nav/>
        <SideBarOption nameFunction={option}/>
    </div>
  )
}

export default Projects