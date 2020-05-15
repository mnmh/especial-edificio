import React, { Component } from 'react'
import './estilos/source.scss';

import Titulo from './componentes/Titulo';
import Espacio from './componentes/Espacio';
import Texto from './componentes/Texto';
import Texto2 from './componentes/Texto2';
import Texto3 from './componentes/Texto3';
import ThreeView from './componentes/ThreeView';
import Panorama from './componentes/Panorama';
import Tooltip from './componentes/Tooltip';
import modelo from './modelo/edificio_2.glb';
import marcador from './modelo/marcador.glb';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      active: null
    }
  }

  componentDidMount() {
    // var piso_uno_creacion = document.getElementById("piso_uno_creacion").offsetTop;
    var piso_dos_juntar = document.getElementById("piso_dos_juntar").offsetTop;
    var piso_tres_juntar = document.getElementById("piso_tres_juntar").offsetTop;
    var piso_cuatro_juntar = document.getElementById("piso_cuatro_juntar").offsetTop;
    var piso_cinco_juntar = document.getElementById("piso_cinco_juntar").offsetTop;
    var piso_dos_archivo = document.getElementById("piso_dos_archivo").offsetTop;
    var piso_dos_pedagogia = document.getElementById("piso_dos_pedagogia").offsetTop;
    var piso_dos_encuentro = document.getElementById("piso_dos_encuentro").offsetTop;
    var piso_dos_consulta = document.getElementById("piso_dos_consulta").offsetTop;
    var piso_dos_creacion = document.getElementById("piso_dos_creacion").offsetTop;
    var piso_tres_creacion = document.getElementById("piso_tres_creacion").offsetTop;
    var piso_cuatro_creacion = document.getElementById("piso_cuatro_creacion").offsetTop;
    var piso_cinco_duelo = document.getElementById("piso_cinco_duelo").offsetTop;

    var parent = this

    window.addEventListener('scroll', function (e) {
      var mainScroll = window.pageYOffset;

      if (mainScroll > piso_dos_archivo && mainScroll < piso_dos_pedagogia) {
        parent.setState({
          active: 'piso_dos_archivo'
        })
      } else if (mainScroll > piso_dos_pedagogia && mainScroll < piso_dos_encuentro) {
        parent.setState({
          active: 'piso_dos_pedagogia'
        })
      } else if (mainScroll > piso_dos_encuentro && mainScroll < piso_dos_consulta) {
        parent.setState({
          active: 'piso_dos_encuentro'
        })
      } else if (mainScroll > piso_dos_consulta && mainScroll < piso_dos_creacion) {
        parent.setState({
          active: 'piso_dos_consulta'
        })
      } else if (mainScroll > piso_dos_creacion && mainScroll < piso_tres_juntar) {
        parent.setState({
          active: 'piso_dos_creacion'
        })
      } else if (mainScroll > piso_tres_creacion && mainScroll < piso_cuatro_juntar) {
        parent.setState({
          active: 'piso_tres_creacion'
        })
      } else if (mainScroll > piso_cuatro_creacion && mainScroll < piso_cinco_juntar) {
        parent.setState({
          active: 'piso_cuatro_creacion'
        })
      } else if (mainScroll > piso_cinco_duelo) {
        parent.setState({
          active: 'piso_cinco_duelo'
        })
      } else {
        parent.setState({
          active: ''
        })
      }
    })
  }

  render() {
    let tooltip = ''
    if (this.state.active == 'piso_uno_creacion') {
      tooltip = <Tooltip titulo="Piso 1" contenido="Espacios de creación" />
    } else if (this.state.active == 'piso_dos_archivo') {
      tooltip = <Tooltip titulo="Piso 2: lugar de archivo" contenido="El museo albergará el Archivo de los Derechos Humanos, hoy en día una dirección del CNMH, que trabaja en función de reunir, ordenar, clasificar y describir los documentos relativos a la violación de los derechos humanos y el DIH, con el propósito de garantizar su custodia, preservación y su uso por parte de investigadores y público en general." />
    } else if (this.state.active == 'piso_dos_pedagogia') {
      tooltip = <Tooltip titulo="Piso 2: lugar para la investigación y la reflexión pedagógica" contenido="Promoverá la apropiación social de la memoria histórica a partir de acciones pedagógicas y la difusión de productos de memoria. El trabajo con el sector educativo como eje estratégico es y será a partir de redes de maestros y grupos regionales de memoria histórica." />
    } else if (this.state.active == 'piso_dos_encuentro') {
      tooltip = <Tooltip titulo="Piso 2: lugar de reflexión, encuentro y deliberación" contenido="La programación del museo contará con foros, conversatorios  y eventos que fomenten el debate y el análisis. Para ello contará con auditorios, aulas para talleres, salas de reunión, lugares para la congregación de actividades públicas, etc." />
    } else if (this.state.active == 'piso_dos_consulta') {
      tooltip = <Tooltip titulo="Piso 2: lugar de información y consulta" contenido="El Museo tendrá su propio centro de documentación abierto al público con acceso a libros, revistas, objetos, fotografías y documentos; los documentos del archivo serán la fuente primaria para el estudio de la historia reciente de Colombia, guardando las debidas reservas de Ley." />
    } else if (this.state.active == 'piso_dos_creacion') {
      tooltip = <Tooltip titulo="Piso 2: lugar de expresión, creación, y exposición artística y cultural" contenido="El museo, como centro cultural contemporáneo, contará con espacios para la creación y exhibición de diversas manifestaciones artísticas: teatro, cine, artes plásticas, música, además de propuestas comunicativas como radio, creación de humanidades digitales, y videos entre muchas otras." />
    } else if (this.state.active == 'piso_tres_creacion') {
      tooltip = <Tooltip titulo="Piso 3: lugar de expresión, creación, y exposición artística y cultural" contenido="El museo, como centro cultural contemporáneo, contará con espacios para la creación y exhibición de diversas manifestaciones artísticas: teatro, cine, artes plásticas, música, además de propuestas comunicativas como radio, creación de humanidades digitales, y videos entre muchas otras." />
    } else if (this.state.active == 'piso_cuatro_creacion') {
      tooltip = <Tooltip titulo="Piso 4: lugar de expresión, creación, y exposición artística y cultural" contenido="El museo, como centro cultural contemporáneo, contará con espacios para la creación y exhibición de diversas manifestaciones artísticas: teatro, cine, artes plásticas, música, además de propuestas comunicativas como radio, creación de humanidades digitales, y videos entre muchas otras." />
    } else if (this.state.active == 'piso_cinco_duelo') {
      tooltip = <Tooltip titulo="Lugar de Duelo" contenido="El respeto, amor y solidaridad ha movilizado a las víctimas y sectores de la sociedad a mantener viva la memoria de lo irremplazable y la ausencia siempre presente de quien han perdido a su seres queridos. Este espacio nos ayuda a la apropiación e identificación con quienes han sido afectados por la violencia y el conflicto, en un ambiente de reflexión íntima y homenaje." />
    }
    return (
      <div className="App">
        {/* <SimpleBar style={{ height: '100vh' }}> */}
        <ThreeView marcador={marcador} modelo={modelo} />
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
        {/* <Espacio id="piso_uno_creacion" /> */}
        <Espacio id="piso_dos_juntar" />
        <Espacio id="" />
        <Espacio id="piso_dos_archivo" />
        <Espacio id="" />
        <Espacio id="piso_dos_pedagogia" />
        <Espacio id="" />
        <Espacio id="piso_dos_encuentro" />
        <Espacio id="" />
        <Espacio id="piso_dos_consulta" />
        <Espacio id="" />
        <Espacio id="piso_dos_creacion" />
        <Espacio id="" />
        <Espacio id="piso_tres_juntar" />
        <Espacio id="" />
        <Espacio id="piso_tres_creacion" />
        <Espacio id="" />
        <Espacio id="piso_cuatro_juntar" />
        <Espacio id="" />
        <Espacio id="piso_cuatro_creacion" />
        <Espacio id="" />
        <Espacio id="piso_cinco_juntar" />
        <Espacio id="" />
        <Espacio id="piso_cinco_duelo" />
        <Espacio id="" />

        {tooltip}
        {/* </SimpleBar> */}
      </div>
    );
  }

}

export default App;
