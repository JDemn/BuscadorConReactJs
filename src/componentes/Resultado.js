import React, {Component} from 'react';
import Imagen from './Imagen';
import Paginacion from './Paginacion';

class Resultado extends Component{
    
    mostrarImagenes = ()=>{
        const imagenes = this.props.imagenes;
        //para no regresar arreglod vacios (sin imágenes)
        if(imagenes.length == 0) return null;
        
        return(
            //dentro de este div irán todos los componentes imágenes
            <React.Fragment>
                <div className="col-12 p-5 row">
                    {imagenes.map(imagen =>(
                        <Imagen
                            key={imagen.id}
                            imagen ={imagen}
                        />
                    ))}
                </div>
                <Paginacion/>
            </React.Fragment>
        )
    }

    render(){
        return(
            <React.Fragment>
            {this.mostrarImagenes()}
            </React.Fragment>
        );
    }
}
export default Resultado;