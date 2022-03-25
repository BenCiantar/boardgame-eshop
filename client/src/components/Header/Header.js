import { FaShoppingCart } from "react-icons/fa";
import { toggleHidden } from "../../scripts/utils"

function Header() {

    const handleClick = () => {
        toggleHidden("cart");
    }
    
    return (
        <header id="header">
            <div id="mobile-nav-section"></div>
            <div id="title-section"><h1>Runic Games</h1></div>
            <div id="cart-section">
                <div id="cart-icon" onClick={ handleClick }>
                    <FaShoppingCart />
                </div>
            </div>
        </header>
    );
}

export default Header;