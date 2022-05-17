import { FaShoppingCart } from "react-icons/fa";
import { toggleHidden } from "../../scripts/utils"

function Header() {

    const handleClick = () => {
        toggleHidden("cart");
    }
    
    return (
        <header id="header">
            <nav id="mobile-nav-section"></nav>
            <section id="title-section"><h1>R u n i c  -  G a m e s</h1></section>
            <section id="cart-section">
                <div id="cart-icon" onClick={ handleClick }>
                    <FaShoppingCart />
                </div>
            </section>
        </header>
    );
}

export default Header;