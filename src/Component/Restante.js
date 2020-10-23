import React, {Component} from 'react'


class Restante extends Component{
    render(){
        return(
            <div className="content_restante">
                <p className="text_restante">Restante ${this.props.restante}</p>
            </div>
        )
    }
}

export default Restante;