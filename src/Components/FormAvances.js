import React, { useRef,useState } from "react";
import verificarExpiracionToken from "../Configs/verificarExpiracionToken .js";
import "../styles/advances.css";
import { saveAdvance, updateadvance } from "../controller/AdvanceController.js";
import { useNavigate } from "react-router-dom";
import {uploadRubrics,deleteRubric} from '../controller/FilesUploadController'
import FilesComponents from '../Components/FilesComponents.js'
function FormAvances({ tittle, action }) {
  const title = useRef();
  const descripcion = useRef();
  const navigate = useNavigate();
  const tuToken = localStorage.getItem("token");
  const [viewFormUpload,setViewFormUpload] = useState(false)
  const [rubrics,setRubrics] = useState([])


  return (
    <>
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
        <button class="controls controlsbuttom" onClick={()=>{setViewFormUpload(!viewFormUpload)}}>Añadir Rubrica</button>
        <button
          type="submit"
          class="botons"
          onClick={() => {
            console.log(rubrics);
            action === "Guardar Avance"
              ? saveAdvance(
                  verificarExpiracionToken,
                  navigate,
                  tuToken,
                  title.current.value,
                  descripcion.current.value,
                  rubrics
                )
              : updateadvance(
                  verificarExpiracionToken,
                  navigate,
                  tuToken,
                  title.current.value,
                  descripcion.current.value
                );
          }}
        >
          {action}
        </button>
      </section>
      {viewFormUpload&&<FilesComponents uploadFunction={uploadRubrics} deleteFunction={deleteRubric} setList={setRubrics}/>}
    </>
  );
}

export default FormAvances;
