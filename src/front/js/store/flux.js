import { Link } from "react-router-dom";

const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      permiso: false,
      user: "",
      message: null,
      demo: [
        {
          title: "FIRST",
          background: "white",
          initial: "white",
        },
        {
          title: "SECOND",
          background: "white",
          initial: "white",
        },
      ],
    },
    actions: {
      // Use getActions to call a function within a fuction
      exampleFunction: () => {
        getActions().changeColor(0, "green");
      },

      cerrarSesion: () => {
        sessionStorage.setItem("token", "");
      },

      privado: () => {
        var myHeaders = new Headers();
        myHeaders.append(
          "Authorization",
          `Bearer ${sessionStorage.getItem("token")}`
        );

        var requestOptions = {
          method: "GET",
          headers: myHeaders,
          redirect: "follow",
        };

        fetch(
          "https://3001-orealba-ptautenticacinc-vw1wp2dfd7d.ws-eu59.gitpod.io/api/privada",
          requestOptions
        )
          .then((response) => response.json())
          .then((result) => {
            console.log(result);
            setStore({ permiso: result.permiso });
            setStore({ user: result.email });
          })
          .catch((error) => console.log("error", error));
      },

      login: (email, password) => {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
          email: email,
          password: password,
        });

        var requestOptions = {
          method: "POST",
          headers: myHeaders,
          body: raw,
          redirect: "follow",
        };

        fetch(
          "https://3001-orealba-ptautenticacinc-vw1wp2dfd7d.ws-eu59.gitpod.io/api/login",
          requestOptions
        )
          .then((response) => response.json())
          .then((result) => {
            console.log(result.access_token);
            // aquí vas a redirigir al inicio o saludo

            sessionStorage.setItem("token", result.access_token);
          })
          .catch((error) => console.log("error", error));
      },

      register: (email, password) => {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
          email: email,
          password: password,
        });

        var requestOptions = {
          method: "POST",
          headers: myHeaders,
          body: raw,
          redirect: "follow",
        };

        fetch(
          "https://3001-orealba-ptautenticacinc-vw1wp2dfd7d.ws-eu59.gitpod.io/api/register",
          requestOptions
        )
          .then((response) => response.text())
          .then((result) => console.log(result))
          .catch((error) => console.log("error", error));
      },

      getMessage: async () => {
        try {
          // fetching data from the backend
          const resp = await fetch(process.env.BACKEND_URL + "/api/hello");
          const data = await resp.json();
          setStore({ message: data.message });
          // don't forget to return something, that is how the async resolves
          return data;
        } catch (error) {
          console.log("Error loading message from backend", error);
        }
      },
      changeColor: (index, color) => {
        //get the store
        const store = getStore();

        //we have to loop the entire demo array to look for the respective index
        //and change its color
        const demo = store.demo.map((elm, i) => {
          if (i === index) elm.background = color;
          return elm;
        });

        //reset the global store
        setStore({ demo: demo });
      },
    },
  };
};

export default getState;
