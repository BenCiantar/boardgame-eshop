import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";


//-----------Home Page

export function renderItemList(items) {
    const rows = [];
    for (let i = 0; i < items.length; i++) {
        rows.push(
            <div className="item-card grid-item" key={"item-" + i}>
                <div className="item-img-container">
                    <img src={items[i].image} alt={items[i].title} />
                </div>
                <div className="item-summary">
                    <p className="item-title-text">{items[i].title}</p>
                    <p className="item-publisher-text">{items[i].publisher}</p>
                </div>
                <div className="item-purchase">
                    <button className="buy-btn btn-in-stock">
                        <FaShoppingCart /> {items[i].price} kr
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