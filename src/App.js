import React, {Component} from 'react';
import './App.css';

// importando componentes
import Buscador from './componentes/Buscador';
import Resultado from './componentes/Resultado';
class App extends Component {

  state ={
    termino : '',
    imagenes : []
  }
  consultarApi=()=>{
    const url=`https://pixabay.com/api/?key=17298674-710e7d491123ba80d6abb7eb3&q=${this.state.termino}`;
    //console.log(url);
    //leer Este JSON con fetch
    fetch(url)
      .then(respuesta=> respuesta.json())
      .then(resultado => this.setState({imagenes : resultado.hits}))
  }

  datosBusqueda= (termino)=>{
    // actualizar state
    this.setState({
      //parametro / llave objeto
      termino : termino
    },/*agregar al state y después ejecutar consultar api*/
    ()=>{
      this.consultarApi();
    })
  }
  render(){
  return (
    <div className="App container">
        <div className="jumbotron">
            <p className="lead text-center">Buscador</p>
            <Buscador
            datosBusqueda={this.datosBusqueda}/>
        </div>
        <div>
          <Resultado
          imagenes={this.state.imagenes}
          />
        </div>
        
    </div>  
  );
  }
}

export default App;
