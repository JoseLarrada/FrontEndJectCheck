import Card from '../Components/Card.js'
import { Link } from 'react-router-dom';


export function getnamestate(idestado) {
    switch(idestado){
      case 1: 
        return "En proceso";
      case 2: 
        return "Completado";
      case 3:
        return "Calificado";
      case 4:
        return "No completado";
      case 5:
        return "Pendiente";
      case 6:
        return "Rechazado";
      case 7:
        return "Entrega Pendiente";
    }
}

export const handleClickAssingment = (item,setViewInfo,setViewCar) => {
    localStorage.setItem("id_Entrega", item.id_entrega);
    statesViews(setViewInfo,setViewCar,true,false);
};
export const handleClickProjects = (item,setViewInfo,setViewCar) => {
    localStorage.setItem("id_ruta", item.id_ruta);
    statesViews(setViewInfo,setViewCar,true,false);
};

export const handleCloseViews = (setViewInfo,setViewCar) =>{
  statesViews(setViewInfo,setViewCar,false,true);
}

const statesViews = (setViewInfo,setViewCar,value1,value2)=>{
  setViewInfo(value1);
  setViewCar(value2);
}
export const handleClickAdvances = (item,setViewCar) => {
    localStorage.setItem("id_avance", item.id_avance);
    setViewCar(false)
};

export const rendercard=(item,page)=>{
    //Verificar si las tarjetas son para entregas o proyectos y avances
    if(item.id_entrega!=null){
        return <Card
              Title={item.comentario}
              teacher={item.calificacion}
              owner={item.id_entrega}
            />
    }else if(item.idEstado===5 || item.idEstado===6){
      return <Card
              Title={item.titulo}
              teacher={item.descripcion}
              owner={getnamestate(item.idEstado)}
              //renderComponent={<ViewInfoProject/>}
          />

    }else{
      return (
        <Link to={`/${page}/${getnamestate(item.idEstado)}`}>
            <Card
              Title={item.titulo}
              teacher={item.descripcion}
              owner={getnamestate(item.idEstado)}
          />
        </Link>
      )
    }
  }