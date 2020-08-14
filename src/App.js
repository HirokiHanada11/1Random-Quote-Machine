import React, { Component } from 'react';
import QuoteBox from './Components/QuoteBox'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
        quotes: [
            {
                id: 0,
                quote: 'I want to go to the bathroom.',
                author: 'Hiroki Hanada'
            },{
                id: 1,
                quote: 'Where is the bathroom sir',
                author: 'Yoshi'
            },{
                id: 2,
                quote: 'In your mom',
                author: 'Ayumi'
            },{
              id: 3,
              quote: 'A problem is not a problem until you see it a problem.',
              author: 'Hachiman'
          }
        ],
        id: 0
    }
  }

  randomId = () => {
    this.setState({
      id: Math.round(Math.random() * (this.state.quotes.length - 1))
    });
  }

  render(){
    return (
      <div>
        <QuoteBox quotes={this.state.quotes} randomId={this.randomId} id={this.state.id} />
      </div>
    );
  }
}

export default App;
