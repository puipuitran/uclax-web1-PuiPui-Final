import React, { useState } from 'react';

import LoginForm from './LoginForm.jsx'
import CatAndDog from './CatAndDog.jsx';

const Login = () => {

    return (
        <div>
            <h1>Login</h1>
            <LoginForm />
            <CatAndDog />   
        </div>
    )
}

export default Login;