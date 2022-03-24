import { useEffect, useState } from "react";
import * as config from "../../config";
import { renderItemList } from "../../scripts/rendering";
import { sortItems } from "../../scripts/utils";
import { FaSistrix } from "react-icons/fa";
import { GoSettings } from "react-icons/go";

function ItemList() {

    const [items, setItems] = useState([]);

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
            const sortBy = document.getElementById("sorting").value;
            const sortedItems = sortItems(result, sortBy)
            setItems(sortedItems);
        })
        .catch((err) => {
            console.error(err);
        });
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        const searchInput = e.target.search.value;

        fetch(`${config.API_BASE_URL}/item-search/${searchInput}`, {
        headers: {
            "content-type": "application/json",
        },
        })
        .then((response) => {
            return response.json();
        })
        .then((result) => {
            const sortBy = document.getElementById("sorting").value;
            const sortedItems = sortItems(result, sortBy)
            setItems(sortedItems);
            e.target.reset();
        })
        .catch((err) => {
            console.error(err);
        });
    }

    const handleChange = (e) => {
        const sortBy = e.target.value;
        const sortedItems = sortItems(items, sortBy);
        setItems(sortedItems);
    }

    let rows = renderItemList(items);
    console.log(items);

    return (
        <div id="item-list-wrapper">
            <div id="filter-options">
                <div id="sort-and-filter">
                    <div id="filter-button">
                        <button type="submit" value="submit"><GoSettings /></button>
                    </div>
                    <div id="sort">
                        <select name="sorting" id="sorting" onChange={handleChange}>
                            <option value="Release-new-old" defaultValue>Release - New to old</option>
                            <option value="Release-old-new">Release - Old to new</option>
                            <option value="Price-high-low">Price - High to low</option>
                            <option value="Price-low-high">Price - Low to high</option>
                            <option value="Alpha-a-z">Alphabetical - a to z</option>
                            <option value="Alpha-z-a">Alphabetical - z to a</option>
                        </select>
                    </div>
                </div>
                <form onSubmit={handleSubmit}>
                    <div id="search">
                        <div id="search-bar">
                            <label htmlFor="search"></label>
                            <input type="text" placeholder="Search items" name="search" required />
                        </div>
                        <div id="search-button">
                            <button type="submit" value="submit"><FaSistrix /></button>
                        </div>
                    </div>
                </form>
            </div>
            <ul id="item-list">
                {rows}
            </ul>
        </div>
    );
}

export default ItemList;