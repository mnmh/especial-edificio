import React from 'react';
import SimpleBar from 'simplebar-react';
import './estilos/source.scss';

import Cabezote_01 from './componentes/Cabezote_01';
import Titulo from './componentes/Titulo';
import Espacio from './componentes/Espacio';
import Texto from './componentes/Texto';
import ThreeView from './componentes/ThreeView';
import portada from './img/edificio_render.jpg';
import modelo from './modelo/edificio.glb';

function App() {
  return (
    <div className="App">
      {/* <SimpleBar style={{ height: '100vh' }}> */}
      <ThreeView modelo={modelo} />
      <Titulo titulo={"Museo de Memoria de Colombia"} />
      <Texto />
      <Espacio />
      <Cabezote_01 img={portada} />
      <Cabezote_01 img='' />
      {/* </SimpleBar> */}
    </div>
  );
}

export default App;
