const Home = () => {
  return (
    <div>
      <h1>Bienvenido ParqQ</h1>
      <h2>Ejercicio Parq</h2>
      <ul>
        <li>
          <p>
            Para ver la lista de vihiculos debes crear un usuario, para eso
            usaras el SingIn/SingUp form de aws-cognito, al crear tu usuario
            recibiras un codigo en tu casilla de correo, necesario para
            activarlo.
          </p>
        </li>
        <li>
          <p>
            En la ruta vehicles prodras ver los vehiculos que se encuentran en
            el parqueadero con el boton "pedir tarifas" le envias la lista de
            vehiculos que se encuntran en el paruqeadero al server y este te
            devuelve la misma lista de vehiculos con sus respectivas tarifas.
          </p>
        </li>
        <li>
          <p>
            El frontend esta hcho react, el modal que muestra los vehiculos con
            sus tarifas con un portal de react, autencicacion con aws-cognito,
            el server que ejecuta la funcion calculate esta desplegado con una
            funcion lambda de aws lo que permite una gran escalabilidad sin
            preocuparse por mantener un servidor, esta funcion da vida a un
            servidor express. La api es provehido por aws-api-gateway, que
            genera un evento ante cualquier peticion, este evento activa la
            funcion lambda y responde a las peticiones.
          </p>
        </li>
        <li>
          <p>
            Las peticones a la api se hacen con react-query, un state-server
            manager que permite mantener la data en nuestro cliente actualizada
            sin implementar una logica compleja como la redux.
          </p>
        </li>
        <li></li>
      </ul>
    </div>
  );
};

export default Home;
