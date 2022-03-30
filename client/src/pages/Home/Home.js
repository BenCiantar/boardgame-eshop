import { Header, DesktopNav, Footer, ItemList, Cart } from "../../components";
import React from 'react';


function Home(props) {
    return (
        <>
            <Cart { ...props } />
            <Header />
            <DesktopNav { ...props } />
            <main>
                <ItemList { ...props } />
            </main>
            <Footer />
        </>
    )
}

export default Home;