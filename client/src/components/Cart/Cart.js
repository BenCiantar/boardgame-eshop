import { renderCartItems } from "../../scripts/rendering"

function Cart(props) {

    console.log(props.cart);

    const rows = renderCartItems(props.cart);
    
    return (
        <section id="cart" className="hidden">
            { rows }
        </section>
    );
}

export default Cart;