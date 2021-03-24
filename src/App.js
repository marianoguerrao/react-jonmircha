import logo from "./logo.svg";
import "./App.css";
import Example from "./components/Example";
import Propiedades from "./components/Props";
import Estado from "./components/State";
import Condicional from "./components/ConditionalRendering";
import Elemento from "./components/ElementRendering";
import Evento from "./components/Events";
import EventTypes from "./components/EventTypes";
import Padre from "./components/ComponentsCommmunication";
import Ciclo from "./components/LifeCycle";
import Asincrona from "./components/AjaxApi";
import Hooks from "./components/UseState";
import Effect from "./components/UseEffect";
import RelojHooks from "./components/Hooks";
import Ajax from "./components/HooksAjax";
import Custom from "./components/CustomHook";
import Referencia from "./components/Reference";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Example msg="estoy usando props en un dumb component desestructurado" />
        <Propiedades
          string="Esto es un string"
          num={32}
          bool={true}
          arr={[1, 2, 3]}
          obj={{ nombre: "Mariano", apellido: "Guerra", edad: 32 }}
          reactElement={<h6>Esto es un elemento JSX de React</h6>}
          func={(num) => num * 2}
          reactComponent={<Example msg="Componente pasado como prop" />}
        />
        <Estado
          suma="Presiona aquí para sumar"
          resta="Presiona aquí para restar"
        />
        <Condicional />
        <Elemento />
        <Evento />
        <EventTypes />
        <Padre />
        <Ciclo />
        <Asincrona />
        <Hooks />
        <Effect />
        <RelojHooks />
        <Ajax />
        <Custom />
        <Referencia />
      </header>
    </div>
  );
}

export default App;
