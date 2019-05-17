import React from 'react';
import Header from './componentes/Header';
import Formulario from './componentes/Formulario';
import Error from './componentes/error';

class App extends React.Component {

  state = {
    error: false
  }

  datosConsulta = respuesta =>{
    if(respuesta.ciudad === '' || respuesta.pais === ''){
      this.setState({
        error: true
      })     
    }else{
      console.log('todo Correcto')
    }
  }

  render(){
    const error =  this.state.error

    let resultado;

    if(error){
      resultado = <Error mensaje="Ambos campos son obligatorios"/>
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
