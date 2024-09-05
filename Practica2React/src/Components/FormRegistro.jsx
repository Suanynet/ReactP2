import React, { useState, useEffect } from "react";
import "../Styles/FormRegistro.css"
import  PostUsers  from "../Service/PostUsers"
import GetUsers from "../Service/GetUsers"
import { useNavigate } from "react-router-dom";

function FormRegistro() {

  const [username, setUsername] = useState('');
  const [gmail, setGmail] = useState ('');
  const [pass, setPass] = useState('');
  const [saludo, setSaludo] = useState('');
  const [users, setUsers] = useState([]);
  const Navegate = useNavigate();


    useEffect(() => {
      const fetchUsers = async () => {
        const data = await GetUsers();
       
        
        setUsers(data);
   
      };
      fetchUsers();
    }, []);


  function cargarUsser(event) {
    setUsername(event.target.value);
  }

  function cargarGmail(event) {
    setGmail(event.target.value);
  }

  function cargarPass(event) {
    setPass(event.target.value)
  }

  const cargar = () => {


    if (username === "" || gmail === "" || pass === "" ) {

      setSaludo ("Ingrese sus datos")
      
    }

    
    const listaV = users.filter(Users => Users.gmail === gmail )

    console.log(listaV);

    ///realizar validaciones antes de guardar
   
    if (listaV < 1) {
      PostUsers (username, gmail, pass)
     Navegate("/Sesion");

    }else{
      setSaludo("Esta cuenta ya se encuentra registrada")
    }
    

  }


    return (
        <div>
          <div className="register">
            <h1>RESGISTRO</h1>

            <label htmlFor="username"><h2>NOMBRE DE USUARIO</h2></label>
            <input type="text" placeholder="Ingrese su Nombre" value={username} onChange={cargarUsser}/>
            <br />
            <label htmlFor="gamil"><h2>CORREO ELECTRONICO</h2></label>
            <input type="text" placeholder="Ingrese su Correo" value={gmail} onChange={cargarGmail}/>
            <br />
            <label htmlFor="pass"><h2>CONTRASEÑA</h2></label>
            <input type="text" placeholder="Ingrese su Contraseña" value={pass} onChange={cargarPass}/>
            <br />
            <br />
            <br />
            <button onClick={cargar} className="botonn registrar">REGISTRARSE</button>
            <p>{saludo}</p>
          </div>
        </div>
    )
}

export default FormRegistro