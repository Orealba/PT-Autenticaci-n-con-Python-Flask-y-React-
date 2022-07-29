import React, { useContext } from "react";
import FormularioInicio from "../component/FormularioInicio";
import "../../styles/InicioSesion.css";

import { Link } from "react-router-dom";

export const InicioSesion = () => {
  return (
    <div className="formulario__InicioSesion">
      <h1 className="titulo__inicio__sesion"> INICIAR SESIÓN</h1>
      <FormularioInicio />
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
