import React, { useState } from "react";
import "../Styles/FormSesion.css"
import { useNavigate } from "react-router-dom";

function FormSesion() {

  const [gmail, setGmail] = useState ('');
  const [pass, setPass] = useState('');
  const [saludo, setSaludo] = useState('');
  const navigate = useNavigate();

  function cargarGmail(event) {
    setGmail(event.target.value);
  }

  function cargarPass(event) {
    setPass(event.target.value)
  }


///aqui va el useffect con el llamado al servidor que debe pasar por um hook

  useEffect(() => {
    const fetchUsers = async () => {
      const data = await GetUsers();
     
      
      setUsers(data);
 
    };
    fetchUsers();
  }, []);




  function cargarGmail(event) {
    setGmail(event.target.value);
  }

  function cargarPass(event) {
    setPass(event.target.value)
  }

  //aqui se valida si esta registrado o no

  const cargar = () => {

    const listaU = users.find(Users => Users.gmail === gmail && Users.pass === pass )

    if (!listaU) {
      navigate("/Home");
    }else{
      setSaludo("Datos no encontrados")
    }
  
  }
  
    return (
        <div>
          <div className="inicio">
            <h1>INICIO SESION</h1>

            <label htmlFor="gamil"><h2>CORREO ELECTRONICO</h2></label>
            <input type="text" placeholder="Ingrese su Correo" value={gmail} onChange={cargarGmail}/>
            <br />
            <br />
            <label htmlFor="pass"><h2>CONTRASEÑA</h2></label>
            <input type="text" placeholder="Ingrese su Contraseña" value={pass} onChange={cargarPass}/>
            <br />
            <br />
            <button className="boton iniciar" onClick={cargar}></button>
          </div>
        </div>
    )
}

export default FormSesion