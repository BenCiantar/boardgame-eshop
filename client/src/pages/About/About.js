import React from "react";
import { Link } from "react-router-dom";
import { Header } from "../../components";


function About() {
    return (
        <>
            <Header />
            <main>
                <div>
                    <h1>Router Test - About</h1>
                    <nav>
                        <Link to="/">Home</Link>
                    </nav>
                </div>
            </main>
        </>
    )
}

export default About;