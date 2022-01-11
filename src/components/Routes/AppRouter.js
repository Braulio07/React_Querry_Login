import React from 'react'
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom'

import { ListOfRoutes } from './ListOfRouters'
import { PrivateRouter } from './Privates/PrivateRouter'
import { PublicRutes } from './Publics/PublicRutes'

export const AppRouter = () => {
    return (
        <Router>
            <Routes>
                {ListOfRoutes.map(({ path, Component, authRequired }) => (

                    authRequired ?
                        // Publics
                        <Route key={path} path={path} element={
                            <PrivateRouter>
                                {Component}
                            </PrivateRouter>
                        } />
                        :
                        // Private
                        <Route  key={path} path={path} element={
                            <PublicRutes>
                                {Component }
                            </PublicRutes>
                        }
                        />
                ))}
            </Routes>
        </Router>
    )
}
