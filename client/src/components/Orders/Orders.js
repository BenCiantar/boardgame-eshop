import { useEffect, useState } from "react";
import * as config from "../../config";
import { toggleHidden } from "../../scripts/utils";
import { renderOrderList } from "../../scripts/rendering";

function Orders(props) {
    const [orders, setOrders] = useState([]);

    const endpoint = props.isLoggedIn ? "/all-orders" : `/user-orders/${props.userEmail}`;

    //Retrieve all orders from the DB
    useEffect(() => {
        fetch(`${config.API_BASE_URL}${endpoint}`, {
            headers: {
                "content-type": "application/json",
            },
        })
        .then((response) => {
            return response.json();
        })
        .then((result) => {
            setOrders(result);
        })
        .catch((err) => {
            console.error(err);
        });
    }, []);

    //Check if the order list wants active or past orders, and only push those orders to rows
    let filteredOrders = [];

    if (props.type == "Active"){
        for (let order of orders) {
            if (order.status != "Delivered"){
                filteredOrders.push(order);
            }
        }
    } else {
        for (let order of orders) {
            if (order.status == "Delivered"){
                filteredOrders.push(order);
            }
        }
    }

    const rows = renderOrderList(filteredOrders);

    return (
        <div className="warehouse-section">
            <div className="collapsible-header" onClick={() => toggleHidden('collapsible-' + props.type)}>
                {props.type} Orders
            </div>
            <div id={'collapsible-' + props.type} className="hidden">
                <div id="collapsible-order-headings">
                    <div className="date-col">
                        <h4>Date</h4>
                    </div>
                    <div className="id-col">
                        <h4>Order ID</h4>
                    </div>
                    <div className="total-col">
                        <h4>Total</h4>
                    </div>
                    <div className="address-col">
                        <h4>Address</h4>
                    </div>
                    <div className="status-col">
                        <h4>Status</h4>
                    </div>
                </div>
                {rows}
            </div>
        </div>
    )
}

export default Orders;