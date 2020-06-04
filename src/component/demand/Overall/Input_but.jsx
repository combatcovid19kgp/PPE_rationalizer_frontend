import React from 'react';


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
        <button onClick={this.IncrementItem}>+</button>
        <input size="1" value={this.state.quantity} onChange={this.handleChange} className="center"/>
        <button onClick = {this.DecreaseItem}>-</button>
        </div>
      );
    }
  }

export default Inputbut; 
