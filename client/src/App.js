import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { Home, About, LoginCreate, Warehouse, BadURL404 } from "./pages";
import * as config from "./config";




function App() {
    const [items, setItems] = useState([]);
    const [user, setUser] = useState({"isLoggedIn": false, "isStaff": false});

    useEffect(() => {
        fetch(`${config.API_BASE_URL}/items`, {
            headers: {
                "content-type": "application/json",
            },
        })
        .then((response) => {
            return response.json();
        })
        .then((result) => {
            setItems(result);
        })
        .catch((err) => {
            console.error(err);
        });
    }, []);

    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Home items={ items } user={ user } setUser={ setUser } />} />
                <Route path="/about" element={<About user={ user } setUser={ setUser } />}  />
                <Route path="/logincreate" element={<LoginCreate user={ user } setUser={ setUser } />}  />
                <Route path="/warehouse" element={<Warehouse user={ user } setUser={ setUser } />}  />
                <Route path="*" element={<BadURL404 user={ user } setUser={ setUser } />}  />
            </Routes>  
        </div>
    );
}

export default App;
