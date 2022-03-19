import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { Home, About, LoginCreate, BadURL404 } from "./pages";
import * as config from "./config";




function App() {
    const [items, setItems] = useState([]);
    const [users, setUsers] = useState([]);
    const [user, setUser] = useState({"isLoggedIn": false, "isStaff": false});

    // const [filteredItems, setFilteredItems] = useState(null);

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

    // useEffect(() => {
    //     fetch(`${config.API_BASE_URL}/users`, {
    //         headers: {
    //             "content-type": "application/json",
    //         },
    //     })
    //     .then((response) => {
    //         return response.json();
    //     })
    //     .then((result) => {
    //         setUsers(result);
    //     })
    //     .catch((err) => {
    //         console.error(err);
    //     });
    // }, []);

    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Home items={ items } user={ user } setUser={ setUser } />} />
                <Route path="/about" element={<About />}  />
                <Route path="/logincreate" element={<LoginCreate user={ user } setUser={ setUser } />}  />
                <Route path="*" element={<BadURL404 />}  />
            </Routes>  
        </div>
    );
}

export default App;
