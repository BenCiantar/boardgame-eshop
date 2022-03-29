import { renderCartItems } from "../../scripts/rendering"

function Cart(props) {
    const rows = renderCartItems(props);
    
    return (
        <section id="cart" className="hidden">
            { rows }
        </section>
    );
}

export default Cart;