import React from 'react'
import '../styles/contacs.css'

function UserName({nameuser}) {
  return (
    <div className='nameuser'>
        <label for="exampleFormControlInput1" class="form-label">{nameuser}</label>
    </div>
  )
}

export default UserName
