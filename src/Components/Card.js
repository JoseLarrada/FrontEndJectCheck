import React from 'react'
import Carddimage from '../resources/Carddimage.jpg'
import Pastel1 from '../resources/Pastel1.jpg'
import Pastel2 from '../resources/pastel2.jpg'
import Pastel3 from '../resources/pastel3.jpg'
import Pastel4 from '../resources/Pastel4.jpg'
import '../styles/Card.css';
import { Link } from 'react-router-dom';

function Card({Title,teacher,owner,page}) {
    const randomImage= ()=>{
        var list=[Carddimage,Pastel1,Pastel2,Pastel3,Pastel4]
        const randomItem = Math.floor(Math.random() * list.length);
        return list[randomItem]
    }
    return (
        <Link to={`/${page}/${owner}`}>
            <div className="card">
                <img src={randomImage()} alt="Imagen Tarjetas" />
                <div className="card-body">
                    <h4  className="card-title">{Title}</h4>
                    <h5 className="card-titlene">{teacher}</h5>
                    <h5 className="card-titlene">{owner}</h5>
                </div>
            </div>
        </Link>
    )
}

export default Card