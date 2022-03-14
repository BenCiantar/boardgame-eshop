import { renderItemList } from "../../scripts/rendering";


function ItemList(props) {
    console.log(props)

    let rows = renderItemList(props);

    return (
        <div id="item-list">
            <h3>Item List</h3>
            {rows}
        </div>
    );
}

export default ItemList;