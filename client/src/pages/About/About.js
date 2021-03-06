import { Header, DesktopNav, Footer, Cart } from "../../components";
import React from 'react'


function About(props) {
    return (
        <>
            <Cart { ...props } />
            <Header />
            <DesktopNav { ...props } />
            <main>
                About page coming soon!
            </main>
            <Footer />
        </>
    )
}

export default About;