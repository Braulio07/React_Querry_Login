import React from 'react'
import { NavLink } from 'react-router-dom'


import styled from 'styled-components'
import { getMovieById } from '../../Api/peticiones_server'
import { MovieDetail } from './MovieDetail'

const Container = styled.div`
    display: grid;
    max-width:  ${props => props.fullScreen ? "730px" : "400px"} ; 
    max-height: ${props => props.fullScreen ? "430px" : "430px"} ; 

    min-width:  ${props => props.fullScreen ? "70%" : "400px"} ; 
    min-height: ${props => props.fullScreen ? "300px" : "430px"} ; 

    background-color: #494848c6; 
    border-radius: 10px;
    color: red;
    padding: 10px;
    text-align: center;

    margin: auto;

    grid-template-columns:  ${props => props.fullScreen ? '1fr 1fr 1fr' : '1fr'};
    grid-template-rows: 2fr 1fr 1fr;

  
    grid-template-areas:   ${props => props.fullScreen ?
    `"H1 H1 H1" 
     "IMAGE IMAGE P" 
     "IMAGE IMAGE P"`
        :   
        `"H1" "IMAGE" "IMAGE" "Button"`}      
    ;

    :hover{
    cursor: pointer; 
      }

      

/* responsive xs */
@media screen and (min-width: 1px) and (max-width: 767px) {
    padding: 3px;
    max-width:  ${props => props.fullScreen ? "430px" : "400px"} ; 
    max-height: ${props => props.fullScreen ? "430px" : "430px"} ; 

}
/* responsive sm  */
@media screen and (min-width: 768px) and (max-width: 991px) {
    padding: 3px;
}

/* responsive md  */
@media screen and (min-width: 992px) and (max-width: 1199px) {
    /* grid-template-columns: repeat(2, 1fr);
} */
}




`

const H1 = styled.h1`
color: white;
margin-bottom: ${props => props.fullScreen ? "10px" : "10px"} ; 
font-size: 20px;
justify-content: center;
text-align: center;
grid-area: H1;
`

const P = styled.p`
color: white;
margin-top: 10px;
font-size: 14px;
grid-area: P;
`

const Imagen = styled.img`
max-width: 340px;
max-height: 340px;

min-width: 340px;
min-height: 340px;
border-radius: 4px;
padding: 5px;
margin-right: 10px;
grid-area: IMAGE;

min-width:  ${props => props.fullScreen ? "700" : "340px"} ; 
min-height: ${props => props.fullScreen ? "700" : "340px"} ; 

/* responsive xs */
@media screen and (min-width: 1px) and (max-width: 767px) {
max-width: 300px;
max-height:300px;
}

/* responsive sm  */
@media screen and (min-width: 768px) and (max-width: 991px) {
max-width: 300px;
max-height:300px;
}

/* responsive md  */
@media screen and (min-width: 992px) and (max-width: 1199px) {
    /* grid-template-columns: repeat(2, 1fr);
} */
}
`


const Button = styled.button`
    padding: 5px 15px 5px 15px;
    background-color: #e50914;
    color: white;
    margin: 5px;
    grid-area: Button;
`



export const CardView = ({ id = "", title = "", url = "", description = "", fullScreen = false }) => {


    const handleViewMovie = (idMovie) => {
        getMovieById(idMovie).then(data => {
            let { id, img, title, body } = data[0];
            //    <MovieDetail 
            //         id={id}
            //         title={title}
            //         description={body}
            //         url={img}
            //         fullScreen={true}
            //         /> 

        })




    }
    return (
        <>
            {
                fullScreen ?
                    <Container fullScreen={true} >
                        <H1 fullScreen={true}>{title} </H1>
                        <P>{description}</P>
                        <Imagen fullScreen={true} src={url} />
                    </Container>
                    :
                    <Container>
                        <H1>{title} </H1>
                        <Imagen src={url} />

                        <NavLink
                            to={`/movie-detail/${id}`}>
                            SHOW
                        </NavLink>
                    </Container>
            }


        </>
    )
}



{/* <MovieDetail 
id={id}
title={title}
description={description}
url={url}
fullScreen={true}
/> */}