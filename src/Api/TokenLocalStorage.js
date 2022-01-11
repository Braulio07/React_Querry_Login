import React, { useEffect, useState } from 'react'

export const TokenLocalStorage = () => {


    const [AuthUserToken, setAuthUserToken] = useState({
        name: '.',
        token: '.',
        logged: false
    });


    useEffect(() => {

        try {
            console.log('entrando a private route');

            if (localStorage.getItem('AuthUserToken')) {
                const tokenTemp = JSON.parse(localStorage.getItem('AuthUserToken'));

                setAuthUserToken({
                    name: '',
                    token: tokenTemp.token,
                    logged: tokenTemp.logged
                });
            } else {

                console.log('no existe');
                setAuthUserToken({
                    name: '',
                    token: '',
                    logged: false
                });

                console.log(AuthUserToken);
            }

        } catch (error) {
            console.log(error);
        }

    }, [])


    return (AuthUserToken)
}
