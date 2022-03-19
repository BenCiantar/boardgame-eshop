import { Header, DesktopNav, Footer, ItemList } from "../../components";
import React from 'react'


function Home(props) {
    console.log(props.user);
    return (
        <>
            <Header />
            <DesktopNav {...props}/>
            <main>
                {/* <nav>
                    <Link to="about">About</Link>
                </nav> */}
                <ItemList { ...props }/>
            </main>
            <Footer />
        </>
    )
}

export default Home;