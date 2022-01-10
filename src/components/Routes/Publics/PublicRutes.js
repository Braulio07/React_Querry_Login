import React, { useState } from 'react'
import { Home } from '../../Home/Home';

export const PublicRutes = ({children}) => {

    const [AuthUserToken, setAuthUserToken] = useState({
        name: '.',
        token: '.',
        logged: false
    });




    return (AuthUserToken.logged ?
        <>
            {/* user is loged */}
            <Home />
        </>
        :
        <>
            {/* user is not loged */}
            {children}
        </>
    )
}
