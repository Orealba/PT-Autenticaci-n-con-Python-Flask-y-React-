import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import "../../styles/home.css";

export const Home = () => {
  const { store, actions } = useContext(Context);

  return (
    <div>
      <div>
        <h1 className="titulo-home">Bienvenido</h1>
      </div>
      <div className="botones__home">
        <Link to="/registro">
          <button className="boton__registro">Registrarse</button>
        </Link>
        <Link to="/InicioSesion">
          <button className="boton__inicio__sesion">Iniciar Sesión</button>
        </Link>
      </div>
    </div>
  );
};
