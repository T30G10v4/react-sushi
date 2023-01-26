import Navbar from './components/navbar';
import Card from './components/card';
import React, { Component } from 'react';
import roll from './img/crunchy-roll-sushi-02.jpg';

class App extends Component {
  
  state = {
    
    cards: [

      { id:0, nome: "California", prezzo: 5.99, immagine: roll, quantita: 0},
      { id:1, nome: "Dragon", prezzo: 6.99, immagine: roll, quantita: 0},
      { id:2, nome: "Dynamite", prezzo: 4.99, immagine: roll, quantita: 0},
      { id:3, nome: "Philadelpia", prezzo: 7.99, immagine: roll, quantita: 0},
      { id:4, nome: "Tiger", prezzo: 3.99, immagine: roll, quantita: 0},
      { id:5, nome: "Rainbow", prezzo: 9.99, immagine: roll, quantita: 0},
    ]
  
  
  }

  handleDelete = cardId => { 
    
    const cards = this.state.cards.filter(card => card.id !== cardId ) 
    this.setState({ cards });

  }

  
  handleIncrement = card => {

    const cards = [...this.state.cards];
    const id = cards.indexOf(card);
    cards[id] = {...card};
    cards[id].quantita++;
    this.setState({cards})

  }
  render() {
    return (
    
      <>
      <Navbar />
        <div className='container'>
          <h1>Cosa desideri ordinare?</h1>
          <hr/>
          <div className="row">
            

            { this.state.cards.map(card => (

              <Card
              
                key={card.id}
                onDelete={this.handleDelete}
                onIncrement={this.handleIncrement}
                card={card} />

            ))}
          </div>
        </div>
      </>
  );
}

}

export default App;
