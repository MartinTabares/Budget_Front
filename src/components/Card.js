import React, { Component } from 'react';

class Card extends Component {

    render() { 
        return (
            <div className='row'>
                <div className = {"card text-white bg-info mb-3 from-group col-md-"+this.props.width}>
                    <div className = "card-header"> <font>{this.props.title}</font> </div>
                    <div className = "card-body">
                        <h4 className = "card-title"><font></font></h4>
                        <p className = "card-text"> <font> Algún texto de ejemplo rápido para construir sobre el título de la tarjeta y constituir la mayor parte del contenido de la tarjeta. </font> </p>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default Card;