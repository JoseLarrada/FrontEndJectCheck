import React from 'react'
import Nav from '../Components/Nav'
import SlideBar from '../Components/SlideBar'
import CardAvance from '../Components/CardAvance'
function NewPage() {
  return (
    <div>
        <Nav/>
        <SlideBar create={"Crear Avance"} update={"Actualizar Avance"} deletes={"Eliminar Avances"}/>
        <div className="back-c"><CardAvance/></div>
    </div>
  )
}

export default NewPage