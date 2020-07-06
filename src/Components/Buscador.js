import React from 'react'

class Buscador extends React.Component{

    busquedaRef = React.createRef() //funcion que permite leer un input 
    obtenerDatos =(e)=>{
        e.preventDefault() 
        const termino = this.busquedaRef.current.value // toma el valor del input
        this.props.datosBusqueda(termino) //envia el valor del input al componente principal (App.jss)
    }
    render(){
        return(
            <form onSubmit = {this.obtenerDatos}>
                <div className ="row">
                    <div className = "form-group col-md-8">
                        <input ref = {this.busquedaRef} type = "text" className = "form-control form-control-lg" 
                        placeholder = "Busca tu imagen. Ejemplo: futbol"/>
                    </div>
                    <div className = "form-group col-md-4">
                        <input type = "submit" className = "btn btn-lg btn-danger btn-block" 
                        value="Buscar"/>
                    </div>
                </div>
            </form>
        )
    }

}
export default Buscador 