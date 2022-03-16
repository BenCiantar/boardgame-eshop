import { renderDesktopMenu } from "../../scripts/rendering";

function DesktopNav(props) {

    const rows = renderDesktopMenu(props);
    
    return (
        <div id="desktop-nav">
            <nav id="desktop-menu">
                <ul id="desktop-menu-list">
                    {rows}
                </ul>
            </nav>
            <div id="desktop-search">
                Search goes here
            </div>
        </div>
    );
}

export default DesktopNav;