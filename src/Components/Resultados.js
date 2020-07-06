import React from 'react'
import Imagen from './Imagen.js'
import Paginacion from './Paginacion.js'

class Resultados extends React.Component{
    
    mostrarImagenes = () =>{
        const imagenes = this.props.imagenes 

        if (imagenes.length === 0){
            return null;
        } 

        return(
            <React.Fragment>
                <div className="col-12 p-5 row">
                    {imagenes.map(imagen=>(
                       <Imagen
                            key = {imagen.id}
                            imagen = {imagen}
                       /> 
                    ))}
                </div>
                <Paginacion
                    pagAnterior  = {this.props.pagAnterior}
                    pagSiguiente = {this.props.pagSiguiente}
                />
            </React.Fragment>
        )
    }

    render(){
        return(
            <React.Fragment> 
                {this.mostrarImagenes()}
            </React.Fragment>
            /*como no se esta renderizando nada no se esta retornando 
            "{this.mostrarImagenes()}" para retornarlo se puede meter 
            dentro de n "div" pero eso generaria un div extra en el marco,
            tambien se puede usar el "React.Fragment" el cual funciona como un
            div sin la necesidad de crear ese marco extra
            */
        )
    }
}

export default Resultados