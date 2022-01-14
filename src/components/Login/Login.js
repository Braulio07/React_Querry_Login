import React, { Fragment } from 'react'

import { getUserToken } from '../../Api/peticiones_server';
import { useNavigate } from 'react-router-dom';

import { ContainerLogin, Container, H1Login, ButtonLogin, FooterLogin } from './LoginStyled';
import { NavBarOff } from '../NavBar/NavBarOff';

import { fondoPantalla } from '../../utilities/serverConfig'
import { Form, Formik } from 'formik'
import * as Yup from 'yup'
import { FormikInputsControl } from '../../utilities/FormikInputsControl';
import { error_MSG, question_MSG, success_MSG, TestDialog } from '../../utilities/sweetAalerts/dialogs';





export const Login = () => {

    const navigate = useNavigate();

    // GETTING USER-TOKEN:  FROM API
    const consultarToken_SISBOA_SSL = async (userData) => {
        // EXAMPLE:  { "email": "ovalles@gmail.com", "password": "123456" }
        let AuthUserToken = {};

        await getUserToken(userData).then(({ access_token, expires_in, token_type }) => {

            access_token ?
                <>
                    {AuthUserToken = {
                        time: expires_in,
                        token: access_token,
                        logged: true
                    }}
                    {localStorage.setItem('AuthUserToken', JSON.stringify(AuthUserToken))}
                    {navigate('/home')}
                </>
                :
                <>
                    {AuthUserToken = { token: '', time: 0, logged: false }}
                    {localStorage.setItem('AuthUserToken', JSON.stringify(AuthUserToken))}
                    {error_MSG('Correo o contraseña incorrecto!')}
                </>
            // token_type ? console.log(token_type) : console.log('NO HUBO RESPUESTA')
        })
    }


    // Yup validate form:
    const validateYupForm = Yup.object({
        // userPin: Yup.string('Debe contener solo numeros')
        //     .min(11, 'Debe tener un minimo de 11 caracteres.')
        //     .max(11, 'Excede el numero maximo de catacteres.')
        //     .required('Este campo es requerido'),

        email:
            Yup.string()
                .email('Debe ser un correo valido')
                .required('Este campo es requerido'),
        password:
            Yup.string()
                .min(4, 'Debe tener al menos 4 caracteres')
                .required('Este campo es requerido'),

    })


    return (
        <div>
            <Formik
                initialValues={{
                    email: '',
                    password: '',
                }}
                validationSchema={validateYupForm}

                //** FINALIZAR Y ENVIAR
                onSubmit={async (userData) => {
                    consultarToken_SISBOA_SSL(userData);
                }}
            >

                {formik => (
                    <div>
                        <Form>
                            <div style={fondoPantalla}>

                                <NavBarOff />
                                <Container>
                                    <ContainerLogin>

                                        <H1Login color='#ffffff' size={30}>Login</H1Login>

                                        <div>
                                            <FormikInputsControl control='input' label='E-mail' name='email' />
                                            <FormikInputsControl control='input' type="password" label='Password' name='password' />
                                            <ButtonLogin type="submit" color='#e50914'>ACCESS</ButtonLogin>
                                        </div>

                                    </ContainerLogin>
                                </Container>

                                <FooterLogin>Footer</FooterLogin>
                            </div>

                        </Form>
                    </div>
                )}
            </Formik>

        </div>
    )
}


