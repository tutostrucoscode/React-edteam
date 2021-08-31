import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import "bootstrap-social/bootstrap-social.css";
import "./css/tutosgrid.css";
import Curso from "./Curso";
import Banner from "./Banner";
import Formulario from "./Formulario";

const App = () => (
  <>
    <Banner />
    <div className="container">
      <Formulario name="EDteam" />
    </div>
  </>
);

export default App;
