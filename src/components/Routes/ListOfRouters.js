import { Home } from "../Home/Home";
import { MovieDetail } from "../Home/MovieDetail";
import { Login } from "../Login/Login";



export const ListOfRoutes =
[
    // PUBLIC
    {
        path: "/login",
        Component: <Login />,
        authRequired: false
    },


    // PRIVATE
    {
        path: "/*",
        Component: <Home />,
        authRequired: true
    },
    {
        path: "/home/:arrayMovie",
        Component: <Home />,
        authRequired: true
    },
    {
        path: "/movie-detail/:idMovie",
        Component: <MovieDetail />,
        authRequired: true
    }

]
