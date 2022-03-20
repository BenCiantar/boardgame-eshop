import React from "react";
import * as config from "../../config";

export default class AddItemForm extends React.Component {
    constructor(props) {
        super(props);
    }

    // handleSubmit = (e) => {
    //     e.preventDefault();

    //     const isStaff = e.target.email.value.includes('@runic.se');

    //     const newUserDetails = {
    //         "firstName": e.target.fname.value,
    //         "lastName": e.target.lname.value,
    //         "email": e.target.email.value,
    //         "password": e.target.psw.value,
    //         "address": e.target.address.value,
    //         "city": e.target.city.value,
    //         "postcode": e.target.pcode.value,
    //         "isStaff": isStaff,
    //         "cart": [] //Change to inherit guest cart if enough time
    //     }

    //     fetch(`${config.API_BASE_URL}/create-user`, {
    //     method: 'POST',
    //     headers: {
    //         'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify(newUserDetails),
    //     })
    //     .then((response) => {
    //         if (!response.ok){
    //             throw new Error(response.statusText);
    //         } else {
    //             return response;
    //         }
    //     })
    //     .then(response => response.json())
    //     .then(data => {
    //     data.isLoggedIn = true;
    //     this.props.setUser({
    //         "firstName": data.firstName,
    //         "lastName": data.lastName,
    //         "email": data.email,
    //         "address": data.address,
    //         "city": data.city,
    //         "postcode": data.postcode,
    //         "isStaff": isStaff,
    //         "cart": data.cart, //Change to inherit guest cart if enough time
    //         "isLoggedIn": true 
    //     });
    //     console.log('Success:', this.props.user);
    //     this.props.setAccountCreated(true);
    //     })
    //     .catch((error) => {
    //         alert(error);
    //     });
    // }

    render() {
        return (
            <div className="warehouse-section">
                <div className="collapsible-header">
                    Add An Item
                </div>
                <div className="collapsible">
                    <div className="collapsible-content">
                        Content 1 goes here
                    </div>
                </div>
            </div>
        );
    }
}

{/* <section id="create-account-section">
                    <h3>Create an Account</h3>
                    <form onSubmit={this.handleSubmit} method="post" id="create-account-form">
                        <div id="create-account-container">
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
                </section> */}

