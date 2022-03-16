import { Link } from "react-router-dom";
import { Header, DesktopNav, Footer, ItemList } from "../../components";


function Home(props) {
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