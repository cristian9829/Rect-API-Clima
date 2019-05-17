import React from 'react';
import Header from './componentes/Header';
import Formulario from './componentes/Formulario';

class App extends React.Component {

  state = {
    error: false
  }

  datosConsulta = (respuesta) =>{
    if(respuesta.ciudad === '' || respuesta.pais === ''){
      this.setState({
        error: true
      })     
    }else{
      
    }
  }

  render(){
    return (
      <div className="App">
        <Header
          titulo="Clima"
        />
        <Formulario
          datosConsulta = {this.datosConsulta}
        />
      </div>
    );
  }
}

export default App;
