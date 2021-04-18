import React, {Component} from 'react';

class Buscador extends Component{

    // Leer valor de input con ref
    busquedaRef = React.createRef();
    obtenerDatos=(e) =>{
        e.preventDefault();

        //tomando el valor de input
        const termino=this.busquedaRef.current.value;
        // lo enviamos al componente principal
        this.props.datosBusqueda(this.busquedaRef.current.value);
    }
    render(){
        return(
            <form onSubmit={this.obtenerDatos}>
                <div className="row">
                    <div className="form-group col-md-8">
                        <input ref={this.busquedaRef} type="text"className="form-control form-control-lg" placeholder="Nombre imagen. ejemplo: café"/>
                    </div>
                    <div className="form-group col-md-4">
                        <input type="submit" className="btn btn-lg btn-info btn-block" value="Buscar"/>
                    </div>
                </div>
            </form>
        );
    }
}

export default Buscador;