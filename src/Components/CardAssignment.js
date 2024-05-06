import React, { useState, useEffect } from "react";
import Card from "../Components/CardWithoutLink.js";
import "../styles/Card.css";
import verificarExpiracionToken from "../Configs/verificarExpiracionToken .js";
import { useNavigate } from "react-router-dom";
import {charguedAssignment} from '../controller/AssignmentController'

function CardAssignment() {
  const tuToken = localStorage.getItem("token");
  const navigate = useNavigate();
  const [datos, setDatos] = useState([]);
  
  useEffect(() => {
    charguedAssignment(verificarExpiracionToken, navigate, tuToken, setDatos,localStorage.getItem('id_avance'));
  }, []);
  const handleClick = (item) => {
    localStorage.setItem("id_Entrega", item.id_entrega);
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
              Title={item.comentario}
              teacher={item.calificacion}
              owner={item.id_entrega}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default CardAssignment