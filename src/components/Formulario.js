import React, {Component} from 'react';

class Formulario extends Component{

    // creando las referencias de los campos del formulario
    nombreUsuario = React.createRef();
    edadUsuario = React.createRef();

    crearUsuario = (e) =>{

        e.preventDefault();

        //creando el objeto con los datos
        const usuario = {
            nombreUsuario: this.nombreUsuario.current.value,
            edadUsuario: this.edadUsuario.current.value
        }

        console.log(usuario.nombreUsuario);
        console.log(usuario.edadUsuario);

        //agregarlo y enviarlo por props
        this.props.agregarUsuario(usuario);

        //resetar el formulario
        e.currentTarget.reset();
    }
    render(){
        return(
            <form onSubmit={this.crearUsuario}>
                <h2>Agrega tus datos aqui</h2>

                <div className="campo">
                    <label>Nombre de Miembro</label>
                    <input className="u-full-width" ref={this.nombreUsuario} type="text" placeholder="Ej. Juan Perez Cadima" />
                </div>

                <div className="campo">
                    <label>Edad</label>
                    <input className="u-full-width" ref={this.edadUsuario} type="number" min="1" placeholder="Ej. 22" />
                </div>

                <input className="button-primary u-full-width" type="submit" value="Agregar" />
            </form>
        );
    }
}

export default Formulario;