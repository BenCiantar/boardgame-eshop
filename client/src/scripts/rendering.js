import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";


//-----------Item List

export function renderItemList(items, props) {
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
                    <button className="buy-btn btn-in-stock" onClick={() => addToCart(items[i], props)}>
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

function addToCart (item, props) {
    //Copy existing cart in new variable - use ... to spread so that the state will update
    const newCart = [...props.cart];

    //Check if item already exists in cart
    //If not, add a new item with qty 1
    
    
    newCart.push({
        "image": item.image,
        "title": item.title,
        "quantity": 1,
        "price": item.price
        
    })
    

    //If item exists, just add 1 to the qty



    //Update the cart state with the new cart
    props.setCart(newCart);


    //Update the user document with the new cart in MongoDB

}

function removeFromCart () {
    
    //Copy existing cart in new variable - use ... to spread so that the state will update

    //Loop through cart array to find the matching item
    //Reduce the item qty by 1

    //Check if the item qty < 1 - if it is, remove the item from the cart entirely

    //Update the cart state with the new cart
    
    //Check if user signed in - if they are
    //Update the user document with the new cart in MongoDB

    //If they aren't
    //pdate the local storage with the guest cart
}



export function renderCartItems(cart) {
    const rows = [];
    let totalPrice = 0;

    rows.push(
    <div className="cart-item" key={"cart-head"}>
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
    );

    for (let i = 0; i < cart.length; i++) {
        totalPrice += cart[i].quantity * cart[i].price
        rows.push(
            <>

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
            </>
        );
    }

    rows.push(
    <div className="cart-item" key={"cart-foot"}>
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
    );

    if (rows.length === 0) {
        rows.push(
            <div id="cart-empty">
                <h4>Cart Empty</h4>
            </div>
        )
    }
    return rows;
}



//----------------Orders

function placeOrder () {
    //Check if user is signed in - if not alert that they must first sign in
    //Copy existing cart to user cart on sign in, empty local storage cart

    //Create a new object containing order details - logged in user ID, timestamp, cart items
    //Set packaged, shipped, delivered to false

    //Empty current cart

    //Insert the order document into the orders MongoDB collection
}

function renderUserOrders() {
    //Retrieve a list of orders from the DB where the userID matches the current logged in user ID
    //Sort into two arrays based on whether delivered attribute == true

    //Render one list of active orders (not delivered)

    //Render one list of past orders

    //Implement sort by function - optional
}

function renderAllOrders() {
    //Retrieve a list of all orders from the DB

    //Sort into two arrays based on whether delivered attribute == true

    //Render one list of active orders (not delivered)

    //Render one list of past orders

    //Add functionality to check packaged, shipped, delievered and update the order

    //Implement sort by function - optional
}
