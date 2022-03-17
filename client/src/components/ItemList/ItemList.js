import { renderItemList } from "../../scripts/rendering";

function ItemList(props) {
    let rows = renderItemList(props);

    return (
        <ul id="item-list">
            {rows}
        </ul>
    );
}

export default ItemList;