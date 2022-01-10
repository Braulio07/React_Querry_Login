import { Home } from "../Home/Home";
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
        path: "/home",
        Component: <Home />,
        authRequired: true
    }

]
