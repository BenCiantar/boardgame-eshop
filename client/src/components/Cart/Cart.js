import { renderCartItems } from "../../scripts/rendering"

function Cart(props) {

    const rows = renderCartItems(props.cart);
    
    return (
        <section id="cart">
            { rows }
        </section>
    );
}

export default Cart;