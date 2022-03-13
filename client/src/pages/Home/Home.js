import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Header, Item, ItemList } from "../../components";
import * as config from "../../config";


function Home() {
    const [items, setItems] = useState([]);
    const [filteredItems, setFilteredItems] = useState(null);
  
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
        <>
            <Header />
            <body>
                <div>
                    <h1>Router Test - Home</h1>
                    <nav>
                        <Link to="about">About</Link>
                    </nav>
                    <div>
                        <ItemList />
                    </div>
                </div>
            </body>
        </>
    )
}

export default Home;