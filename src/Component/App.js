import React, { Component } from 'react';
import '../css/App.css';
import Header from './Header';
import Form from './Form';
import Listado from './Listado';
import {validarPresupuesto} from '../helper';
import ControlPresupuesto from './ControlPresupuesto';


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


  componentDidMount(){
    this.obtenerPresupuesto();
  }

  obtenerPresupuesto = () =>{
    let presupuesto = prompt("Ingresa tu presupusto???");
    let resultado = validarPresupuesto(presupuesto);
    if(resultado){
      this.setState({
        presupuesto: presupuesto,
        restante: presupuesto
      })
    }else{
      this.obtenerPresupuesto();
    }
  }



  agregarGasto = gasto => {

    //tomar una copia al state actual
    const gastos = {...this.state.gastos}

    //agregar gasto al object
    gastos[`gastos${Date.now()}`] = gasto;
    this.restaPresupuesto(gasto.montoGasto)

    //ponerlo en el state
    this.setState({
      gastos
    })
  }

  //restar del presupuesto cuando un gasto se crea

  restaPresupuesto = cantidad => {
    //leer el gasto
    let restar = Number(cantidad)

    //tomar una  copia del state
    let restante = this.state.restante

    //lo restasmos
    restante -= restar;
    console.log(restante)

    //lo agregamos al nuevo object
    this.setState({
      restante
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
            <ControlPresupuesto
              presupuesto = {this.state.presupuesto}
              restante = {this.state.restante}
            /> 
          </div>
        </div>
      </div>
    )
  }
 
}

export default App;
