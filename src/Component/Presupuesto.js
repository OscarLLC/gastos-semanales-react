import React, {Component} from 'react'


class Presupuesto extends Component{
    render(){
        return(
            <div className="content_presupuesto">
                <p className="text_presupuesto">Presupuesto ${this.props.presupuesto}</p>
            </div>
        )
    }
}

export default Presupuesto;