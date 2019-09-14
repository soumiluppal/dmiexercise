import React, { Component } from 'react';
import { Form, DropdownButton, Dropdown, Button } from 'react-bootstrap';

export class InputArea extends Component {
  constructor(props) {
    super(props);
    this.state = {
      symbols: '',
      autoUpdate: false,
      updateTimer: 5,
      timeOptions: [5, 10, 15, 20, 25],
    }
  }

  setUpdateTime = (option) => {
    console.log(option);
    this.setState({
      updateTimer: option,
    });
  }

  changeSymbols = (e) => {
    console.log(e.target.value);
    this.setState({
      symbols: e.target.value,
    });
  }

  render() {
    const { timeOptions, updateTimer, symbols } = this.state;
    const { getQuotes } = this.props;

    return (
      <div>
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Enter one or more symbols to track:</Form.Label>
            <Form.Control type="text" placeholder="Example: GOOG,AAPL" onChange={this.changeSymbols} />
          </Form.Group>
          <DropdownButton id="dropdown-basic-button" title={'Every ' + updateTimer + ' seconds'}>
            {timeOptions.map((option, index) => <Dropdown.Item key={index} onClick={e => this.setUpdateTime(option)}>Every {option} seconds</Dropdown.Item>)}
          </DropdownButton>
          <Button onClick={e => getQuotes(symbols)}>Update Now</Button>
        </Form>
      </div>
    );
  }
}

export default InputArea;
