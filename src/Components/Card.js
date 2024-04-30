import React from 'react'
import Carddimage from '../resources/Carddimage.jpg'
import '../styles/Card.css';
import { Link } from 'react-router-dom';

function Card({Title,teacher,owner,page}) {
    return (
        <Link to={`/${page}/${owner}`}>
            <div className="card">
                <img src={Carddimage} alt="Imagen Tarjetas" />
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