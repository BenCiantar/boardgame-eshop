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
    if (rows.length === 0) {
        rows.push(
            <div className="grid-item-wide" key={"item-" + 0}>
                <h2>No results found, try again.</h2>
            </div>
        )
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

//--------------- Cart

export function renderCartItems(cart) {
    const rows = [];
    let totalPrice = 0;
    for (let i = 0; i < cart.length; i++) {
        totalPrice += cart[i].quantity * cart[i].price
        rows.push(
            <>
            <div className="cart-item">
                <div className="cart-image">
                </div>
                <div className="cart-product">
                    <h4>Product</h4>
                </div>
                <div className="cart-quantity">
                    <h4>Qty</h4>
                </div>
                <div className="cart-price">
                    <h4>Price</h4>
                </div>
            </div>
            <div className="cart-item" key={"cart-" + i}>
                <div className="cart-image">
                    <img src={cart[i].image} alt={cart[i].title} />
                </div>
                <div className="cart-product">
                    <p>{cart[i].title}</p>
                </div>
                <div className="cart-quantity">
                    <p>{cart[i].quantity}</p>
                </div>
                <div className="cart-price">
                    <p>{cart[i].quantity * cart[i].price}kr</p>
                </div>
            </div>
            <div className="cart-item">
                <div className="cart-image">
                </div>
                <div className="cart-product">
                    <h4>Total:</h4>
                </div>
                <div className="cart-quantity">
                </div>
                <div className="cart-price">
                    <p>{ totalPrice }kr</p>
                </div>
            </div>
            </>
        );
    }
    if (rows.length === 0) {
        rows.push(
            <div id="cart-empty">
                <h4>Cart Empty</h4>
            </div>
        )
    }
    return rows;
}

