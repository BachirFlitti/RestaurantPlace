import {useState} from "react";
const menu = [
    {
        id: 1,
        category: "Mains",
        name: "Hamburger",
        price: 5.99,
        ingredients: ["Beef patty", "Lettuce", "Tomato", "Cheese", "Bun"],
        description: "A classic beef burger with lettuce, tomato, and cheese.",
        diet: "Contains gluten and dairy",
    },
    {
        id: 2,
        category: "Starters",
        name: "Fries",
        price: 2.99,
        ingredients: ["Potatoes", "Oil", "Salt"],
        description: "Crispy golden fries, salted to perfection.",
        diet: "Vegan",
    },
    {
        id: 3,
        category: "Beverages",
        name: "Milkshake",
        price: 4.99,
        ingredients: ["Milk", "Ice cream", "Flavoring"],
        description: "Creamy milkshake in your choice of flavor.",
        diet: "Contains dairy",
    },
    {
        id: 4,
        category: "Deserts",
        name: "Brownie",
        price: 6.99,
        ingredients: ["Chocolate", "Butter", "Sugar", "Eggs"],
        description: "Rich and fudgy chocolate brownie with vanilla ice cream.",
        diet: "Contains gluten and dairy",
    }
];

function Menu(){
    const [search, setSearch] = useState("");
    const [maxPrice, setMaxPrice] = useState(99);
    const [category, setCategory] = useState("All");
    const [diet, setDiet] = useState("All");
    const [orderType, setOrderType] = useState("Pickup");
    const [orderPlaced, setOrderPlaced] = useState(false);
    const [orderStatus, setOrderStatus] = useState("Pending");
    const [customerName, setCustomerName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [address, setAddress] = useState("");
    const filteredMenu = menu.filter((item) => {
        const matchesSearch = item.name.toLowerCase().includes(search.toLowerCase());
        const matchesCategory = category === "All" || item.category === category;
        const matchesMaxPrice = maxPrice === "" || item.price <= maxPrice;
        const matchesDiet = diet === "All" || item.diet.includes(diet);
        return matchesSearch && matchesCategory && matchesMaxPrice && matchesDiet;
    });
    const [cart, setCart] = useState([]);
    const total = cart.reduce((sum, item) => sum + item.price, 0);

    const addToCart = (item) => {
        setCart([...cart, item]);
    }
        
    const removeFromCart = (index) => {
        setCart(cart.filter((cartItem, i) => i !== index));
    };
    return(
    <div>
        <h1>Menu</h1>
        <p>Welcome to our menu!</p>
        <input
            type="text"
            placeholder="Search for a menu item..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            />

        <input 
              type="number"
              placeholder="Max Price"
              value={maxPrice}
              onChange={(e) => setMaxPrice(e.target.value === "" ? "" : Number(e.target.value))}
        />
       
        <select value={diet} onChange={(e) => setDiet(e.target.value)}>
            <option value="All">All Diets</option>
            <option value="Vegan">Vegan</option>
            <option value="Contains dairy">Contains Dairy</option>
            <option value="Contains gluten and dairy">Contains Gluten and Dairy</option>
        </select>
        <button onClick={() => setCategory("All")}>All</button>
        <button onClick={() => setCategory("Mains")}>Mains</button>
        <button onClick={() => setCategory("Starters")}>Starters</button>
        <button onClick={() => setCategory("Beverages")}>Beverages</button>
        <button onClick={() => setCategory("Deserts")}>Deserts</button>
        <hr />
        {filteredMenu.map((item) => (
            <div key={item.id}>
                <h2>{item.name}</h2>
                <p>{item.description}</p>
                <p>${item.price.toFixed(2)}</p>
                <button onClick={() => addToCart(item)}>Add to Cart</button>
                <p>Ingredients: {item.ingredients.join(", ")}</p>
                <p>Dietary Information: {item.diet}</p>
                <hr />
            </div>
        ) 
        )}
        <h2>Shopping Cart</h2>
        {cart.map((item, index) => (
            <div key={index}>
                <p>{item.name} - ${item.price.toFixed(2)}</p>
                <button onClick={() => removeFromCart(index)}>Remove from Cart</button>
            </div> 
        ))}
        <h3>Total: ${total.toFixed(2)}</h3>
        <h2>Checkout</h2>
        <form onSubmit={(e) => {
            e.preventDefault();
            alert("Order placed successfully!");
            if(cart.length >0){
                setOrderStatus("Pending");
                setOrderPlaced(true);
            }
        }}>
            <label>
                Name:
            </label>
            <input type="text" 
            value={customerName}
            onChange={(e) => setCustomerName(e.target.value)}
            required />
            <label>
                Phone Number:
            </label>
            <input type="text" 
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            required />
            <label>
            Order Type:
            </label>
                <select value={orderType} onChange={(e) => setOrderType(e.target.value)}>
                    <option value="Pickup">Pickup</option>
                    <option value="Delivery">Delivery</option>
                </select>
            {orderType === "Delivery" && (
                <div>
                    <label>
                        Address:
                    </label>
                    <input type="text" 
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    required />
                </div>
            )}
            
            <button type="submit" disabled={cart.length === 0}>
                Place Order
            </button>
        </form>
        {orderPlaced && (
            <div>
                <h3>Order Confirmation</h3>
                <p>Thank you for your order, {customerName}!</p>
                <p>We will contact you at {phoneNumber}.</p>
                <p>Order Status: {orderStatus}</p>
                <p>Order Type: {orderType}</p>
                <p>Items: {cart.map((item) => item.name).join(", ")}</p>
                {orderType === "Delivery" && (
                    <p>Your order will be delivered to: {address}</p>
                )}
                <p>Total: ${total.toFixed(2)}</p>
            </div>
        )}

    </div>);    
}
export default Menu;