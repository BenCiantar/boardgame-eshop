
import { toggleHidden } from "../../scripts/utils";

function Orders(props) {
    const title = props.type == 'staffActive' ? 'Active' : 'Past';

    return (
        <div className="warehouse-section">
            <div className="collapsible-header" onClick={() => toggleHidden('collapsible-' + props.type)}>
                {title} Orders
            </div>
            <div id={'collapsible-' + props.type} className="hidden">
                <div className="collapsible-order-content">
                    Content 1 goes here
                </div>
                <div className="collapsible-order-content">
                    Content 2 goes here
                </div>
            </div>
        </div>
    )
}

export default Orders;