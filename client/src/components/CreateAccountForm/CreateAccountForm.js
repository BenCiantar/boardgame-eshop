import React from "react";

export default class CreateAccountForm extends React.Component {

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(e.target.email.value);
        console.log(e.target.fname.value);
        console.log(e.target.lname.value);
    }

    render() {
        return (
            <>
                <section id="create-account-section">
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
                </section>
            </>
        );
    }
}
