import { Header, DesktopNav, LoginForm, CreateAccountForm, Footer } from "../../components";
import React from 'react'
import { useState } from "react";
import { Link } from "react-router-dom";

function Warehouse(props) {
    if (props.user.LoggedIn === true && props.user.isStaff === true) {
        return (
            <>
                <Header />
                <DesktopNav {...props}/>
                <main>
                    <div id="warehouse-wrapper">
                        This is the warehouse.
                    </div>
                </main>
                <Footer />
            </>
        );
    } else {
        return (
            <>
                <Header />
                <DesktopNav {...props}/>
                <main>
                    <div id="login-create-wrapper">
                        <div className="return-home">
                            <h1>This area is for staff only. You must be logged into an @runic account to proceed.</h1>
                            <button><Link to='/'>Return Home</Link></button>
                        </div>
                    </div>
                </main>
                <Footer />
            </>
        );
    }
}

export default Warehouse;