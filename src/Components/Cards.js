import React, { useState, useEffect } from "react";
import Card from "../Components/Card";
import "../styles/Card.css";
import verificarExpiracionToken from "../Configs/verificarExpiracionToken .js";
import { useNavigate } from "react-router-dom";

function Cards({optionCard}) {
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

  function getnamestate(idestado) {
    if (idestado == 5) {
      return "Pendiente";
    } else if (idestado == 1) {
      return "En proceso";
    } else if (idestado == 2) {
      return "Completado";
    }
  }

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
              Title={item.nombre}
              teacher={item.descripcion}
              page={"newPage"}
              owner={getnamestate(item.id_estado)}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cards;
