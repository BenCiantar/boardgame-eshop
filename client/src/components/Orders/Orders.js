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

    //Split orders into two arrays - current and past orders
    let pastOrders = [];
    let activeOrders = [];
    
    for (let order of orders) {
        if (order.status == "Delivered"){
            pastOrders.push(order);
        } else {
            activeOrders.push(order);
        }
    }

    const rows = renderOrderList(orders);

    return (
        <div className="warehouse-section">
            <div className="collapsible-header" onClick={() => toggleHidden('collapsible-' + props.type)}>
                {props.type} Orders
            </div>
            <div id={'collapsible-' + props.type} className="hidden">
                {rows}
            </div>
        </div>
    )
}

export default Orders;