import { Header, DesktopNav, LoginForm, CreateAccountForm, Footer } from "../../components";
import React from 'react'
import { useState } from "react";
import { Link } from "react-router-dom";

function LoginCreate(props) {
    const [accountCreated, setAccountCreated] = useState(false);

    if (accountCreated === true){
        return (
            <>
                <Header />
                <DesktopNav {...props}/>
                <main>
                    <div id="login-create-wrapper">
                        Account created!
                        <Link to='/'>Return Home</Link>
                    </div>
                </main>
                <Footer />
            </>
        );
    } else if (props.user.loggedIn === true) {
        return (
            <>
                <Header />
                <DesktopNav {...props}/>
                <main>
                    <div id="login-create-wrapper">
                        You're already logged in!
                        <Link to='/'>Return Home</Link>
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
                        <LoginForm />
                        <CreateAccountForm {...props} setAccountCreated={setAccountCreated} />
                    </div>
                </main>
                <Footer />
            </>
        );
    }
}

export default LoginCreate;