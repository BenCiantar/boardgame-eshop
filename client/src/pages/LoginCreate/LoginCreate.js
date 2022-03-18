import { Link } from "react-router-dom";
import { Header, DesktopNav, LoginForm, CreateAccountForm, Footer } from "../../components";
import React from 'react'


function LoginCreate(props) {
    return (
        <>
            <Header />
            <DesktopNav {...props}/>
            <main>
                <div id="login-create-wrapper">
                    <LoginForm />
                    <CreateAccountForm />
                </div>
            </main>
            <Footer />
        </>
    )
}

export default LoginCreate;