import React from "react";
import PropTypes from "prop-types";

const Curso = ({ title, image, price, profesor }) => (
  <>
    <div className="col-md">
      <div className="card rounded-lg">
        <div className="img-container s-ratio-16-9">
          <img src={image} alt={title} />
        </div>
        <div className="card-body">
          <h3 className="card-title text-center">{title}</h3>
          <h6 className="text-center">{`${profesor}`}</h6>
          <button type="button" className="btn btn-outline-success mx-auto d-block">
            {`$ ${price} USD`}
          </button>
        </div>
      </div>
      <br />
    </div>
  </>
);

Curso.propTypes = {
  title: PropTypes.string,
  image: PropTypes.string,
  price: PropTypes.number,
  profesor: PropTypes.string,
};

Curso.defaultProps = {
  title: "No se encontro titulo",
  image:
    "https://lh3.googleusercontent.com/proxy/eA1pkEEJJYXspxeatOGHrFqCZqKJEhsgu-huv_Zigrf6oOS8BathdJq1lkkeaoox_ZFPOC7NGF0IjjQAJOfLKYjQ1OxPCujRReWtrUeOWHcf5bQvpzX5IK454l9x4egX8CoN2DlNuuGbYBh7RFzNSLTbYxjJm_NsezAvdA",
  price: "--",
  profesor: "",
};

export default Curso;
