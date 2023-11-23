import React from 'react';
import UserName from '../Components/UserName'
import '../styles/contacs.css'

function Contacts() {
  return (
    <aside className='chatbar'>
      <ion-icon name="search"></ion-icon>
      <input class="form-control input-chat" id="exampleDataList" placeholder="Busca un chat..."></input>
      <UserName nameuser={'pedro'}/>
      <UserName nameuser={'Maria'}/>
    </aside>
  )
}

export default Contacts
