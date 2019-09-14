import React, { Component } from 'react';
import { Table, Button } from 'react-bootstrap';

export class QuoteInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quotes: [],
    };
  }

  componentDidUpdate(prevProps) {
    if(prevProps.quotes !== this.props.quotes) {
      const { quotes } = this.state;
      this.props.quotes.map((quote, index) => {
        quotes.push({details: quote, timeUpdated: this.props.updateTime});
        if(quotes.length > 5) {
          quotes.splice(0, 1);
        }
      })
      this.setState({
        quotes,
      });
    }
  }

  clearHistory = () => {
    this.setState({
      quotes: [],
    })
  }

  render() {
    const { quotes } = this.state;
    
    return (
      <div>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Symbol</th>
              <th>Price</th>
              <th>Price Date</th>
            </tr>
          </thead>
          <tbody>
            { quotes.slice(0).reverse().map((quote, index) =>
            <tr>
              <td>{quote.details.symbol}</td>
              <td>{quote.details.lastTradePrice}</td>
              <td>{quote.timeUpdated}</td>
            </tr> )}
          </tbody>
        </Table>
        <Button onClick={this.clearHistory}>Clear History</Button>
      </div>
    );
  }
}

export default QuoteInfo;
