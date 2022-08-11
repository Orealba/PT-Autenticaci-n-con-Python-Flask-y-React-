import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";

export const Profile = () => {
  const { store, actions } = useContext(Context);

  useEffect(() => {
    actions.privado();
  }, []);
  return (
    <h1>
      {store.permiso ? `Bienvenido ${store.user}` : "404 la página no existe"}
    </h1>
  );
};

export default Profile;
