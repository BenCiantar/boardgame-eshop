import { Link } from "react-router-dom";
import { Header, DesktopNav, LoginScreen, Footer, ItemList } from "../../components";
import React from 'react'
import { userLogin } from "../../scripts/utils";


function Home(props) {

    const loginDetails = {
        "email": "J.A@thefriendzone.com",
        "password": "iheartpaleontologists"
    }
    
    // setTimeout(() => {
    //     if (!props.user.loggedIn) {
    //         userLogin(props.users, loginDetails, props.setUser);
    //     }
    // }, 3000);
 


    

    return (
        <>
            <LoginScreen />
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