import { renderDesktopMenu } from "../../scripts/rendering";


function DesktopNav(props) {

    const rows = renderDesktopMenu(props);
    
    return (
        <section id="desktop-nav">
            <nav id="desktop-menu">
                <menu id="desktop-menu-list" key="menuList">
                    {rows}
                </menu>
            </nav>
        </section>
    );
}

export default DesktopNav;