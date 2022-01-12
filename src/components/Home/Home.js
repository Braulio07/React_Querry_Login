import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { QueryCache, useQuery, useQueryClient } from 'react-query'
import { useParams } from 'react-router-dom'
import { getPostListMovies } from '../../Api/peticiones_server'
import { NavBar } from '../NavBar/NavBar'
import { CardView } from './CardView'
import { ContainerHome, ContentFooter, ContentLef_Home, ContentRigt_Home, H2Home } from './HomeStyled'

export const Home = () => {

    const { data: movies, error, isLoading, isSuccess, status } = useQuery(["ALlMovies"], getPostListMovies);
    const queryClient = useQueryClient()
    const moviesCache = queryClient.getQueryData('ALlMovies')

    const useparams = useParams();

    useEffect(() => {
        if (useparams.arrayMovie) {
           console.log(useparams.arrayMovie);
           
          // movies = useparams.arrayMovie;
        }
    }, [useparams.arrayMovie])



    if (isLoading) {
        return (
            <div style={{ marginTop: '50px' }}>
                <span className="spinner-border"></span> Loading Movies ...
            </div>
        );
    }


    if (error) {
        return (
            <section className="alert alert-danger">
                Error fetching movies: {status.error.message}
            </section>
        );
    }



    if (isSuccess) {
        // const query33 = QueryCache.find('ALlMovies')
    }



    return (


        <div>


            <NavBar />
            <ContainerHome >

                <H2Home color='white' size="28px" className='centerContent'>Listado de Peliculas</H2Home>


                {/* Contenido */}
                <ContentLef_Home>
                    {isSuccess && movies ?
                        <>
                            {
                                moviesCache.map(({ id, title, img, body: description }) => {

                                    return <CardView
                                        key={id}
                                        id={id}
                                        title={title}
                                        url={img}
                                        description={description} />
                                })
                            }
                        </>
                        :
                        ""
                    }
                </ContentLef_Home>


                {/* Rigt Sidebar */}
                <ContentRigt_Home>
                    <H2Home color='white' size="22px" className='centerContent'>Recomendadas</H2Home>
                </ContentRigt_Home>

            </ContainerHome>


            {/* Footer */}
            <ContentFooter>
                <H2Home color='white' size="22px" className='centerContent'>Footer Information </H2Home>
            </ContentFooter>
        </div>
    )
}
