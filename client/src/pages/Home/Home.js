import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Header, Item, ItemList } from "../../components";



function Home(props) {
    return (
        <>
            <Header />
            <main>
                <div>
                    <h3>Insert desktop nav bar here</h3>
                    <h3>Insert breadcrumbs here?</h3>
                    <h3>Insert search here</h3>
                    {/* <nav>
                        <Link to="about">About</Link>
                    </nav> */}
                    <ItemList { ...props }/>
                </div>
            </main>
        </>
    )
}

export default Home;