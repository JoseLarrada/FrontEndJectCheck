import React, { useState, useEffect,useRef} from 'react';
import '../styles/formregistro.css'
import log from '../LogoJ.jpg'
function FormRegistro() {
  //Traer Datos de los departamentos
  const [departamentos, setDepartamentos] = useState([]);
  const [selectedDepartment, setSelectedDepartment] = useState('');
  const [selectedCity, setselectedCity] = useState('');

  const handleDepartmentChange = (event) => {
    // Obtener el valor actual seleccionado
    const selectedValue = event.target.value;
    setSelectedDepartment(selectedValue);
    receiveCities(selectedValue);
  };
  const handleCityChange = (event) => {
    // Obtener el valor actual seleccionado
    const selectedValuecity = event.target.value;
    setselectedCity(selectedValuecity);
    localStorage.setItem('city',selectedValuecity);
  };
  useEffect(() => {
    receivedepartment();
    receiveCities(); 
  }, []);
  const receivedepartment = async () => {
    try{
        const response = await fetch('http://localhost:8080/api/v1/auth/getdepartmen', {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json'
            }
          });
          if (response.ok) {
            const userData = await response.json();
            setDepartamentos(userData);
            console.log(userData);
        } else {
            console.error('Error al cargar los datos:', response.statusText);
        }
    } catch (error) {
        console.error('Error de red:', error);
    }
  }

  //Lo mismo para las ciudades
  const [ciudades, setCiudades] = useState([]);
  const receiveCities = async (namedepartment) => {
    try{
        const response = await fetch(`http://localhost:8080/api/v1/auth/getCity/${namedepartment}`, {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json'
            }
          });
          if (response.ok) {
            const userData = await response.json();
            setCiudades(userData);
            console.log(userData);
        } else {
            console.error('Error al cargar los datos:', response.statusText);
        }
    } catch (error) {
        console.error('Error de red:', error);
    }
  }

  //Llenar Datos del registro
  const names=useRef();
  const lastname=useRef();
  const id=useRef();
  const email=useRef();
  const Registrar= async () => {
    try {
      const response = await fetch('http://localhost:8080/api/v1/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          id: id.current.value,
          username: localStorage.getItem('username'),
          password: localStorage.getItem('password'),
          name: names.current.value,
          lastname: lastname.current.value,
          city: localStorage.getItem('city'),
          email: email.current.value,
          profile: 1
        })
      });
  
      console.log(response);
  
      if (response.ok) {
        const data = await response.json();
        alert(data);
        localStorage.removeItem('username');
        localStorage.removeItem('password');
        localStorage.removeItem('city');
      }else{
        const errorData = await response.json();
        alert(errorData.token);
      } 
    } catch (error) {
      alert('Error de red:', error);
      // Puedes mostrar un mensaje de error al usuario aquí si lo deseas
    }
  };


  return (
    <div class="container" className='fondo'>
      <div class="background">
        <section className='inputs'>
          <div className='move'>
            <img className='logo' src={log} alt="" />
          </div>
          <input type="text" class="form-control direccion" id="validationDefault01" ref={names} placeholder='Nombres'required />
          <input type="text" class="form-control direccion" id="validationDefault02" ref={lastname} placeholder='Apellido'required />
          <input type="text" class="form-control direccion" id="validationDefault03" ref={id} placeholder='Cedula o T.I'required />
          
          <select class="form-select direccion" id="validationDefault04" onChange={handleDepartmentChange} value={selectedDepartment} required>
          <option selected disabled value="">Departamento...</option>
            {departamentos.map((departamento, index) => (
              <option key={index}>{departamento}</option>
            ))}
          </select>
          <select class="form-select direccion" id="validationDefault05" onChange={handleCityChange} value={selectedCity} required>
            <option selected disabled value="">Ciudad de residencia...</option>
            {ciudades.map((ciudad, index) => (
              <option key={index}>{ciudad}</option>
            ))}
          </select>
          <input type="email" placeholder='Correo' class="form-control direccion correo" id="validationDefault04" ref={email} required />
          <button type="button" class="btn btn-primary movimientos" onClick={()=> Registrar()}>Guardar</button>
        </section>
      </div>
    </div>
  
  )
}

export default FormRegistro