import { renderItemList } from "../../scripts/rendering";

function ItemList(props) {
    let rows = renderItemList(props);

    return (
        <div id="item-list-wrapper">
            <div id="filter-options">
                <div id="sort-and-filter">
                    <div id="filter-button">
                        FB
                    </div>
                    <div id="sort">
                        Sort By
                    </div>
                </div>
                <div id="search">
                    <div id="search-bar">
                        Search
                    </div>
                    <div id="search-button">
                        SB
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