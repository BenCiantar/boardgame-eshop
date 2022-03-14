import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { Home, About, BadURL404 } from "./pages";
import * as config from "./config";




function App() {
  const [items, setItems] = useState([]);
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

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home items={ items }/>} />
        <Route path="/about" element={<About />}  />
        <Route path="*" element={<BadURL404 />}  />
      </Routes>  
    </div>
  );
}

export default App;
