import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";

import "../../styles/home.css";

export const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { actions } = useContext(Context);

  //useEffect(() => {
  // console.log(name, email, password);
  //}, [name, email, password]);

  return (
    <div>
      <form
        className="row g-3"
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
      </form>
    </div>
  );
};
export default FormularioRegistro;
