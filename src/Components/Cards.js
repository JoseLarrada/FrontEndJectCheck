import React, { useState, useEffect } from "react";
import "../styles/Card.css";
import verificarExpiracionToken from "../Configs/verificarExpiracionToken .js";
import { useNavigate } from "react-router-dom";
import {rendercard} from '../Configs/cardsOptionConfig.js'

function Cards({optionCard,page,handleClick}) {
  const tuToken = localStorage.getItem("token");
  const navigate = useNavigate();
  var state;
  const [datos, setDatos] = useState([]);
  
  useEffect(() => {
    optionCard(verificarExpiracionToken, navigate, tuToken, setDatos,state);
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
  );
}

export default Cards;
