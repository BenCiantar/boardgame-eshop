import { Link } from "react-router-dom";
import { Header, DesktopNav, LoginScreen, Footer, ItemList } from "../../components";
import React from 'react'


function CreateAccount(props) {
    return (
        <>
            <LoginScreen />
            <Header />
            <DesktopNav {...props}/>
            <main>
                <p>Test</p>
            </main>
            <Footer />
        </>
    )
}

export default CreateAccount;