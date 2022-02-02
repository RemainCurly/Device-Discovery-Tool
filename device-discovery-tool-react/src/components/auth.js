import React from 'react';
import logo from './logo.png';

function Auth()
{
    return (
        <div>
            <div class="login-image">
                <img src={logo} />
            </div>
            <div className='login-fields'>
                <label htmlFor='username'>Username:</label><br />
                <input id='username' type='text' /><br />
                <label htmlFor='password'>Password:</label><br />
                <input id='password' type='password' /><br />
                <button>Login</button>
            </div>
        </div>
    )
}

export default Auth;