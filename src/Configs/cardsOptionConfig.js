import CardNoLink from "../Components/CardWithoutLink.js";
import Card from "../Components/Card";

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
        return <CardNoLink
              Title={item.comentario}
              teacher={item.calificacion}
              owner={item.id_entrega}
            />
    }else{
        return <Card
              Title={item.titulo}
              teacher={item.descripcion}
              page={page}
              owner={getnamestate(item.idEstado)}
            />
    }
}