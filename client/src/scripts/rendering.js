//-----------Home Page

export function renderItemList(props) {
    const rows = [];
    for (let i = 0; i < props.items.length; i++) {
        rows.push(
            <div className="item-card grid-item" key={"item-" + i}>
                <div className="item-img-container">
                    <img src={props.items[i].image} alt={props.items[i].title} />
                </div>
                <div className="item-summary">
                    <p className="item-title-text">{props.items[i].title}</p>
                    <p className="item-publisher-text">{props.items[i].publisher}</p>
                </div>
                <div className="item-purchase">
                    <button className="buy-btn btn-in-stock">
                        <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" fill="currentColor" class="bi bi-cart-plus-fill" viewBox="0 0 16 16">
                            <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM9 5.5V7h1.5a.5.5 0 0 1 0 1H9v1.5a.5.5 0 0 1-1 0V8H6.5a.5.5 0 0 1 0-1H8V5.5a.5.5 0 0 1 1 0z"/>
                        </svg>
                        {props.items[i].price} kr
                    </button>
                </div>
            </div>
        );
    }
    return rows;
}


export function renderDesktopMenu(props) {
    const rows = [];

    console.log(props.user.loggedIn)

    const staffMember = true; //Change to check email contains company

    if (props.user.loggedIn === true && staffMember === false) {
        rows.push(
            <>
                <li className="desktop-menu-item">
                    Home
                </li>
                <li className="desktop-menu-item">
                    About Us
                </li>
                <li className="desktop-menu-item">
                    My Orders
                </li>
                <li className="desktop-menu-item">
                    Account
                </li>
                <li className="desktop-menu-item">
                    Logout
                </li>
            </>
        );
    } else if (props.user.loggedIn === true && staffMember === true) {
        rows.push(
            <>
                <li className="desktop-menu-item">
                    Home
                </li>
                <li className="desktop-menu-item">
                    Warehouse
                </li>
                <li className="desktop-menu-item">
                    Add Item
                </li>
                <li className="desktop-menu-item">
                    Account
                </li>
                <li className="desktop-menu-item">
                    Logout
                </li>
            </>
        );
    } else {
        rows.push(
            <>
                <li className="desktop-menu-item">
                    Home
                </li>
                <li className="desktop-menu-item">
                    About Us
                </li>
                <li className="desktop-menu-item">
                    Log In
                </li>
                <li className="desktop-menu-item">
                    Create Account
                </li>
            </>
        );
    }
    return rows;
}