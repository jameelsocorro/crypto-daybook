import React, { Component, Fragment } from 'react'

import { FormControl } from '../../components'

import {
    LoginForm,
    LoginFormLogo,
    LoginHeroContainer,
    LoginHeroBackground } from './style'

class Login extends Component {
    render() {
        return (
            <div className="flex">
                <LoginForm className="p-80">

                    <LoginFormLogo><span className="warning-text">crypto</span> <span className="secondary-text">daybook</span></LoginFormLogo>

                    <div>
                        <h4 className="mb-8">Welcome trader!</h4>
                        <h6 className="grey-text">win or lose, always record your trades</h6>
                    </div>

                    <div className="">
                        <FormControl
                            label="Email Address"
                            className="mb-16 w-100"
                            placeholder="Enter your email"
                            type="text"/>
                        <FormControl
                            label="Password"
                            className="mb-16 w-100"
                            placeholder="Enter your password"
                            type="password"/>

                        <a href="#" className="btn-link">Forgot Password</a>
                    </div>


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
