import React, { useContext } from "react";
import FormularioRegistro from "../component/FormularioRegistro.js";
import "../../styles/Registro.css";

import { Link } from "react-router-dom";

export const Registro = () => {
  return (
    <div className="formulario__registro">
      <h1 className="titulo__registrarse__registro"> REGISTRARSE</h1>
      <FormularioRegistro />
      <Link to="/">
        <button className="boton__home">Volver al inicio</button>
      </Link>
      <Link to="/InicioSesion">
        <button className="boton__inicio__sesion">Iniciar Sesión</button>
      </Link>
    </div>
  );
};
export default Registro;
