import React, { Component } from 'react';
import axios from 'axios';
import InputArea from '../InputArea';
import QuoteInfo from '../QuoteInfo';

export class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quotes: [],
      updateTime: '',
    }
  }

  getQuotes = (symbols) => {
    axios.get(`http://candidateservices.allegient.com/randomQuote/quote?symbols=${symbols}`)
      .then(res => {
        this.setState({
          quotes: res.data['quotes'],
          updateTime: res.data['generatedDate']
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    const { quotes, updateTime } = this.state;

    return (
      <div>
        <h1>Stock Quotes</h1>
        <InputArea getQuotes={this.getQuotes}/>
        <QuoteInfo quotes={quotes} updateTime={updateTime}/>
      </div>
    );
  }
}

export default Main;
