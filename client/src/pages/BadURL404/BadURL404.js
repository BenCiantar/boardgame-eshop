import React from "react";
import { Link } from "react-router-dom";
import { Header } from "../../components";


function BadURL404() {
    return (
        <>
        <Header />
            <body>
                <div>
                    <h1>Router Test - 404!</h1>
                    <nav>
                        <Link to="/">Home</Link>
                        <Link to="/about">About</Link>
                    </nav>
                </div>
            </body>
        </>
    )
}

export default BadURL404;