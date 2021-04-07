import React, { Component } from 'react';
import './Form.css'

class Form extends Component {
    constructor() {
        super();
        this.state = {
            name: '',
            date: '',
            time: '',
            numberOfGuests: 0,
        }
    }

    handleChange = event => {
        this.setState({[event.target.name]: event.target.value})
    }

    submitReservation = event => {
        event.preventDefault();
        const newReservation = {
            id: Date.now(),
            ...this.state
        }
        this.props.makeReservation(newReservation)
        this.clearInputs()
    }

    clearInputs = () => {
        this.setState({name: '', date: '', time: '', numberOfGuests: 0})
    }


    render () {
        return 
    }
}

export default Form;