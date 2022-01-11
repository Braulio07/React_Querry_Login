import React from 'react'
import { Router, Routes } from 'react-router';
import { NavLink } from 'react-router-dom';



import styled from "styled-components";




export const Container = styled.div`
    width: 100%;
    height: 100px;
    padding: 50px;

`
export const Enlace = styled.span`
  text-decoration: none;
  font-size: 35px;
  font-family: 'Signika', sans-serif;
  color: #e50914;
`



export const NavBarOff = () => {

    return (
        <Container>
                <NavLink to="/login"><Enlace>BOA PELIS </Enlace></NavLink>
        </Container>
    )
}
