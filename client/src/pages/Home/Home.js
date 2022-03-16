import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Header, Footer, ItemList } from "../../components";


function Home(props) {
    return (
        <>
            <Header />
            <main>
                <h3>Insert desktop nav bar here</h3>
                <h3>Insert breadcrumbs here?</h3>
                <h3>Insert search here</h3>
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