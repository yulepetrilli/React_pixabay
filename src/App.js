import React from 'react';
import Buscador from './Components/Buscador.js'
import Resultados from './Components/Resultados.js'

class App extends React.Component{
  
  state ={
    termino: "",
    imagenes: [],
    pagina: ""
  }

  scroll = () =>{
    const elemento = document.querySelector('.jumbotron')
    elemento.scrollIntoView('smooth', 'start')
  }

  pagAnterior = () =>{
     //leer el state de la pagina actual
     let pagina = this.state.pagina

     //leer si la pag es uno ya no ir atras
     if (pagina === 1){
       return null
     }
 
     //resta uno a la pag actual
     pagina -=1
     
     //agregar el cambio al state para cambiar a la pag anterior y no quede pegado
     this.setState({
      pagina
     }, () => {
       this.consultarApi()
       this.scroll()
     })
  }
  pagSiguiente = () =>{
    //leer el state de la pagina actual
    let pagina = this.state.pagina

    //sumar uno a la pagina actual 
    pagina += 1 

    //agregar el cambio al state para cambiar a la pag siguiente y no quede pegado
    this.setState({
      pagina
    }, () => {
      this.consultarApi()
      this.scroll()
    })

  }

  consultarApi =()=>{

    const pagina = this.state.pagina
    const url = `https://pixabay.com/api/?key=1732750-d45b5378879d1e877cd1d35a6&q=${this.state.termino}&per_page=30&page=${pagina}`
    //"&per_page=30" en el url permite limitar el numero de resultados por pagina 
    fetch(url)
      .then(respuesta =>respuesta.json())
      .then(resultado => this.setState({imagenes: resultado.hits}))
  }
  
  datosBusqueda =(termino)=>{
    console.log(termino);
    this.setState({
      termino: termino,
      pagina: 1 //esto es para que el buscador inicie en la primera pag
    }, ()=>{
      this.consultarApi()
    })
  }
  
  render(){
    return (
      <div className="app container">
        <div className="jumbotron">
          <p className="lead text-center">Buscador de Imágenes</p>
          <Buscador
            datosBusqueda = {this.datosBusqueda}
          />
        </div>
        <div className = "row justify-content-center">
          <Resultados
              imagenes = {this.state.imagenes}
              pagAnterior  = {this.pagAnterior}
              pagSiguiente = {this.pagSiguiente}
            />
        </div>
      </div>
    )
  }
}

export default App;
