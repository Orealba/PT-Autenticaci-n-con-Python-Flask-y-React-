import React from "react";
import Login from "../component/Login";
import "../../styles/InicioSesion.css";

import { Link } from "react-router-dom";

export const InicioSesion = () => {
  return (
    <div className="formulario__InicioSesion">
      <h1 className="titulo__inicio__sesion"> INICIAR SESIÓN</h1>
      <Login />
      <Link to="/">
        <button className="boton__home">Volver al inicio</button>
      </Link>
      <Link to="/registro">
        <button className="boton__registro">Registrarse</button>
      </Link>
    </div>
  );
};
export default InicioSesion;
