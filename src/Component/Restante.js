import React, {Component} from 'react'
import {revisarPresupuesto} from '../helper';


class Restante extends Component{
    render(){
        const presupuesto = this.props.presupuesto;
        const restante = this.props.restantante;
        return(
            <div className={revisarPresupuesto(
                presupuesto, restante
            )} >
                <p className="text_restante">Restante ${this.props.restante}</p>
            </div>
        )
    }
}

export default Restante;