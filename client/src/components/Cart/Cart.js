import { renderCartItems, createOrder } from "../../scripts/rendering"

function Cart(props) {
    let totalPrice = 0;
    for (let item of props.cart) {
        totalPrice += item.quantity * item.price;
    }

    const rows = renderCartItems(props, totalPrice);

    return (
        <section id="cart" className="hidden">
            <div className="cart-item" key={"cart-head"}>
                <div className="cart-image">
                </div>
                <div className="cart-product">
                    <p>Product</p>
                </div>
                <div className="cart-quantity">
                    <p>Qty</p>
                </div>
                <div className="cart-price">
                    <p>Price</p>
                </div>
            </div>
            { rows }
            <div className="cart-item" key={"cart-foot"}>
                <div className="cart-image">
                    <button onClick={() => createOrder(props.cart, props)}>Order</button>
                </div>
                <div className="cart-product">
                </div>
                <div className="cart-quantity">
                <h4 id="footerh4">Total:</h4>
                </div>
                <div className="cart-price">
                    <p>{ totalPrice }kr</p>
                </div>
            </div>
        </section>
    );
}

export default Cart;