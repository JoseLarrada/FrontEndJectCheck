import React, { useState, useEffect } from "react";
import "../styles/Card.css";
import verificarExpiracionToken from "../Configs/verificarExpiracionToken .js";
import { useNavigate } from "react-router-dom";
import {rendercard} from '../Configs/cardsOptionConfig.js'

function Cards({optionCard,page,handleClick,renderComponent}) {
  const tuToken = localStorage.getItem("token");
  const navigate = useNavigate();
  let state;
  const [datos, setDatos] = useState([]);
  const [viewInfo,setViewInfo] = useState(false)
  const [viewCard,setViewCar] = useState(true)
  const toggleFind = () => {
    setViewInfo(!viewInfo);
    setViewCar(!viewCard)
  };
  useEffect(() => {
    optionCard(verificarExpiracionToken, navigate, tuToken, setDatos,state);
  }, []);
  return (
    <div className="container">
      {viewCard&&<div className="row">
        {datos.map((item, index) => (
          <div
            key={index}
            className="col-md-4"
            onClick={() => {
              handleClick(item,setViewInfo,setViewCar);
            }}
          >
            {rendercard(item,page)}
          </div>
        ))}
      </div>}
        {viewInfo && renderComponent(toggleFind)}
    </div>
  );
}

export default Cards;
