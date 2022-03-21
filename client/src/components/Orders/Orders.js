
function Orders(props) {
    
    return (
        <div className="warehouse-section">
            <div className="collapsible-header">
                Orders {props.type}
            </div>
            <div className="collapsible">
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