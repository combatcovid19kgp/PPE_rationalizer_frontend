import React, { Component } from 'react';
import './role.css'
import Button from 'react-bootstrap/Button'
import shortid from 'shortid';
import Select from 'react-select'

const options =[
    { value: 'Doctors', label: 'Doctors' },
    { value: 'Nurses', label: 'Nurses' },
    { value: 'Helpers', label: 'Helpers' },
    { value: 'Patients', label: 'Patients' }
];

class Role extends Component{
    constructor(props){
        super(props);
        this.state={
            roles : [],
            roleValue : '',
            numValue : '',
        };
        this.handleClick = this.handleClick.bind(this);
        this.handleSelect = this.handleSelect.bind(this);
        this.handleInput = this.handleInput.bind(this);
    }
    handleClick(){
        this.setState(previousState =>({
            roles: [...previousState.roles,{
                role : previousState.roleValue.value,
                quantity : previousState.numValue,
            }],
            roleValue: '',
            numValue: ''
        }))
    }
    handleSelect(selectedOption){
        this.setState({roleValue : selectedOption},()=>console.log(this.state.roleValue));
    }
    handleInput(event){
        this.setState({numValue : event.target.value},()=>console.log(this.state.numValue))
    }
    render() {
        let cards = [];
        this.state.roles.forEach((item) => {
            cards.push(
                    <div className='flex-item-adder' key={shortid.generate()} data-key={shortid.generate()} style={{textAlign:'left'}}>
                        <div className='items'>{item.role} | {item.quantity}</div>
                        <div className='flex-container1'>
                            <div className='containers'>
                                <div className='circle-containers'>10</div>
                                Apron
                            </div>
                            <div className='containers'>
                                <div className='circle-containers'>1000</div>
                                Phenyl
                            </div>
                        </div>
                    </div>
            )
        });
        let disabled = (this.state.numValue === '' || this.state.roleValue === '');
        return(
            <React.Fragment>
                <div className='sub_header'>
                            Roles
                </div>
                <div className='flex-container'>
                    {cards}
                    <div className='flex-item-adder'>
                        <div className='select-box'>
                            <Select options={options} onChange={this.handleSelect} name = 'roleValue' value={this.state.roleValue}/>
                        </div>
                        <div className='select-box1'>
                            <input type='Number' name='numValue' className='input' onChange={this.handleInput} value={this.state.numValue}/>
                        </div>
                        <Button variant="light" onClick={() =>this.handleClick()} disabled={disabled}>Add Role</Button>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default Role;
