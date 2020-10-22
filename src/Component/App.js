import React, { Component } from 'react';
import '../css/App.css';
import Header from './Header'
import Form from './Form'
import Listado from './Listado'


class App extends Component{
  //agregar gasto al state
  //1 manera de hascerlo con el contructor y el super esta mas completo
  // constructor(props){
  //   super(props)
  //   this.state = {
  //     presupuesto: '',
  //     restante: '',
  //     gastos: {
  //     }
  //   }
  // }
//2  menra de hacerlo y es la mas corta
  state = {
    presupuesto: '',
    restante: '',
    gastos: {
    }
  }

  agregarGasto = gasto => {

    //tomar una copia al state actual
    const gastos = {...this.state.gastos}

    //agregar gasto al object

    gastos[`gastos${Date.now()}`] = gasto;


    //ponerlo en el state
    this.setState({
      gastos
    })

  }
  render(){
    return (
      <div className="App">
        <Header 
          titulo = "Gastos Semanales"
        />
        <div className="content_main">
          <div className="content_form">
            <Form
              titulo ="Agrega Tus Gastos Aqui"
              agregarGasto = {this.agregarGasto}
            />
          </div>
          <div className="content_view">
            <Listado 
              titleList = "Listado"
              gastos = {this.state.gastos}
            />
          </div>
  
        </div>
      </div>
    )
  }
 
}

export default App;
