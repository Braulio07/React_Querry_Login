import axios from 'axios'
import React, { useEffect, useMemo, useState } from 'react'
import { QueryCache, useQuery, useQueryClient } from 'react-query'
import { useParams } from 'react-router-dom'
import { getPostListMovies } from '../../Api/peticiones_server'
import { NavBar } from '../NavBar/NavBar'
import { CardView } from './CardView'
import { ContainerHome, ContentFooter, ContentLef_Home, ContentRigt_Home, H2Home } from './HomeStyled'


// get from redux
import { useSelector, useDispatch } from 'react-redux'
import { getMovies } from '../../store/Movies/moviesSlice';


export const Home =  () => {

    // get from redux
    const dispatch = useDispatch();
    const { arrayMovies: arrayMovies_Redux } = useSelector(state => state.moviesS);

    // get from server:  reactQuerry
    const { data: movies, error, isLoading, isSuccess, status } = useQuery(["ALlMovies"], getPostListMovies);
    const queryClient = useQueryClient()


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
        if (arrayMovies_Redux.length <= 0) {
            dispatch(getMovies(movies))
        }
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
                             arrayMovies_Redux.map(({ id, title, img, body: description }) => {

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



    // const moviesCache = queryClient.getQueryData('ALlMovies')