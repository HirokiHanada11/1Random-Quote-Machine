import React, { Component } from 'react';

class QuoteBox extends Component {

  render(){
    return (
      <div style={quoteBoxStyles}>
        <h1>'{this.props.quotes[this.props.id].quote}'</h1>
        <h2 style={{font:'sarif'}}>-{this.props.quotes[this.props.id].author}</h2>
        <button onClick={this.props.randomId}>New Quote</button>
        <button><a href="twitter.com/intent/tweet">Tweet</a></button>
      </div>
    );
  }
}

const quoteBoxStyles = {
    backgroundColor: '#ebf7ff',
    mragin: 'auto',
    width: '50%',
    border: '3px solid black',
    padding: 10
}

export default QuoteBox;