import React, {Component} from 'react';

export default class Clima extends Component{

  mostrarResultado = () =>{
    //Obtener los datos de la consulta

    const {name, weather, main} = this.props.resultado;

    if(!name || !weather || !main) return null; 

    const kelvin = 273.15;
    
    return(
      <div className="row">
        <div className="resultado col s12 m8 l6 offset-m2 offset-13">
          <div className="card-panel light-blue align-center">
            <span className="white-text">
              <h2>Resultado Clima de: {name}</h2>
              <p className="temperatura">
                Actual: { (main.temp - kelvin).toFixed(2) } &deg;C
              </p>
              <p>Max. {main.temp_max - kelvin} &deg;C</p>
              <p>Min. {main.temp_min - kelvin} &deg;C</p>
            </span>
          </div>
        </div>
      </div>
    )
  }

  render(){
    return(
      <div className="container">
        {this.mostrarResultado}
      </div>
    )
  }
}