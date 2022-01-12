import React, { useEffect, useState } from 'react'
import { QueryCache, useQuery } from 'react-query'
import { useNavigate, useParams } from 'react-router-dom'
import styled from 'styled-components'
import { filterMovie, getMovieById, Get_All_Movies_From_Cache } from '../../Api/peticiones_server'
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
    const [MovieSelected2, setMovieSelected2] = useState({
        id: "",
        title: "",
        description: "",
        url: "",
    });


    // const { data: movieselected, error, isLoading, isSuccess, status } = useQuery(["movie"], getMovieById(parseInt(idMovie)));

    useEffect(() => {

        console.log(idMovie);
        getMovieById(parseInt(idMovie)).then(data => {
            setMovieSelected2({
                id: data[0].id,
                title: data[0].title,
                description: data[0].body,
                url: data[0].img,
            })
        })
    }, [idMovie])




    return (
        <div >
            {
                idMovie ?
                    <>
                        <NavBar />
                        <Container>
                            <CardView
                                key={MovieSelected2.id}
                                id={MovieSelected2.id}
                                title={MovieSelected2.title}
                                description={MovieSelected2.description}
                                url={MovieSelected2.url}
                                fullScreen={true} />
                            <H1>{title}</H1>
                        </Container>


                    </>
                    :
                    ""

            }



        </div>
    )
}
