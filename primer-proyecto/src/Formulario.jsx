import React, { Component } from "react";

class Formulario extends Component {
  constructor(props) {
    super(props);

    this.state = {
      nombre: "",
      correo: "",
    };

    this.cambiarNombre = this.cambiarNombre.bind(this);
    this.cambiarCorreo = this.cambiarCorreo.bind(this);
  }

  cambiarNombre(e) {
    this.setState({ nombre: e.target.value });
  }

  cambiarCorreo(e) {
    this.setState({ correo: e.target.value });
  }

  render() {
    return (
      <>
        <h1>Formulario {this.props.name}</h1>
        <br />
        <form id="elemento">
          <div className="row">
            <div className="col-6">
              <div className="form-group">
                <label>Nombre Completo</label>
                <br />
                <input type="text" onChange={this.cambiarNombre} />
              </div>
            </div>
            <div className="col-6">
              <div className="form-group">
                <label>Correo Electronico</label>
                <br />
                <input type="email" onChange={this.cambiarCorreo} />
              </div>
            </div>
          </div>
        </form>
        <div>
          <h2>{`Hola ${this.state.nombre}`}</h2>
          <span>{`Tu correo es: ${this.state.correo}`}</span>
        </div>
      </>
    );
  }

  componentDidMount() {
    let elemnto = document.getElementById("elemento");
    console.log(elemnto);
  }
}
export default Formulario;
