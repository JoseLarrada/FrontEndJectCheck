import React,{useState} from 'react'
import "../styles/dropdowns.css"
import FormEntregas from '../Components/FormEntregas'
function Dropdowns({onOptionClick}) {
  const [mostrarFormAdd, setMostrarFormAdd] = useState(false);
  const [mostrarFormUpd, setMostrarFormUpd] = useState(false);
  const [mostrarFormDel,setmostrarFormDel]=useState(false);
  const toggleFormAdd = () => {
    setMostrarFormAdd(!mostrarFormAdd);
    setMostrarFormUpd(false);
    setmostrarFormDel(false);
    onOptionClick()
  };

  const toggleFormUpd = () => {
    setMostrarFormUpd(!mostrarFormUpd);
    setMostrarFormAdd(false);
    setmostrarFormDel(false);
    onOptionClick()
  };

  const toggleFormDel = () => {
    setmostrarFormDel(!mostrarFormDel);
    setMostrarFormAdd(false);
    setMostrarFormUpd(false);
    onOptionClick()
  };
  return (
    <div>
        <div className="d-flex flex-column flex-md-row p-4 gap-4 py-md-5 align-items-center justify-content-center tooglemove">
      <ul className="dropdown-menu position-static d-grid gap-1 p-2 rounded-3 mx-0 shadow w-220px" data-bs-theme="light">
        <li><a className="dropdown-item rounded-2 active">Gestión de entregas</a></li>
        <li onClick={toggleFormAdd}>
          <a className="dropdown-item rounded-2">Crear Entrega</a>
        </li>
        <li onClick={toggleFormUpd}>
          <a className="dropdown-item rounded-2">Modificar Entrega</a>
        </li>
        <li onClick={toggleFormDel}>
          <a className="dropdown-item rounded-2">Eliminar Entrega</a>
        </li>
      </ul>
      {mostrarFormAdd && <FormEntregas tittle={"Añadir Entrega"} action={"Añadir"} />}
      {mostrarFormUpd && <FormEntregas tittle={"Modificar Entrega"} action={"Modificar"} />}
      {mostrarFormDel && <FormEntregas tittle={"Eliminar Entrega"} action={"Eliminar"} />}
    </div>
        
    </div>
  )
}

export default Dropdowns
