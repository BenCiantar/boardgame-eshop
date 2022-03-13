import React from "react";
import { Link } from "react-router-dom";
import { Header } from "../../components";


function Home() {
    return (
        <>
            <Header />
            <body>
                <div>
                    <h1>Router Test - Home</h1>
                    <nav>
                        <Link to="about">About</Link>
                    </nav>
                </div>
            </body>
        </>
    )
}

export default Home;