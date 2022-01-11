import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom';
import { Enlace } from './NavBarOff';
import styled from 'styled-components';

export const ENLACE = styled.span`
font-size: 16px;
font-weight: bold;
`
export const SPAN = styled.span`

color: ${props => props.color};
margin-right: ${props=> props.margingR};
font-size: ${props=> props.size};
font-weight: bold;
`



export const NavBar = () => {

    const navegate = useNavigate();

    const handleLogOff = async () => {
        if (localStorage.getItem('AuthUserToken')) {
            let AuthUserToken = { logged: false };
            await localStorage.setItem('AuthUserToken', JSON.stringify(AuthUserToken))
            navegate('login')
        }
    }


    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <NavLink to="/home"> 
                <SPAN 
                color="#d63447"
                margingR="30px"
                size="25px"
                > 
                     BOA PELIS 
                </SPAN> 
                </NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Series Tv</a>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to = {`movie-detail/"PROBANDO ENVIO"`}>Films</NavLink>
                        </li>
                    </ul>


                    <form className="d-flex me-auto mb-6 mb-lg-0" onSubmit={(e) => e.preventDefault()}>
                        <input className="form-control me-2 mb-2 mb-lg-0" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>

                    <ul className='navbar-nav '>
                        <li className="nav-item dropdown">
                            <NavLink className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                <ENLACE>Admin</ENLACE>
                            </NavLink>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><NavLink className="dropdown-item" to="miPerfil">My Perfil</NavLink></li>
                                <li><NavLink className="dropdown-item" to="login" onClick={() => handleLogOff()}> <ENLACE>Log Off</ENLACE></NavLink></li>
                            </ul>
                        </li>
                    </ul>

                </div>
            </div>
        </nav>
    )
}
