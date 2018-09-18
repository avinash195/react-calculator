import React from 'react';
import update from 'immutability-helper';
import math from 'mathjs';

import Display from './display';
import Button from './button';
import ButtonContanier from './buttonContainer';
import './calculator.css';

class Calculator extends React.Component {
    constructor() {
        super();
        this.state = {
            output: []
        }
        this.handleClick = this.handleClick.bind(this);
        this.evaluate = this.evaluate.bind(this);
    }

    evaluate() {
        let result = this.state.output.join('');
        if (result) {
            result = math.eval(result);
            result = math.format(result, { precision: 14 });
            result = String(result);
            
            this.setState({
                output: [result]
            });
        }
    }

    handleClick(e) {
        const value = e.target.getAttribute('value');

        switch (value) {
            case 'clear':
                this.setState({
                    output: [],
                });
                break
            case 'equal':
                this.evaluate();
                break;
            default:
                const newOutput = update(this.state.output, {
                    $push: [value],
                });
                this.setState({
                    output: newOutput,
                });
                break;
        }
    }

    render() {
        return (
          <div className="calculator">
            <Display data={this.state.output} />
            <ButtonContanier>
                <Button onClick={this.handleClick} label="7" value="7" />
                <Button onClick={this.handleClick} label="4" value="4" />
                <Button onClick={this.handleClick} label="1" value="1" />
                <Button onClick={this.handleClick} label="0" value="0" />

                <Button onClick={this.handleClick} label="8" value="8" />
                <Button onClick={this.handleClick} label="5" value="5" />
                <Button onClick={this.handleClick} label="2" value="2" />
                <Button label="" value="null" />
                
                <Button onClick={this.handleClick} label="9" value="9" />
                <Button onClick={this.handleClick} label="6" value="6" />
                <Button onClick={this.handleClick} label="3" value="3" />
                <Button onClick={this.handleClick} label="AC" value="clear" />
                
                <Button onClick={this.handleClick} label="x" value="*" />
                <Button onClick={this.handleClick} label="-" value="-" />
                <Button onClick={this.handleClick} label="+" value="+" />
                <Button onClick={this.handleClick} label="=" value="equal" />
            </ButtonContanier>
          </div>
        )
      }
}

export default Calculator;