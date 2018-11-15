import React, { Component, Fragment } from 'react'

import {
    LoginForm,
    LoginFormLogo,
    LoginHeroContainer,
    LoginHeroBackground } from './style'

class Login extends Component {
    render() {
        return (
            <div className="flex">
                <LoginForm className="p-40">
                    <LoginFormLogo className="mt-48 mb-64"></LoginFormLogo>
                    <h3 className="mb-40">Sign In</h3>
                    <input className="mb-16 w-100" placeholder="Email" type="text"/>
                    <input className="mb-72 w-100" placeholder="Password" type="password"/>
                    <button className="btn btn-secondary w-100">Sign In</button>
                </LoginForm>
                <LoginHeroContainer>
                    <LoginHeroBackground></LoginHeroBackground>
                </LoginHeroContainer>
            </div>
        )
    }
}

export default Login;
