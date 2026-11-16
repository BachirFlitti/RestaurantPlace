import {useState} from "react";
function Reservation() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [date, setDate] = useState("");
    const [guestcount, setGuestcount] = useState(1);
    const [requests, setRequests] = useState("");
    const [reservations, setReservations] = useState([]);
    const [Submitted, setSubmitted] = useState(false);
    const [time, setTime] = useState("");
    const [eventType, setEventType] = useState("Birthday");
    return(
 <div>
    <input
    type="text"
    value={name}
    onChange={(e) => setName(e.target.value)}/>
    <input
    type="email"
    value={email}
    onChange={(e) => setEmail(e.target.value)}
    />
    <input
    type="date"
    value={date}
    onChange={(e) => setDate(e.target.value)}
    />
    <input
    type="number"
    value={guestcount}
    min="1"
    max="20"
    onChange={(e) => setGuestcount(e.target.value === "" ? "" : Number(e.target.value))}
    />
    <input
    type="time"
    value={time}
    onChange={(e) => setTime(e.target.value)}
    />
    <textarea
    value={requests}
    onChange={(e) => setRequests(e.target.value)}
    placeholder="Special Requests (Optional)"
    />
    <select value={eventType} onChange={(e) => setEventType(e.target.value)}>
        <option value="Birthday">Birthday</option>
        <option value="Anniversary">Anniversary</option>
        <option value="Business Meeting">Business Meeting</option>
        <option value="Other">Other</option>
    </select>
    <button onClick={() => {
        if (!name || !email || !date || !guestcount || !time) {
            alert("Please fill in all required fields.");
            return;
        }
        setSubmitted(true);
        const newReservation = {
            name,
            email,
            date,
            guestcount,
            requests,
            time,
            eventType,
        };
        setReservations([...reservations, newReservation]);
    }}>
        Submit Reservation
    </button>
    {Submitted && (
        <div>
            <h2>Thank You for Your Reservation!</h2>
            <p>Name: {name}</p>
            <p>Email: {email}</p>
            <p>Date: {date}</p>
            <p>Guest Count: {guestcount}</p>
            <p>Time: {time}</p>
            <p>Special Requests: {requests}</p>
            <p>Event Type: {eventType}</p>
        </div>
    )}
 </div>
);
}
export default Reservation;