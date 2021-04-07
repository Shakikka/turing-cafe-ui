import React from 'react';
import './Reservation.css'
const Reservation = ({id, name, date, time, number}) => {
return (
    <div className='reservation' id={id}>
        <p>{name}</p>
        <p>{date}</p>
        <p>{time + ' pm'}</p>
        <p>{'Number of guests: ' + number}</p>
    </div>
)
}

export default Reservation;