import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/Registro.css";

import { Link } from "react-router-dom";
import Register from "../component/register.js";
import "../../styles/Registro.css";

export const Registro = () => {
  return (
    <div className="formulario__registro">
      <h1 className="titulo__registrarse__registro"> REGISTRARSE</h1>
      <Register />
      <Link to="/">
        <button className="boton__home">Volver al inicio</button>
      </Link>
      <Link to="/iniciosesion">
        <button className="boton__inicio__sesion">Iniciar Sesión</button>
      </Link>
    </div>
  );
};
export default Registro;
