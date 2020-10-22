import React, {Component} from 'react'


class Form extends Component{
    nombreGasto = React.createRef();
    montoGasto = React.createRef();

    enviarGastos = (e) =>{
    //prevenir el default
        e.preventDefault();


    //crear el objeto
    const gasto = {
        nombreGasto: this.nombreGasto.current.value,
        montoGasto: this.montoGasto.current.value
    }
    // console.log(gasto)


    ///agregar y enviar por props
    this.props.agregarGasto(gasto);


    //reset form
    e.currentTarget.reset();
                                      
    }


    render(){
        return(
            <div className="content_form">
                <form className="form" onSubmit={this.enviarGastos}>
                    <p className="text_title">{this.props.titulo}</p>
                    <div className="campos">
                        <label className="label">Nombre Gasto</label><br />
                        <input ref={this.nombreGasto} className="campos_input" type="text" placeholder="eje: Comida" />
                    </div>
                    <div className="campos">
                        <label className="label">Cantidad</label><br />
                        <input ref={this.montoGasto} className="campos_input" type="text" placeholder="eje: $500" />
                    </div>
                    <div className="campo_button">
                        <input className="button" type="submit" value="Agregar" />
                    </div>
                </form>
                
            </div>
        )
    }
}

export default Form;