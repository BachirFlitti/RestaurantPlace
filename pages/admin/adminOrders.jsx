import {useState} from "react";
function AdminOrders() {
    
    const [orders, setOrders] = useState([
        {
            id: 1,
            items: ["Hamburger", "Fries"],
            total: 8.98,
            status: "Pending"
        },
        {
            id: 2,
            items: ["Milkshake", "Brownie"],
            total: 11.98,
            status: "Ready"
        }
    ]);
    const update =(id, newStatus) => {
        setOrders(orders.map((order) => 
            order.id === id ? {...order, status: newStatus} : order
        ));
    }
    return(
        <div>
            {orders.map((order, index) => (
                <div key={order.id}>
                    <h3>Order ID: {order.id}</h3>
                    <p>Items: {order.items.join(", ")}</p>
                    <p>Total: ${order.total.toFixed(2)}</p>
                    <p>Status: {order.status}</p>
                    <button onClick={() => update(order.id, "Ready")}>Mark as Ready</button>
                    <button onClick={() => update(order.id, "Pending")}>Mark as Pending</button>
                    <button onClick={() => update(order.id, "Preparing")}>Mark as Preparing</button>
                    <button onClick={() => update(order.id, "Completed")}>Mark as Completed</button>
                </div>
            ))}
        </div>
    );
}
export default AdminOrders;