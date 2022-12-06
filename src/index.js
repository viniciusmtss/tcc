import { StrictMode } from "react";
import ReactDOM from "react-dom";
import './styles.css';
import Routes from "./routes";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <Routes />
  </StrictMode>,
  rootElement
);

