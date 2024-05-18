import React, { useState, useEffect } from "react";
import Card from "../Components/Card";
import "../styles/Card.css";
import verificarExpiracionToken from "../Configs/verificarExpiracionToken .js";
import {getnamestate} from '../Configs/cardsOptionConfig.js'
import { useNavigate } from "react-router-dom";

function Cards({optionCard,page}) {
  const tuToken = localStorage.getItem("token");
  const navigate = useNavigate();
  var state;
  const [datos, setDatos] = useState([]);
  
  useEffect(() => {
    optionCard(verificarExpiracionToken, navigate, tuToken, setDatos,state);
  }, []);
  const handleClick = (item) => {
    localStorage.setItem("id_ruta", item.id_ruta);
  };

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
            <Card
              Title={item.titulo}
              teacher={item.descripcion}
              page={page}
              owner={getnamestate(item.idEstado)}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cards;
