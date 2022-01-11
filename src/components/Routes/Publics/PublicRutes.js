import React, { useEffect, useState } from 'react'
import { Home } from '../../Home/Home';

export const PublicRutes = ({children }) => {

    const [AuthUserToken, setAuthUserToken] = useState({
        name: '.',
        token: '.',
        logged: false
    });



    useEffect(() =>  {


        try {

            if (localStorage.getItem('AuthUserToken')) {
                const tokenTemp = JSON.parse(localStorage.getItem('AuthUserToken'));

                setAuthUserToken({
                    name: '',
                    token: tokenTemp.token,
                    logged: tokenTemp.logged
                });
            } else {

                setAuthUserToken({
                    name: '',
                    token: '',
                    logged: false
                });

            }
        } catch (error) {
            console.log(error);
        }
    }, [children])






    return (AuthUserToken.logged ?
        <>
            {/* user is loged */}
            <Home/>
            
        </>
        :
        <>
            {/* user is not loged */}
            {children}
        </>
    )
}
