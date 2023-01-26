
import React, { Component } from 'react';
 
class Card extends Component {
    render() {
        return (
        

            <div className="col">
                
                <button onClick={() => this.props.onIncrement(this.props.card)} className="btn btn-primary">Aggiungi <span className="badge badge-light">{ this.props.card.quantita }</span></button>
                <img className="card-img-top" src={ this.props.card.immagine } alt="Card image cap"/>
                <div className="card-body">
                    <div className="card">
                        <h5 className="card-title">{ this.props.card.nome}</h5>
                        <p className="card-text">€{this.props.card.prezzo}</p>
                         
                         <button onClick={() => this.props.onDelete(this.props.card.id)} className="btn btn-outline-danger">Elimina</button>
                    </div>
                </div>
            </div>

        );
    }
}



export default Card;