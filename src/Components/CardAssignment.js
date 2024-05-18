import React, { useState, useEffect } from "react";
import Card from "../Components/CardWithoutLink.js";
import "../styles/Card.css";
import verificarExpiracionToken from "../Configs/verificarExpiracionToken .js";
import { useNavigate } from "react-router-dom";
import {charguedAssignment} from '../controller/AssignmentController'
import {rendercard} from '../Configs/cardsOptionConfig.js'

function CardAssignment({optionCard,page,handleClick}) {
  const tuToken = localStorage.getItem("token");
  const navigate = useNavigate();
  const [datos, setDatos] = useState([]);
  
  useEffect(() => {
    optionCard(verificarExpiracionToken, navigate, tuToken, setDatos,localStorage.getItem('id_avance'));
  }, []);
  
  return (
    <div className="container">
      <div className="row">
        {datos.map((item, index) => (
          <div
            key={index}
            className="col-md-4"
            onClick={() => {
              handleClick(item);
            }}
          >
            {rendercard(item,page)}
          </div>
        ))}
      </div>
    </div>
  )
}

export default CardAssignment