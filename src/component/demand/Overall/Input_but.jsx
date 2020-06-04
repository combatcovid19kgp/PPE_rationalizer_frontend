import React from 'react';
import Button from 'react-bootstrap/Button';
import './input_button.css'

class Inputbut extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        quantity: 0,
        show: true,
        max: 5,
        min: 0
      };
    }
    IncrementItem = () => {
        this.setState(prevState => {
          if(prevState.quantity >=0) {
            return {
              quantity: parseInt(prevState.quantity) + 1
            }
          } else {
            return null;
          }
        });
    };
    DecreaseItem = () => {
      this.setState(prevState => {
        if(prevState.quantity > 0) {
          return {
            quantity: parseInt(prevState.quantity) - 1
          }
        } else {
          return null;
        }
      });
    };
    ToggleClick = () => {
      this.setState({
        show: !this.state.show
      });
    };
    handleChange = (event) => {
      this.setState({quantity: event.target.value});
    };
    render() {
      return ( 
        <div>
        <Button onClick={this.IncrementItem} size='sm' className='button'>+</Button>
        <input size="1" value={this.state.quantity} onChange={this.handleChange} className="center"/>
        <Button onClick = {this.DecreaseItem} size='sm' className='button'>-</Button>
        </div>
      );
    }
  }

export default Inputbut; 
