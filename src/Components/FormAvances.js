import React, { useRef } from "react";
import verificarExpiracionToken from "../Configs/verificarExpiracionToken .js";
import "../styles/advances.css";
import { saveAdvance, updateadvance } from "../controller/AdvanceController.js";
import { useNavigate } from "react-router-dom";
function FormAvances({ tittle, action }) {
  const title = useRef();
  const descripcion = useRef();
  const rubric = useRef();
  const navigate = useNavigate();
  const tuToken = localStorage.getItem("token");

  return (
    <section class="form-register">
      <h4>{tittle}</h4>
      <input
        class="controls"
        type="text"
        ref={title}
        placeholder="Ingrese el titulo"
      />
      <textarea name="description" id="" class="controls"
        type="text"
        ref={descripcion}
        placeholder="Ingrese la descripcion"></textarea>
      <input
        class="controls"
        type="text"
        ref={rubric}
        placeholder="Ingrese Rubrica"
      />
      <button
        type="submit"
        class="botons"
        onClick={() => {
          action === "Guardar Avance"
            ? saveAdvance(
                verificarExpiracionToken,
                navigate,
                tuToken,
                title.current.value,
                descripcion.current.value,
                rubric.current.value
              )
            : updateadvance(
                verificarExpiracionToken,
                navigate,
                tuToken,
                title.current.value,
                descripcion.current.value,
                rubric.current.value
              );
        }}
      >
        {action}
      </button>
    </section>
  );
}

export default FormAvances;
