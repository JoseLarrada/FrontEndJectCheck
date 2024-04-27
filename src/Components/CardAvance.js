import React, { useState, useEffect } from "react";
import Card from "../Components/Card";
import "../styles/Card.css";
import verificarExpiracionToken from "../Configs/verificarExpiracionToken .js";
import { chargueAdvances } from "../controller/AdvanceController.js";
import { useNavigate } from "react-router-dom";
function CardAvance() {
  const tuToken = localStorage.getItem("token");
  const navigate = useNavigate();
  const [avances, SetAvances] = useState([]);

  useEffect(() => {
    chargueAdvances(verificarExpiracionToken, navigate, tuToken, SetAvances);
  }, []);
  const handleClick = (item) => {
    localStorage.setItem("id_ruta", item.id_ruta);
    localStorage.setItem("id_avance", item.id_avance);
  };
  return (
    <div className="container">
      <div className="row">
        {avances.map((item, index) => (
          <div
            key={index}
            className="col-md-4"
            onClick={() => {
              handleClick(item);
            }}
          >
            <Card
              Title={item.titulo}
              teacher={item.id_ruta}
              page={"entregasPage"}
              owner={item.fecha_creacion}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default CardAvance;
