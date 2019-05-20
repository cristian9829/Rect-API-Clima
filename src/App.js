import React from 'react';
import Header from './componentes/Header';
import Formulario from './componentes/Formulario';
import Clima from './componentes/Clima';
import Error from './componentes/error';

class App extends React.Component {

  state = {
    error: false,
    consulta: {},
    resultado: {}
  }

  componentDidUpdate(prevProps, prevState){
    if(prevState.consulta != this.state.consulta){
      this.consultarApi()

    }
  }

  datosConsulta = respuesta =>{
    if(respuesta.ciudad === '' || respuesta.pais === ''){
      this.setState({
        error: true
      })     
    }else{
      this.setState({
        consulta: respuesta,
        error: false
      })
    }
  }

  consultarApi = () =>{

    const {ciudad, pais} = this.state.consulta  

    //Leer la url y agregar la api key
    const appId = '74d80ae7a17219583e0faa6962b2157f';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${appId}`;
    //Query with fetch api

    fetch(url)
      .then(respuesta =>{
        return respuesta.json();
      })
      .then(datos => {
        this.setState({
          resultado: datos
        })
      })
  }

  render(){
    const error =  this.state.error

    let resultado;

    if(error){
      resultado = <Error mensaje="Ambos campos son obligatorios"/>
    }else{
      resultado = <Clima
        resultado = {this.state.resultado}
      />
    }

    return (
      <div className="App">
        <Header
          titulo="Clima"
        />
        <Formulario
          datosConsulta = {this.datosConsulta}
        />
        {resultado} 
      </div>
    );
  }
}

export default App;
