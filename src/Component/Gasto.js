import React, {Component} from 'react'


class Gasto extends Component{
    render(){
        const {nombreGasto, montoGasto} = this.props.gasto
        return(
            <div>
                <li className="list_gasto">
                    <p className="text_gasto">
                        {nombreGasto}
                    </p>
                    <div className="content_precio">
                    <span className="monto_gasto">${montoGasto}</span>

                    </div>

                </li>
            </div>
        )
    }
}

export default Gasto;