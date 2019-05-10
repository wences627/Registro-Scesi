import React, {Component} from 'react';
import '../css/App.css';
import Header from './Header';
import Formulario from './Formulario';

class App extends Component {

  state={
    edad:'',
    usuarios:{}
  }

  agregarUsuario = usuario => {
    const usuarios = {...this.state.usuarios}

    // agregando el usuario al objeto del state
    usuarios[`usuario${Date.now()}`]= usuario;
    
    console.log(usuarios);

    this.setState({
      usuarios:usuarios
    })

  }

  render(){
    return (
      <div className="App container">

        <Header
          titulo='Registro Miembros Scesi'
        />

        <div className="contenido-principal contenido">
          <div className="row">
            <div className="one-half column">
              <Formulario
                agregarUsuario={this.agregarUsuario}
              />
            </div>
            <div className="one-half column">

              {/* aqui se mostrara los miembros registrados xD */}

            </div>
          </div>
        </div> 
      </div>
    );
  }
}

export default App;
