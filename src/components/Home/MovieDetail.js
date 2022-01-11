import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import styled from 'styled-components'
import { NavBar } from '../NavBar/NavBar'
import { CardView } from './CardView'


const Container = styled.div`
height: 100vh;
    display: grid;
    grid-template-columns: 3fr;
    background-color: gray;
    color: white;
    margin: 10px;
    padding: 10px;
    text-align: center;
    justify-content: center;
    align-items: center;
    margin: auto;
`


const H1 = styled.h1`
color: yellow;
font-size: 14px;
text-align: center;
margin: auto;
`







export const MovieDetail = ({ id, title, description, url, fullScreen = false }) => {

    const navegate = useNavigate()
    const { idMovie } = useParams();

    useEffect(() => {

        if (idMovie) {


        }
        // if (!fullScreen) {
        //     navegate('home')
        // }
    }, [])



    return (
        <div >

            {
                idMovie ?
                    <>
                        <NavBar />
                        <Container>
                            <CardView
                                key={id}
                                id={id}
                                title={title}
                                description={description}
                                url={url}
                                fullScreen={fullScreen} />
                            <H1>{title}</H1>
                        </Container>
                    </>
                    :
                    ""

            }



        </div>
    )
}
