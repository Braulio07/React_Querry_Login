import React from 'react'

export const Login = () => {



    const handleSubmit = (e) => {
        console.log('submit');
        e.preventDefault();
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


