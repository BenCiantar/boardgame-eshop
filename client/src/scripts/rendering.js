import { Link } from "react-router-dom";
import { FaShoppingCart, FaDollarSign } from "react-icons/fa";
import { BiPlus, BiMinus } from "react-icons/bi";
import { formatDate } from "./utils";
import * as config from "../config";


//-----------Item List

export function renderItemList(items, props) {
    const rows = [];
    for (let i = 0; i < items.length; i++) {
        rows.push(
            <article className="item-card grid-item" key={"item-" + i}>
                <div className="item-img-container">
                    <img src={items[i].image} alt={items[i].title} />
                </div>
                <div className="item-summary">
                    <p className="item-title-text">{items[i].title}</p>
                    <p className="item-publisher-text">{items[i].publisher}</p>
                </div>
                <div className="item-purchase">
                    <button className="buy-btn btn-in-stock" onClick={() => addToCart(items[i], props)}>
                        <FaShoppingCart /> {items[i].price} kr
                    </button>
                    <button className="buy-btn btn-in-stock" onClick={() => quickBuy(items[i], props)}>
                        <FaDollarSign /> Quick Buy
                    </button>
                </div>
            </article>
        );
    }
    if (rows.length === 0) {
        rows.push(
            <div className="grid-item-wide" key={"item-" + 0}>
                <h2>Searching for items...</h2>
            </div>
        )
    }
    return rows;
}

//-----------Navigation

export function renderDesktopMenu(props) {
    const guestMenu = [<Link to='/'>Home</Link>, <Link to='/about'>About</Link>, <Link to='/logincreate'>Login</Link>];
    const userMenu = [<Link to='/'>Home</Link>, <Link to='/about'>About</Link>, <Link to='/my-orders'>My Orders</Link>, <Link to='/account'>Account</Link>, <Link to='/' onClick={() => logout(props)}>Logout</Link>];
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
    props.setCart([]);
}

//--------------- Cart

function addToCart (item, props) {
    //Check the user is logged in
    if (props.user.isLoggedIn) {
        //Copy existing cart in new variable - use ... to spread so that the state will update
        const newCart = [...props.cart];

        let itemExists = false;

        //Check if item already exists in cart
        for (let product of newCart) {
            if (product.title === item.title){
                itemExists = true;
                product.quantity += 1;
            }
        }

        //If item doesn't exist, add a new item with qty 1
        if (!itemExists) {
            newCart.push({
                "image": item.image,
                "title": item.title,
                "quantity": 1,
                "price": item.price
                
            })
        }

        //Update the cart state with the new cart
        props.setCart(newCart);

        //Update the user DB document with the new cart
        updateUserCartDB(newCart, props.user.email);
    } else {
        alert("You must be logged in to add an item to the cart");

        //Add local storage functioanlity here later
    }
}

function removeFromCart (item, props) {
    //Copy existing cart in new variable - use ... to spread so that the state will update
    const newCart = [...props.cart];

    //Check if item already exists in cart
    for (let i = 0; i < newCart.length; i++) {
        if (newCart[i].title === item.title){
            newCart[i].quantity -= 1;

            if (newCart[i].quantity < 1) {
                newCart.splice(i, 1);
            }
        }
    }

    //Update the cart state with the new cart
    props.setCart(newCart);

    //Update the user DB document with the new cart
    updateUserCartDB(newCart, props.user.email);
}

function updateUserCartDB(cart, userEmail) {
    fetch(`${config.API_BASE_URL}/update-user-cart/${userEmail}`, {
        method: 'PATCH',
        body: JSON.stringify({
            cart,
        }),
        headers: {
            "content-type": "application/json",
        },
    })
    .catch((err) => {
        console.error(err);
    });
}


export function renderCartItems(props, totalPrice) {
    const rows = [];
    const cart = props.cart;

    for (let i = 0; i < cart.length; i++) {
        rows.push(
            <>
                <article className="cart-item" key={"cart-" + i}>
                    <div className="cart-image">
                        <img src={cart[i].image} alt={cart[i].title} />
                    </div>
                    <div className="cart-product">
                        <p>{cart[i].title}</p>
                    </div>
                    <div className="cart-quantity">
                        <button onClick={() => removeFromCart(cart[i], props)}><BiMinus /></button><p>{cart[i].quantity}</p><button onClick={() => addToCart(cart[i], props)}><BiPlus /></button>
                    </div>
                    <div className="cart-price">
                        <p>{cart[i].quantity * cart[i].price}kr</p>
                    </div>
                </article>
            </>
        );
    }

    return rows;
}



//----------------Orders

function quickBuy(item, props) {
    if (props.user.isLoggedIn) {
        const cart = [item];

        const newOrderDetails = {
            "orderNo": Date.now().toString(),
            "email": props.user.email,
            "status": "Paid",
            "totalQuantity": 1,
            "totalPrice": item.price,
            "address": props.user.address,
            "city": props.user.city,
            "postcode": props.user.postcode,
            "itemList": cart,
            "timestamp": new Date()
        }

        fetch(`${config.API_BASE_URL}/create-order`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(newOrderDetails),
        })
        .then(() => {
        alert('Your order was placed successfully!');
        })
        .catch((err) => {
            console.log(err);
        });
    } else {
        alert("You must be logged in to purchase items!")
    }
}


export function createOrder (cart, props) {
    if (cart.length < 1){
        alert("Please add an item to your cart before ordering!");
        return;
    }

    let totalPrice = 0;
    let totalQuantity = 0;

    for (let item of cart) {
        totalQuantity += item.quantity;
        totalPrice += item.price * item.quantity;
    }

    const newOrderDetails = {
        "orderNo": Date.now().toString(),
        "email": props.user.email,
        "status": "Paid",
        "totalQuantity": totalQuantity,
        "totalPrice": totalPrice,
        "address": props.user.address,
        "city": props.user.city,
        "postcode": props.user.postcode,
        "itemList": cart,
        "timestamp": new Date()
    }

    fetch(`${config.API_BASE_URL}/create-order`, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(newOrderDetails),
    })
    .then(() => {
    props.setCart([]);
    alert('Your order was placed successfully!');
    })
    .then(() => {
    updateUserCartDB([], props.user.email);
    })
    .catch((err) => {
        console.log(err);
    });
}

export function renderOrderList(orders, isStaff) {
    let rows = [];

    for (let i = 0; i < orders.length; i++) {
        let date = formatDate(orders[i].timestamp);
        let status = [];
        if (isStaff && orders[i].status !== "Delivered") {
            status.push( 
                        <>
                            <select id={orders[i].orderNo+"-select"}>
                                <option hidden value="">{orders[i].status}</option>
                                <option value="Paid">Paid</option>
                                <option value="Packaged">Packaged</option>
                                <option value="Shipped">Shipped</option>
                                <option value="Delivered">Delivered</option>
                            </select>
                            <button onClick={() => updateOrderStatus(orders[i].orderNo)}>Update</button>
                        </>
            )
        } else {
            status = <p>{orders[i].status}</p>;
        }    
        rows.push(
            <article className="collapsible-order-content">
                <div className="date-col">
                    <p>{date}</p>
                </div>
                <div className="id-col">
                    <p>{orders[i].orderNo}</p>
                </div>
                <div className="total-col">
                    <p>{orders[i].totalPrice}kr</p>
                </div>
                <div className="address-col">
                    <p>{orders[i].address}, {orders[i].city}, {orders[i].postcode}</p>
                </div>
                <div className="status-col">
                    {status}
                </div>
            </article>
        );
    }
    return rows;
}

function updateOrderStatus(orderId){
    const status = document.getElementById(`${orderId}-select`).value;
    
    fetch(`${config.API_BASE_URL}/update-order-status/${orderId}`, {
        method: 'PATCH',
        body: JSON.stringify({
            status,
        }),
        headers: {
            "content-type": "application/json",
        },
    })
    .catch((err) => {
        console.error(err);
    });
}
