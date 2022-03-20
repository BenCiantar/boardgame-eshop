import { Link } from "react-router-dom";


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
                        <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" fill="currentColor" className="bi bi-cart-plus-fill" viewBox="0 0 16 16">
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

//-----------Navigation

export function renderDesktopMenu(props) {
    const guestMenu = [<Link to='/'>Home</Link>, <Link to='/about'>About</Link>, <Link to='/logincreate'>Login</Link>];
    const userMenu = [<Link to='/'>Home</Link>, <Link to='/about'>About</Link>, <Link to='/orders'>Orders</Link>, <Link to='/account'>Account</Link>, <Link to='/' onClick={() => logout(props)}>Logout</Link>];
    const staffMenu = [<Link to='/'>Home</Link>, <Link to='/about'>About</Link>, <Link to='/warehouse'>Warehouse</Link>, <Link to='/' onClick={() => logout(props)}>Logout</Link>];

    const rows = [];

    const isLoggedIn = props.user.isLoggedIn;
    const isStaff = props.user.isStaff;

    if (isLoggedIn === true && isStaff === false) {
        for (const item of userMenu){
            rows.push(
            <li className="desktop-menu-item" key={item.props.children}>
                {item}
            </li>
            );    
        }  
    } else if (isLoggedIn === true && isStaff === true) {
        for (const item of staffMenu){
            rows.push(
            <li className="desktop-menu-item" key={item.props.children}>
                {item}
            </li>
            );    
        } 
    } else {
        for (const item of guestMenu){
            rows.push(
            <li className="desktop-menu-item" key={item.props.children}>
                {item}
            </li>
            );    
        } 
    }

    return rows;
}

export function logout(props) {
    props.setUser({"isLoggedIn": false, "isStaff": false});
}