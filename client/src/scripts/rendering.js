//-----------Home Page

export function renderItemList(props) {
    const rows = [];
    for (let i = 0; i < props.items.length; i++) {
        rows.push(
            <div className="item-card" key={"item-" + i}>
                <img src={props.items[i].image} alt={props.items[i].title} width="200" height="200" /><br />
                Name: {props.items[i].title}<br />
                Publisher: {props.items[i].publisher}<br />
                Release Year: {props.items[i].releaseYear}<br />
                Cost: {props.items[i].price}kr<br />
                {/* Expansion?: {props.items[i].isExpansion}<br /> */}
                Num in stock: {props.items[i].numInStock}
            </div>
        );
    }
    return rows;
}