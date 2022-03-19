import { Header, DesktopNav, Footer, ItemList } from "../../components";
import React from 'react'


function Home(props) {
    return (
        <>
            <Header />
            <DesktopNav {...props}/>
            <main>
                <ItemList { ...props }/>
            </main>
            <Footer />
        </>
    )
}

export default Home;