import React from 'react'
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import InicioSesion from '../Pages/InicioSesion';
import Registro from '../Pages/Registro';
import FormRegistro from '../Components/FormRegistro';
import FormReset from '../Components/FormReset';
import PrincipalView from '../Pages/PrincipalView'
import PersonProfile from '../Pages/PersonProfile'
import Chat from '../Pages/Chat'
import Reports from '../Pages/Reports'
import NewPage from '../Pages/NewPage'
import Assigment from '../Pages/Assigment'
import Projects from '../Pages/Projects'
import ShowComponent from '../Components/ShowComponent'
function Inicio() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<InicioSesion/>}/>
          <Route path='/registro' element={<Registro/>}/>
          <Route path='/registro/continueregister' element={<FormRegistro/>}/>
          <Route path='/resetpassword' element={<FormReset/>}/>
          <Route path='/principalview' element={<PrincipalView/>}/>
          <Route path='/profile' element={<PersonProfile/>}/>
          <Route path='/messages' element={<Chat/>}/>
          <Route path='/Reports' element={<Reports/>}/>
          <Route path="/newPage/:id" element={<NewPage/>}/>
          <Route path="/entregasPage/:fecha" element={<Assigment />} />
          <Route path='/Projects' element={<Projects/>}/>
          <Route path='/pruebas' element={<ShowComponent title={'Eliminar Proyecto'} 
            descripcion={'Esto eliminará el proyecto y cualquier dato asociado a ello. Por favor ingresa tu contraseña para confirmar.'}
            action={'Ingrese Nombre del proyecto'} cancel={()=>{}} accept={(value)=>{}}/>}/>
        </Routes> 
    </BrowserRouter>
  )
}

export default Inicio