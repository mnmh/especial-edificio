import React from 'react';
import './estilos/source.scss';
import Cabezote_01 from './componentes/Cabezote_01';
import ThreeView from './componentes/ThreeView';
import portada from './img/edificio_render.jpg';

function App() {
  return (
    <div className="App">
      <ThreeView obj={modelo}/>
      <Cabezote_01 img={portada} />
      <Cabezote_01 img={portada} />
    </div>
  );
}

export default App;
