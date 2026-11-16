import {useState} from "react";
function AdminReservation() {
    const [reservations, setReservations] = useState([
        {
            id: 1,
            name: "John Doe",
            date: "2023-07-15",
            time: "18:30",
            guestcount: 4,
            status: "Pending"
        },
        {
            id: 2,
            name: "Jane Smith",
            date: "2023-07-16",
            time: "19:00",
            guestcount: 2,
            status: "Confirmed"
        }
    ]);
    const updateStatus = (id, newStatus) => {
        setReservations(reservations.map((reservation) => 
            reservation.id === id ? {...reservation, status: newStatus} : reservation
        ));
    }
    return(
        <div>
            <h1>Admin Reservation Page</h1>
            <p>Here you can view and manage reservations made by customers.</p>
            <div>
                <h2>Reservation Management</h2>
                {reservations.map((reservation, index) => (
                    <div key={reservation.id}>
                        <h3>Reservation ID: {reservation.id}</h3>
                        <p>Name: {reservation.name}</p>
                        <p>Date: {reservation.date}</p>
                        <p>Time: {reservation.time}</p>
                        <p>Guest Count: {reservation.guestcount}</p>
                        <p>Status: {reservation.status}</p>
                        <button onClick={() => updateStatus(reservation.id, "Confirmed")}>Approve</button>
                        <button onClick={() => updateStatus(reservation.id, "Declined")}>Decline</button>
                    </div>
                ))}
            </div>
        </div>
    );
}
export default AdminReservation;