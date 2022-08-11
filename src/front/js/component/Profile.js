import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
export const Profile = () => {
  const { store, actions } = useContext(Context);

  useEffect(() => {
    actions.privado();
  }, []);
  return (
    <div>
      <h1>
        {store.permiso ? `Bienvenido ${store.user}` : "404 la página no existe"}
      </h1>
      {store.permiso ? (
        <Link to="/">
          <button
            className="boton__cerrar__sesion"
            onClick={() => {
              actions.cerrarSesion();
            }}
          >
            Cerrar Sesión
          </button>
        </Link>
      ) : (
        <Link to="/iniciosesion">
          <button className="boton__iniciar__sesion">inicio Sesión</button>
        </Link>
      )}
    </div>
  );
};

export default Profile;
