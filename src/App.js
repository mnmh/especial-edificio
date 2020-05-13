import React from 'react';
import SimpleBar from 'simplebar-react';
import './estilos/source.scss';

import Cabezote_01 from './componentes/Cabezote_01';
import Titulo from './componentes/Titulo';
import Espacio from './componentes/Espacio';
import Texto from './componentes/Texto';
import Texto2 from './componentes/Texto2';
import Texto3 from './componentes/Texto3';
import ThreeView from './componentes/ThreeView';
import Panorama from './componentes/Panorama';
import portada from './img/edificio_render.jpg';
import modelo from './modelo/edificio_2.glb';

function App() {
  return (
    <div className="App">
      {/* <SimpleBar style={{ height: '100vh' }}> */}
      <ThreeView modelo={modelo} />
      <Titulo titulo={"El edificio para la memoria y la reconciliación"} />
      <Texto />
      <Panorama />
      <Espacio id="primer_marcador" />
      <Espacio id="" />
      <Texto2 />
      <Espacio id="" />
      <Texto3 />
      <Espacio id="separar" />
      <Espacio id="" />
      <Espacio id="" />
      <Espacio id="" />
      <Espacio id="piso_tres" />
      {/* </SimpleBar> */}
    </div>
  );
}

export default App;
