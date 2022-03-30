import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { Home, About, LoginCreate, Warehouse, Account, MyOrders, BadURL404 } from "./pages";





function App() {
    const [user, setUser] = useState({"isLoggedIn": false, "isStaff": false});
    const [cart, setCart] = useState([]);

    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Home user={ user } setUser={ setUser } cart={ cart } setCart={ setCart } />} />
                <Route path="/about" element={<About user={ user } setUser={ setUser } cart={ cart } setCart={ setCart } />}  />
                <Route path="/account" element={<Account user={ user } setUser={ setUser } cart={ cart } setCart={ setCart } />}  />
                <Route path="/logincreate" element={<LoginCreate user={ user } setUser={ setUser } cart={ cart } setCart={ setCart } />}  />
                <Route path="/warehouse" element={<Warehouse user={ user } setUser={ setUser } cart={ cart } setCart={ setCart } />}  />
                <Route path="/my-orders" element={<MyOrders user={ user } setUser={ setUser } cart={ cart } setCart={ setCart } />}  />
                <Route path="*" element={<BadURL404 user={ user } setUser={ setUser } cart={ cart } setCart={ setCart } />}  />
            </Routes>  
        </div>
    );
}

export default App;
