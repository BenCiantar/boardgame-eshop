import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { Home, About, LoginCreate, Warehouse, BadURL404 } from "./pages";





function App() {
    const [user, setUser] = useState({"isLoggedIn": false, "isStaff": false});
    const [cart, setCart] = useState([]);

    console.log(cart);

    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Home user={ user } setUser={ setUser } cart={ cart } setCart={ setCart } />} />
                <Route path="/about" element={<About user={ user } setUser={ setUser } />}  />
                <Route path="/logincreate" element={<LoginCreate user={ user } setUser={ setUser } setCart={ setCart }/>}  />
                <Route path="/warehouse" element={<Warehouse user={ user } setUser={ setUser } />}  />
                <Route path="*" element={<BadURL404 user={ user } setUser={ setUser } />}  />
            </Routes>  
        </div>
    );
}

export default App;
