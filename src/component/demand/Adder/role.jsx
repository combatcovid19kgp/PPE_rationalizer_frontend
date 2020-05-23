import React, { Component } from 'react';
import './role.css'
import Button from 'react-bootstrap/Button'

class Role extends Component{
    constructor(props){
        super(props);
        this.state={
            roles : []
        };
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(){
        this.setState(previousState =>({
            roles: [...previousState.roles,{
                role : 'Doctor'
            }]
        }))
    }

    render() {
        let cards = [];
        this.state.roles.forEach((role) => {
            cards.push(
                    <div className='flex-item-adder'>
                        <Button variant="outline-light">{role.role}</Button>
                    </div>
            )
        });
        return(
            <div className='flex-container'>
                {cards}
                <div className='flex-item-adder'>
                    <Button variant="outline-light" onClick={() =>this.handleClick()}>Add Role</Button>
                </div>
            </div>
        )
    }
}

export default Role
