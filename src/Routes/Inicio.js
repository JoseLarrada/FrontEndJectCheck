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
        </Routes> 
    </BrowserRouter>
  )
}

export default Inicio