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
                        <div className="return-home">
                            <h1>Login Successful!</h1>
                            <Link to='/'><button>Return Home</button></Link>
                        </div>
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
                        <div className="return-home">
                        <h1>Account created!</h1>
                        <Link to='/'><button>Return Home</button></Link>
                        </div>
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
                        <div className="return-home">
                            <h1>You're already logged in!</h1>
                            <Link to='/'><button>Return Home</button></Link>
                        </div>
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