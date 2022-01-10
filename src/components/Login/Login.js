import React from 'react'
import axios from "axios";

import { useMutation } from 'react-query';
import { domain_server, getUserToken } from '../../Api/peticiones_server';
import { DataUserTokenSaved } from './LoginMethods';

export const Login = () => {




    // Testing con mutation
    const mutationToken = useMutation(DataUserTokenSaved => {
        return axios.post(`${domain_server}/api/auth/login`, DataUserTokenSaved).then(({ data }) => {
            console.log(data);
        });

    })




    // Sin mutation
    const consultarToken = () => {
        getUserToken({ "citizen_id": "PPt3CW33999444", "password": "123456" }).then(({ success, msg, payload }) => {

            success ?
                <>
                    { console.log('ALMACENAR EL TOKEN')}
                </>
                :
                console.log(msg);
        });

    }



    const handleSubmit = (e) => {
        console.log('submit');
        e.preventDefault();

        consultarToken();
    }



    return (
        <div className='container loginDiv'>
            <h3 className='centerContent'>Login</h3>


            <form className='centerContent' onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">USER ID</label>
                    <input type="number" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    <div id="emailHelp" className="form-text">We'll never share your id with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">PASSWORD</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" />
                </div>

                <button type="submit" className="btn btn-primary">ACCESS</button>
            </form>

        </div>
    )
}


