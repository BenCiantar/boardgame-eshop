import { Header, DesktopNav, AddItemForm, Orders, Footer } from "../../components";
import React from 'react'
import { useState } from "react";
import { Link } from "react-router-dom";

function Warehouse(props) {
    if (props.user.isLoggedIn === true && props.user.isStaff === true) {
        return (
            <>
                <Header />
                <DesktopNav {...props}/>
                <main>
                    <div id="warehouse-wrapper">
                        <Orders type="staffActive"/>
                        <Orders type="staffPast"/>
                        <AddItemForm />
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
                            <Link to='/'><button>Return Home</button></Link>
                        </div>
                    </div>
                </main>
                <Footer />
            </>
        );
    }
}

export default Warehouse;