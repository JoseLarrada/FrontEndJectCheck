import SearchUser from '../Components/searchUser.js'
import {findTeacher,findStudent,addProject,updateProject} from '../controller/ProjectController'

export const toogleFindTeache = (toggleFindTeacher,viewSearch,token,verificarExpiracionToken,navigate,setText,role,find)=>{

    return <div>
       {viewSearch && <SearchUser 
                findUser={(nombre, setDatos) => 
                    find(nombre, setDatos, token, verificarExpiracionToken, navigate)
                } 
                paragraph={`Encuentra al ${role} que está a cargo de la materia`}
                closeForm={toggleFindTeacher}
                setText={setText}
        />}
    </div>
}

export const renderToogle =(toggleFindTeacher,viewSearch,token,verificarExpiracionToken,navigate,setText,setTextStudent,setTextStudent2,role)=>{
    switch (role){
        case 'docente':
            return toogleFindTeache(toggleFindTeacher,viewSearch,token,verificarExpiracionToken,navigate,setText,role,findTeacher)
        case 'integrante 1':
            return toogleFindTeache(toggleFindTeacher,viewSearch,token,verificarExpiracionToken,navigate,setTextStudent,role,findStudent)
        case 'integrante 2':
            return toogleFindTeache(toggleFindTeacher,viewSearch,token,verificarExpiracionToken,navigate,setTextStudent2,role,findStudent)
        default :
            alert('Ninguna opcion seleccionada');
            break;
    }
}
