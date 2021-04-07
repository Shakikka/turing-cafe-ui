import React, { Component } from 'react';
import './App.css';
import Reservations from '../Reservations/Reservations'
import Form from '../Form/Form'
// import { getReservations } from '../assets/apiCalls.js';

class App extends Component {
  constructor() {
    super()
    this.state = {
      reservations: []
    }
  }

  componentDidMount() {
    fetch('http://localhost:3001/api/v1/reservations')
    .then(response => response.json())
    .then(reservations => this.setState({reservations: reservations}))
  }

  makeReservation = (newReservation) => {
    this.setState({ reservations: [...this.state.reservations, newReservation]})
  }
  render() {
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='resy-form'>
          <Form makeReservation={this.makeReservation}/>
        </div>
        <Reservations reservations={this.state.reservations}/>
      </div>
    )
  }
}

export default App;
