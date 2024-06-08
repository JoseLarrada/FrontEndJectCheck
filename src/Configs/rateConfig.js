import {ratePersitence} from '../controller/RateController'
import verificarExpiracionToken from '../Configs/verificarExpiracionToken '
import {customMessage} from '../Configs/MessageViews'
export const toogleFunctionRate= async (action,navigate,valueRate,comment,setTitle,setMessage,setMostrarDialogo)=>{
    if(action==='Crear Calificacion'){
       const result = await ratePersitence(verificarExpiracionToken,navigate,localStorage.getItem('token'),valueRate,comment,"http://localhost:8080/api/v1/rate","POST")
       customMessage(result,setTitle,setMessage,setMostrarDialogo)
    }else{
        const result = await ratePersitence(verificarExpiracionToken,navigate,localStorage.getItem('token'),valueRate,comment,"http://localhost:8080/api/v1/rate/update","PUT")
        customMessage(result,setTitle,setMessage,setMostrarDialogo)
    }
}
export const handleCommentChange = (event,setImportData) => {
    setImportData(event.target.value);
};