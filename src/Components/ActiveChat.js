import React from 'react'
import '../styles/activechat.css'
function ActiveChat() {
  return (
    <div className='main'>
      <span class="badge text-bg-light backtop">
          <div className='backtop-move'>
            <ion-icon name="person"></ion-icon>
            <label className='backtop-label'>Justine Skye</label>
          </div>
      </span>

      <span class="badge bg-secondary back">
            <div className='back-move'>
                <input class="form-control back-text" type="text" placeholder="Escribe algo aqui..." aria-label="default input example"/>
                <ion-icon name="send"></ion-icon>
            </div>
      </span>
    </div>
  )
}

export default ActiveChat
