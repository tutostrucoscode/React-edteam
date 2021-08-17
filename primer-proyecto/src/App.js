import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import "bootstrap-social/bootstrap-social.css";
import "./css/tutosgrid.css";
import Curso from "./Curso";

const cursos = [
  {
    titulo: "React desde cero",
    image:
      "https://edteam-media.s3.amazonaws.com/courses/small/7204fcde-37aa-49a2-a619-63459f834ada.png",
    price: 30,
    profesor: "Beto Quiroga",
  },
  {
    titulo: "Drupal desde cero",
    image:
      "https://edteam-media.s3.amazonaws.com/courses/small/43973b1c-a8e2-4863-9252-2ae41377cab2.png",
    price: 40,
    profesor: "Beto Quiroga",
  },
  {
    titulo: "Go desde cero",
    image:
      "https://edteam-media.s3.amazonaws.com/courses/small/3ec614b5-a9b7-475c-bf8f-8ba643a129eb.png",
    price: 50,
    profesor: "Alexys Lozada",
  },
  {
    titulo: "Html desde cero",
    image:
      "https://edteam-media.s3.amazonaws.com/courses/small/26557907-0555-427e-a40c-6ff207f98d72.png",
    price: 10,
    profesor: "Alvaro Felipe",
  },
];

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
        {cursos.map((c) => (
          <Curso
            title={c.titulo}
            image={c.image}
            price={c.price}
            profesor={c.profesor}
          />
        ))}
      </div>
    </div>
  </>
);

export default App;
