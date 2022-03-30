import { Header, DesktopNav, Footer, Cart } from "../../components";
import React from 'react'


function BadURL404(props) {
    return (
        <>
            <Cart { ...props } />
            <Header />
            <DesktopNav { ...props } />
            <main>
                Oops! This page doesn't seem to exist!
            </main>
            <Footer />
        </>
    )
}

export default BadURL404;