import React from 'react';
import SimpleBar from 'simplebar-react';
import './estilos/source.scss';

import Cabezote_01 from './componentes/Cabezote_01';
import Titulo from './componentes/Titulo';
import Espacio from './componentes/Espacio';
import Texto from './componentes/Texto';
import Texto2 from './componentes/Texto2';
import ThreeView from './componentes/ThreeView';
import Panorama from './componentes/Panorama';
import portada from './img/edificio_render.jpg';
import modelo from './modelo/edificio.glb';

function App() {
  return (
    <div className="App">
      {/* <SimpleBar style={{ height: '100vh' }}> */}
      <ThreeView modelo={modelo} />
      <Titulo titulo={"Museo de Memoria de Colombia"} />
      <Texto />
      <Panorama />
      <Espacio id="primer_marcador" />
      <Espacio id="" />
      <Texto2 />
      <Espacio id="" />
      <Texto2 />
      {/* </SimpleBar> */}
    </div>
  );
}

export default App;
