import { Header, DesktopNav, LoginForm, CreateAccountForm, Footer } from "../../components";
import React from 'react'
import { useState } from "react";
import { Link } from "react-router-dom";

function LoginCreate(props) {
    const [accountCreated, setAccountCreated] = useState(false);
    const [loginSuccessful, setLoginSuccessful] = useState(false);

    if (loginSuccessful === true) {
        return (
            <>
                <Header />
                <DesktopNav {...props}/>
                <main>
                    <div id="login-create-wrapper">
                        Login Successful!
                        <Link to='/'>Return Home</Link>
                    </div>
                </main>
                <Footer />
            </>
        );
    } else if (accountCreated === true){
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
                        <LoginForm {...props} setLoginSuccessful={setLoginSuccessful} />
                        <CreateAccountForm {...props} setAccountCreated={setAccountCreated} />
                    </div>
                </main>
                <Footer />
            </>
        );
    }
}

export default LoginCreate;