import React from "react";
import * as config from "../../config";

export default class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            errorStatus: ""
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();

        const loginDetails = {
            "email": e.target.email.value,
            "password": e.target.psw.value
        }

        fetch(`${config.API_BASE_URL}/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(loginDetails),
        })
        .then((response) => {
            if (!response.ok){
                throw new Error(response.statusText);
            } else {
                return response;
            }
        })
        .then(response => response.json())
        .then(data => {
        data.isLoggedIn = true;
        this.props.setUser({
            "firstName": data.firstName,
            "lastName": data.lastName,
            "email": data.email,
            "address": data.address,
            "city": data.city,
            "postcode": data.postcode,
            "isStaff": data.isStaff,
            "cart": data.cart, //Change to inherit guest cart if enough time
            "isLoggedIn": true 
        });
        console.log('Login Successful:', this.props.user);
        this.props.setLoginSuccessful(true);
        })
        .catch((error) => {
            this.setState ({
                errorStatus: error.message
            });
        });
    }

    render(){
        return (
            <>
                <section id="login-section">
                    <h3>Login</h3>
                    <form onSubmit={this.handleSubmit} method="post" id="login-form">
                        <div id="login-container">
                            <label htmlFor="email"><b>Email</b></label>
                            <input type="email" placeholder="Enter Email" name="email" required />

                            <label htmlFor="psw"><b>Password</b></label>
                            <input type="password" placeholder="Enter Password" name="psw" required />

                            <p id="error-alert">{this.state.errorStatus}</p>
                            <button type="submit" value="submit">Login</button>
                        </div>
                    </form>
                </section>
                <p id="or-p">-or-</p>
            </>
        );
    }   
}
