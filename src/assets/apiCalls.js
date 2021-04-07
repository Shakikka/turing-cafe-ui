export const getReservations = () => {
    fetch('http://localhost:3001/api/v1/reservations')
    .then(checkError)
}

export const checkError = (response) => {
    if (!response.ok) {
        throw new Error(response.message);
    } else {
        return response.json()
    }
}