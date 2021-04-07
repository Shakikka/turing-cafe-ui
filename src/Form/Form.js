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
        this.setState({ [event.target.name]: event.target.value })
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
        this.setState({ name: '', date: '', time: '', numberOfGuests: 0 })
    }


    render() {
        return (
            <form>
                <input
                    type='text'
                    placeholder='Name'
                    name='name'
                    value={this.state.name}
                    onChange={this.handleChange}
                />
                <input
                    type='text'
                    placeholder='mm/dd'
                    name='date'
                    value={this.state.date}
                    onChange={this.handleChange}
                />
                <input
                    type='text'
                    placeholder='Time'
                    name='time'
                    value={this.state.time}
                    onChange={this.handleChange}
                />
                <input
                    type='number'
                    placeholder='Number of Guests'
                    name='numberOfGuests'
                    min='1'
                    value={this.state.numberOfGuests}
                    onChange={this.handleChange}
                />

                <button onClick={this.submitReservation}>Make Reservation</button>

            </form>
        )
    }
}

export default Form;