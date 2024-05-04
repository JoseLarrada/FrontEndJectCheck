import FormProject from '../Components/FormProject'
export const getForm=()=>{
    if(localStorage.getItem('posicion')==1){
        return <FormProject/>
    }else{
      return <h1>Hola</h1>
    }
  }