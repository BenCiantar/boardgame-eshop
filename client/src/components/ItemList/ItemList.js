import { renderItemList } from "../../scripts/rendering";
import { FaSistrix } from "react-icons/fa";
import { GoSettings } from "react-icons/go";

function ItemList(props) {
    let rows = renderItemList(props);

    return (
        <div id="item-list-wrapper">
            <div id="filter-options">
                <div id="sort-and-filter">
                    <div id="filter-button">
                        <button type="submit" value="submit"><GoSettings /></button>
                    </div>
                    <div id="sort">
                        <select name="sorting" id="sorting">
                            <option value="" selected disabled hidden>Sort by:</option>
                            <option value="Release-new-old">Release - New to old</option>
                            <option value="Release-old-new">Release - Old to new</option>
                            <option value="Price-high-low">Price - High to low</option>
                            <option value="Price-low-high">Price - Low to high</option>
                        </select>
                    </div>
                </div>
                <div id="search">
                    <div id="search-bar">
                        <label htmlFor="search"></label>
                        <input type="text" placeholder="Search items" name="search" required />
                    </div>
                    <div id="search-button">
                        <button type="submit" value="submit"><FaSistrix /></button>
                    </div>
                </div>
            </div>
            <ul id="item-list">
                {rows}
            </ul>
        </div>
    );
}

export default ItemList;