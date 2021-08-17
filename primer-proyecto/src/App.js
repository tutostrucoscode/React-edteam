import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import "bootstrap-social/bootstrap-social.css";
import "./css/tutosgrid.css";
import Curso from "./Curso";

const App = () => (
  <>
    <div className="jumbotron jumbotron-fluid">
      <div className="container">
        <h1 className="display-4">Cursos de EDteam</h1>
        <p className="lead">Tu futuro te esta esperando</p>
      </div>
    </div>
    <div className="container">
      <div className="row row-cols-md-3">
        <Curso title="React desde cero" price={20} />
      </div>
    </div>
  </>
);

export default App;

//Reglas JSX
//1: Toda etiqueta debe createPartialResponse
//2: Los componentes deben devolver UN solo elemento padre
//3: Apoyarse de los Fragment cuando necesito devolver 2 elementos
//4: Fragment => <> hijos </>
//5: img siempre se cierra
//6: class => className
//7: for => HtmlFor
//8: No if, else, while
