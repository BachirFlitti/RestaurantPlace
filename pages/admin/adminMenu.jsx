import {useState} from "react";
function AdminMenu() {
    const [editID, setEditID] = useState(null);
    const [editName, setEditName] = useState("");
    const [editPrice, setEditPrice] = useState("");
    const [editIDprice, setEditIDPrice] = useState(null);
    const [newName, setNewName] = useState("");
    const [newPrice, setNewPrice] = useState("");
    const [menuItems, setMenuItems] = useState([
        { id: 1, name: "Hamburger", price: 5.99, available: true },
        { id: 2, name: "Fries", price: 2.99, available: true },
        { id: 3, name: "Milkshake", price: 4.99, available: true },
        { id: 4, name: "Brownie", price: 6.99, available: true }
    ])
    const newItem = {
        id: Date.now(),
        name: newName,
        price: parseFloat(newPrice),
        available: true
    };
    return(
        <div>
            <h1>Admin Menu</h1>
            <p>Welcome to the admin menu page!</p>
            <h2>Menu Management</h2>
            <p>Here you can add, edit, or remove menu items.</p>
            <input
                type="text"
                placeholder="New Item Name"
                value={newName}
                onChange={(e) => setNewName(e.target.value)}
            />
            <input
                type="number"
                placeholder="Price"
                value={newPrice}
                onChange={(e) => setNewPrice(e.target.value)}
            />
                                <button onClick={() => {
                        if (newItem.name.trim() !== "" && Number.isFinite(newItem.price) && newItem.price > 0) {
                            setMenuItems([...menuItems, newItem]);
                            setNewName("");
                            setNewPrice("");
                        }
                        else {
                            alert("Please enter a valid name and price for the new item.");
                        }
                    }}>
                        Add New Item
                    </button>
            {menuItems.map((item) => (
                <div key={item.id}>
                    <h3>{item.name}</h3>
                    <p>Price: ${item.price}</p>
                    <button onClick={() => {
                        setEditID(item.id);
                        setEditName(item.name);
                    }}>
                        Edit
                    </button>
                    {editID === item.id && (
                        <div>
                        <input
                            type="text"
                            value={editName}
                            onChange={(e) => setEditName(e.target.value)}
                        />
                        <button onClick={() => {
                        setMenuItems(menuItems.map((i) =>
                            i.id === item.id ? { ...i, name: editName } : i
                        ));
                        setEditPriceID(null);
                        setEditPrice(null);
                        setEditName("");
                    }}>
                        Save
                    </button>
                        </div>
                    )}
                    <button onClick={() => {
                        setMenuItems(menuItems.filter((i) => i.id !== item.id));
                    }}>
                        Delete
                    </button>
                    <button onClick={() => {
                       setEditIDPrice(item.id);
                       setEditPrice(item.price);
                    }}>
                        Edit Price
                    </button>
                     {editIDprice === item.id && (
                        <div>
                        <input
                            type="number"
                            value={editPrice}
                            onChange={(e) => setEditPrice(e.target.value)}
                        />
                        <button onClick={() => {
                        setMenuItems(menuItems.map((i) =>
                            i.id === item.id ? { ...i, price: parseFloat(editPrice) } : i
                        ));
                        setEditIDPrice(null);
                        setEditPrice("");
                    }}>
                        Save Price
                    </button>
                        </div>
                    )}
                    <button onClick={() => {
                        setMenuItems(menuItems.map((i) => 
                            i.id === item.id ? { ...i, available: !i.available } : i
                        ));
                    }}>
                        {item.available ? "Mark Unavailable" : "Mark Available"}
                    </button>
                </div>
            ))
    }
        </div>
    );
}
export default AdminMenu;