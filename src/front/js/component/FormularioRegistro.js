import React, { useContext } from "react";
import { Context } from "../store/appContext";

import "../../styles/home.css";

export const FormularioRegistro = () => {
  return (
    <div>
      <form class="row g-3">
        <div class="col-md-4">
          <label for="validationDefault01" class="form-label">
            First name
          </label>
          <input
            type="text"
            class="form-control"
            id="validationDefault01"
            value="Mark"
            required
          />
        </div>
        <div class="col-md-4">
          <label for="validationDefault02" class="form-label">
            Last name
          </label>
          <input
            type="text"
            class="form-control"
            id="validationDefault02"
            value="Otto"
            required
          />
        </div>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">
            Email address
          </label>
          <input
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
          <div id="emailHelp" class="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">
            Password
          </label>
          <input
            type="password"
            class="form-control"
            id="exampleInputPassword1"
          />
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">
            Repeat Password
          </label>
          <input
            type="password"
            class="form-control"
            id="exampleInputPassword1"
          />
        </div>

        <div class="col-12">
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="invalidCheck2"
              required
            />
            <label class="form-check-label" for="invalidCheck2">
              Agree to terms and conditions
            </label>
          </div>
        </div>
        <div class="col-12">
          <button class="btn btn-primary" type="submit">
            Submit form
          </button>
        </div>
      </form>
    </div>
  );
};
export default FormularioRegistro;
