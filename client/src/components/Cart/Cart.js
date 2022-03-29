import { renderCartItems } from "../../scripts/rendering"

function Cart(props) {
    console.log("Props", props)

    console.log(props.cart);

    const rows = renderCartItems(props);
    
    return (
        <section id="cart" className="hidden">
            { rows }
        </section>
    );
}

export default Cart;