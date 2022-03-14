//-----------Home Page

export function renderItemList(props) {
    const rows = [];
    for (let i = 0; i < props.items.length; i++) {
        rows.push(
            <div className="item-card" key={"item-" + i}>
                <div className="item-img-container">
                    <img src={props.items[i].image} alt={props.items[i].title} />
                </div>
                <div className="item-summary">
                    <p className="item-title-text">{props.items[i].title}</p>
                    <p>{props.items[i].publisher}</p>
                </div>
                <div className="item-purchase">
                    <button className="buy-button">{props.items[i].price}kr</button>
                </div>
            </div>
        );
    }
    return rows;
}