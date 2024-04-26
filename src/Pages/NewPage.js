import React,{useState} from 'react'
import Nav from '../Components/Nav'
import SlideBar from '../Components/SlideBar'
import CardAvance from '../Components/CardAvance'
function NewPage() {
  const [showCards, setShowCards] = useState(true);

  const handleSidebarOptionClick = () => {
    setShowCards(!showCards);
  };

  return (
    <div>
        <Nav/>
        <SlideBar create={"Crear Avance"} update={"Actualizar Avance"} deletes={"Eliminar Avances"} onOptionClick={handleSidebarOptionClick}/>
        {showCards && <div className="back-c"><CardAvance/></div>}
    </div>
  )
}

export default NewPage