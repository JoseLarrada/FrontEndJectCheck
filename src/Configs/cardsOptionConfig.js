import Card from '../Components/Card.js'
import { Link } from 'react-router-dom';
import viewInfoProject from '../Components/ViewInfoProject.js' 

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
export const handleClickProjects = (item) => {
    localStorage.setItem("id_ruta", item.id_ruta);
};
export const handleClickAdvances = (item) => {
    localStorage.setItem("id_ruta", item.id_ruta);
    localStorage.setItem("id_avance", item.id_avance);
};

export const rendercard=(item,page)=>{
    //Verificar si las tarjetas son para entregas o proyectos y avances
    if(item.id_entrega!=null){
        return <Card
              Title={item.comentario}
              teacher={item.calificacion}
              owner={item.id_entrega}
              clickEvent={()=>alert('Hola')}
            />
    }else if(item.idEstado===5){
      return <Card
              Title={item.titulo}
              teacher={item.descripcion}
              clickEvent={()=>{alert('Hola')}}
              owner={getnamestate(item.idEstado)}
          />

    }else{
      return (
        <Link to={`/${page}/${getnamestate(item.idEstado)}`}>
            <Card
              Title={item.titulo}
              teacher={item.descripcion}
              clickEvent={()=>{}}
              owner={getnamestate(item.idEstado)}
          />
        </Link>
      )
    }
  }