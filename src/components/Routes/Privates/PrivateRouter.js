import React, { useState } from 'react'
import { Home } from '../../Home/Home';
import { Login } from '../../Login/Login';

export const PrivateRouter = ({ children }) => {

    const [AuthUserToken, setAuthUserToken] = useState({
        name: '.',
        token: '.',
        logged: false
    });




    return (
        AuthUserToken.logged ?
            <>
                {/* user is loged */}
                {children}
            </>
            :
            <>
                {/* user is  not loged */}
                <Login />
            </>
    )
}
