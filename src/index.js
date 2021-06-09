import { StrictMode } from "react";
import ReactDOM from "react-dom";
import Mainapp from "./Mainapp";
import Login from "./components/Login";
import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    {/* <Mainapp /> */}
    <App />
  </StrictMode>,
  rootElement
);
