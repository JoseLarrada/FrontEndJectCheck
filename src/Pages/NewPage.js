import React,{useState} from 'react'
import Nav from '../Components/Nav'
import SlideBar from '../Components/SlideBar'
import CardAvance from '../Components/CardAvance'
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
        <SiderBarOption nameFunction={dataNavAvances}/>
        {showCards && <div className="back-c"><CardAvance/></div>}
    </div>
  )
}

export default NewPage