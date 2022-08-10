import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import "../../styles/home.css";
import "../../styles/Registro.css";

export const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { actions } = useContext(Context);
  useEffect(() => {
    console.log(email, password);
  }, [email, password]);

  return (
    <div>
      <h1 className="titulo__registrarse__registro">Registrarse</h1>
      <form
        className="row g-3 formulario__registro"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <div className="mb-6">
          <label for="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            onChange={(e) => setEmail(e.target.value)}
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-6">
          <label for="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className="col-12">
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="invalidCheck2"
              required
            />
            <label className="form-check-label" for="invalidCheck2">
              Agree to terms and conditions
            </label>
          </div>
        </div>
        <div className="col-12">
          <button
            className="btn btn-primary"
            type="submit"
            onClick={() => {
              actions.register(email, password);
            }}
          >
            Send
          </button>
        </div>

        <div>
          <Link to="/">
            <button className="boton_home">Volver al inicio</button>
          </Link>

          <Link to="/InicioSesion">
            <button className="boton__inicio__sesion">Iniciar Sesión</button>
          </Link>
        </div>
      </form>
    </div>
  );
};
export default Register;
