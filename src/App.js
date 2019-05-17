import React from 'react';
import Header from './componentes/Header';
import Formulario from './componentes/Formulario';

function App() {
  return (
    <div className="App">
      <Header
        titulo="Clima"
      />
      <Formulario/>
    </div>
  );
}

export default App;
