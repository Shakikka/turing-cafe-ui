import Reservation from '../Reservation/Reservation'
import React from 'react'
import './Reservations.css'

const Reservations = ({reservations}) => {
    const makeReservationCards = reservations.map(reservation => {
        return (
        <Reservation
            id={reservation.id}
            name={reservation.name}
            date={reservation.date}
            time={reservation.time}
            number={reservation.number}
            key={reservation.id}
        />
        )
    })

    return(
        <section className='reservations'>{makeReservationCards}</section>
    )
    
}

export default Reservations;