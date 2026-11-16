import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Reservations from "./pages/Reservation";
import Admin from "./pages/admin/AdminHome";
import ChatBot from "./ChatBot";
import { ThemeProvider } from "./ThemeContext";
function App() {
  return (
    <ThemeProvider>
    <Router>
      <nav style={{display:"flex", alignItems: "center", justifyContent:"center", gap:"10px"}}>
        <Link to="/">Home</Link> | 
        <Link to="/Menu">Menu</Link> | 
        <Link to="/Reservation">Reservations</Link> | 
        <Link to="/Admin">Admin</Link> |
        <Link to="/ChatBot">ChatBot</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Menu" element={<Menu />} />
        <Route path="/Reservation" element={<Reservations />} />
        <Route path="/Admin" element={<Admin />} />
        <Route path="/ChatBot" element={<ChatBot />} />
      </Routes>
    </Router>
    </ThemeProvider>

  );
}

export default App;
