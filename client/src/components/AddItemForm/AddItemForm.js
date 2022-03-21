import React from "react";
import * as config from "../../config";

export default class AddItemForm extends React.Component {
    constructor(props) {
        super(props);
    }

    handleSubmit = (e) => {
        e.preventDefault();

        const newItemDetails = {
            "title": e.target.title.value,
            "image": e.target.image.value,
            "publisher": e.target.publisher.value,
            "collection": e.target.collection.value,
            "price": e.target.price.value,
            "isExpansion": e.target.expansion.value,
            "minPlayers": e.target.minPlayers.value,
            "maxPlayers": e.target.maxPlayers.value,
            "numInStock": e.target.numInStock.value,
            "description": e.target.description.value, 
            "category": e.target.category.value,
            "language": e.target.language.value,
            "releaseDate": e.target.releaseDate.value 
        }

        fetch(`${config.API_BASE_URL}/add-item`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(newItemDetails),
        })
        .catch((error) => {
            alert(error);
        });
    }

    render() {
        return (
            <div className="warehouse-section">
                <div className="collapsible-header">
                    Add An Item
                </div>
                <div className="collapsible">
                    <div className="collapsible-item-content">
                        <div id="add-item-section">
                            <form onSubmit={this.handleSubmit} method="post" id="add-item-form">
                                <div id="add-item-container">
                                    <label htmlFor="uname"><b>Email</b></label>
                                    <input type="email" placeholder="Enter Email" name="email" required />

                                    <label htmlFor="psw"><b>Password</b></label>
                                    <input type="password" placeholder="Enter Password" name="psw" required />

                                    <label htmlFor="fname"><b>First Name</b></label>
                                    <input type="text" placeholder="Enter First Name" name="fname" required />

                                    <label htmlFor="lname"><b>Last Name</b></label>
                                    <input type="text" placeholder="Enter Last Name" name="lname" required />

                                    <label htmlFor="address"><b>Street Address</b></label>
                                    <input type="text" placeholder="Enter Street Address" name="address" required />

                                    <label htmlFor="city"><b>City</b></label>
                                    <input type="text" placeholder="Enter City" name="city" required />

                                    <label htmlFor="pcode"><b>Postcode</b></label>
                                    <input type="number" placeholder="Enter Postcode" name="pcode" required />

                                    <button type="submit" value="submit">Create Account</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

