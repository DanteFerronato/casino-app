import React from 'react';

function Login() {
    return (
        <div className="main">
            <div className="container a-container" id="a-container">
            <form className="form" id="a-form" method="" action="">
                <h2 className="form_title title">Create Account</h2>
            
                <input className="form__input" type="text" placeholder="Name" />
                <input className="form__input" type="text" placeholder="Email" />
                <input className="form__input" type="password" placeholder="Password" />
                <input className="form__input" type="password" placeholder="Confirm Password" />
                <button id= "SignUpBtn" className="form__button button submit">Sign up</button>
            </form>
            </div>
            <div className="container b-container" id="b-container">
            <form className="form" id="b-form" method="" action="">
                <h2 className="form_title title">Enter Casino Royale</h2>
            
                <input className="form__input" type="text" placeholder="Email" />
                <input className="form__input" type="password" placeholder="Password" />
                <a className="form__link">¿Forgot your password?</a>
                <button id= "SignInBtn" className="form__button button submit">Sign In</button>
            </form>
            </div>
            <div className="switch" id="switch-cnt">
            <div className="switch__circle" />
            <div className="switch__circle switch__circle--t" />
            <div className="switch__container" id="switch-c1">
                <h2 className="switch__title title">We missed you!</h2>
                <p className="switch__description description">Enter your personal information to play again</p>
                <button className="switch__button button switch-btn">Sign In</button>
            </div>
            <div className="switch__container is-hidden" id="switch-c2">
                <h2 className="switch__title title">Welcome!</h2>
                <p className="switch__description description">Enter your personal data to start this journey with us</p>
                <button className="switch__button button switch-btn">Sign up</button>
            </div>
            </div>
            <script src="loginMenu.js"></script>
            <div id="holder"></div>
            <script src="waves.js"></script>
        </div>
    )
}

export default Login;