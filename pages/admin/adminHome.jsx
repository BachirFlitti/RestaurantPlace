import {useState} from "react";
import AdminMenu from "./adminMenu";
import AdminReservations from "./adminReservation";
import AdminOrders from "./adminOrders";
function Admin() {
    return(
        <div>
            <h1>Admin Page</h1>
            <p>Welcome to the admin page!</p>
            <h2>Restaurant Management</h2>
            <p>Here you can manage reservations, menu items, and other restaurant operations.</p>
            <div>
                <h3>Menu Management</h3>
                <p>Here you can add, edit, or remove menu items.</p>
                <AdminMenu />
            </div>

            <div>
                <h3>Reservations Management</h3>
                <p>Here you can view and manage reservations made by customers.</p>
                <AdminReservations />
            </div>
            <div>
                <h3>Orders Management</h3>
                <p>Here you can view and manage customer orders.</p>
                <AdminOrders />
            </div>
            
        </div>
    );
}
export default Admin;