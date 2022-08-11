import Profile from "../component/Profile.js";

import React, { useContext } from "react";
import { Context } from "../store/appContext";

export const Privada = () => {
  const { actions } = useContext(Context);
  return (
    <div>
      <Profile />
    </div>
  );
};

export default Privada;
