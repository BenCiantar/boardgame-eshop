import { Header, DesktopNav, Footer, Cart } from "../../components";
import React from 'react'


function Account(props) {
    return (
        <>
            <Cart { ...props } />
            <Header />
            <DesktopNav { ...props } />
            <main>
                Account page coming soon!
            </main>
            <Footer />
        </>
    )
}

export default Account;