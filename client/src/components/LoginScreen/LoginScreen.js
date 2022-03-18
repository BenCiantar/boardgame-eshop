import { Link } from "react-router-dom";

function LoginScreen() {

    return (
        <div id="login-screen">
            <section id="login-window">
                <form action="" method="post" id="login-form">
                    <div id="login-container">
                        <label htmlFor="uname"><b>Username</b></label>
                        <input type="text" placeholder="Enter Username" name="uname" required />

                        <label htmlFor="psw"><b>Password</b></label>
                        <input type="password" placeholder="Enter Password" name="psw" required />

                        <button type="submit">Login</button>
                    </div>
                </form>
                <p>-or-</p>
                <section id="create-section">
                    <Link to="/createaccount">
                        <button type="button">Create an account</button>
                    </Link>
                </section>
            </section>

        </div>
    );
}

export default LoginScreen;