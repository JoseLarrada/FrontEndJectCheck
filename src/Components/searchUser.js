import React from 'react'
import '../styles/searchUser.css'

function searchUser() {
    var datos=[
        {
            Inicial : 'JL',
            Nombre : 'Jose Larrada'
        },
        {
            Inicial : 'LB',
            Nombre : 'Laura Brito'
        },
        {
            Inicial : 'MR',
            Nombre : 'Maribel Romero'
        }
    ]
  return (
    <div className='head_search'>
        <section className='header_search'>
            <span className='search_info'>
                <h1>Búsqueda</h1>
                <p>Encuentra al docente que esta a cargo de la materia</p>
            </span>
            <div className='icon_close'><ion-icon name="close-outline"></ion-icon></div>
        </section>
        <section className="body_search">
            <span className='search_bar'>
                <ion-icon name="search-outline"></ion-icon>
                <input type="text" className=''/>
            </span>
            {datos.map((item,index)=>(
                <span className='result_search' key={index}>
                    <input type="text" disabled className='rendonded_result' value={item.Inicial}/>
                    <input type="text" disabled className='name_result'value={item.Nombre}/>
                    <ion-icon name="person-add-outline"></ion-icon>
                </span>
            ))}
            <h4 className='cancel_search'>Cancelar</h4>
        </section>
    </div>
  )
}

export default searchUser