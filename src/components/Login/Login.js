import React, { Fragment } from 'react'
import axios from "axios";

import { useMutation } from 'react-query';
import { domain_server, getUserToken } from '../../Api/peticiones_server';
import { DataUserTokenSaved } from './LoginMethods';
import { NavLink, useNavigate } from 'react-router-dom';
import { PrivateRouter } from '../Routes/Privates/PrivateRouter';
import { Home } from '../Home/Home';
import { FormSend } from './FormSend';
import { ContainerLogin, Container, H1Login, ButtonLogin,FooterLogin } from './LoginStyled';
import { NavBarOff } from '../NavBar/NavBarOff';
import { queryByDisplayValue } from '@testing-library/react';

import fondopage from '../../images/fondopage.jpeg';


export const Login = () => {

    const navigate = useNavigate();


    // Testing con mutation
    const mutationToken = useMutation(DataUserTokenSaved => {
        return axios.post(`${domain_server}/public/api/auth/login`, DataUserTokenSaved).then(({ data }) => {
            console.log(data);
        });

    })


    // GETTING TOKEN - SSL SISBOA
    const consultarToken_SISBOA_SSL = async (userData) => {

        let AuthUserToken = {};


        await getUserToken(userData).then(({ access_token, expires_in, token_type }) => {

            access_token ?
                <>
                    {AuthUserToken = {
                        time: expires_in,
                        token: access_token,
                        logged: true
                    }}
                    {console.log(AuthUserToken)}
                    {localStorage.setItem('AuthUserToken', JSON.stringify(AuthUserToken))}
                    {navigate('home')}
                </>
                :
                <>
                    {AuthUserToken = { token: '', time: 0, logged: false }}
                    {localStorage.setItem('AuthUserToken', JSON.stringify(AuthUserToken))}
                    {console.log('DATOS INCORRECTOS !')}
                </>



            // token_type ? console.log(token_type) : console.log('NO HUBO RESPUESTA')
        })

        //navigate('/home');

    }


    // Sin mutation
    const consultarToken = () => {
        let AuthUserToken = {};
        getUserToken({ "citizen_id": "PPt3CW33999444", "password": "123456" }).then(({ success, msg, payload }) => {
            success ?
                <>
                    {AuthUserToken = {
                        time: payload.expiration_time,
                        token: payload.token,
                        logged: success
                    }}
                    {console.log(AuthUserToken)}
                    {localStorage.removeItem('AuthUserToken')}
                    {localStorage.setItem('AuthUserToken', JSON.stringify(AuthUserToken))}

                </>
                :
                <>
                    {AuthUserToken = { logged: false }}
                    {localStorage.setItem('AuthUserToken', JSON.stringify(AuthUserToken))}
                    {console.log(msg)}
                </>

        })

    }



    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('HOLAAA');
        let userData = { "email": "b@gmai.com", "password": "123456" };
        consultarToken_SISBOA_SSL(userData);

    }



    return (

        <div style={{
            backgroundImage: "url(" + `"${fondopage}"` + ")",
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'
        }}>
            <NavBarOff />

            <Container>
                <ContainerLogin>

                    <H1Login color='#ffffff' size={30}>Login</H1Login>

                    <div className=''>



                        <form className='centerContent' onSubmit={handleSubmit}>
                            <div className="mb-3">
                                {/* <label htmlFor="exampleInputEmail1" className="form-label">USER ID</label> */}
                                <input type="number" placeholder='PIN' className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                {/* <div id="emailHelp" className="form-text">We'll never share your id with anyone else.</div> */}
                            </div>
                            <div className="mb-3">
                                {/* <label htmlFor="exampleInputPassword1" className="form-label">PASSWORD</label> */}
                                <input type="password" placeholder='PASSWORD' className="form-control" id="exampleInputPassword1" />
                            </div>

                            <ButtonLogin type="submit" color='#e50914'>ACCESS</ButtonLogin>

                        </form>

                    </div>
                </ContainerLogin>
            </Container>

            <FooterLogin>Footer</FooterLogin>
        </div>

    )
}


