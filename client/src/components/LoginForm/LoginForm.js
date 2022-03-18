function LoginForm() {
    return (
        <>
            <section id="login-section">
                <h3>Login</h3>
                <form action="" method="post" id="login-form">
                    <div id="login-container">
                        <label htmlFor="email"><b>Email</b></label>
                        <input type="email" placeholder="Enter Email" name="email" required />

                        <label htmlFor="psw"><b>Password</b></label>
                        <input type="password" placeholder="Enter Password" name="psw" required />

                        <button type="submit">Login</button>
                    </div>
                </form>
            </section>
            <p id="or-p">-or-</p>
        </>
    );
}

export default LoginForm;