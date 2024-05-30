import Card from '../Components/Card.js'
import { Link } from 'react-router-dom';
import ViewInfoProject from '../Components/ViewInfoProject'

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
    }
}

export const handleClickAssingment = (item) => {
    localStorage.setItem("id_Entrega", item.id_entrega);
};
export const handleClickProjects = (item,setViewInfo,setViewCar) => {
    localStorage.setItem("id_ruta", item.id_ruta);
    setViewInfo(true);
    setViewCar(false);
};
export const handleClickAdvances = (item,setViewCar) => {
    localStorage.setItem("id_ruta", item.id_ruta);
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
    }else if(item.idEstado===5){
      return <Card
              Title={item.titulo}
              teacher={item.descripcion}
              owner={getnamestate(item.idEstado)}
              renderComponent={<ViewInfoProject/>}
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