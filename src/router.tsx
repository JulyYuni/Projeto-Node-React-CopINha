import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./RootLayout";
import Home from "./pages/Home";
import News from "./pages/News";
import Groups from "./pages/Groups";
import Simulator from "./pages/Simulator";
import Games from "./pages/Games";
import Login from "./pages/Login";


const router = createBrowserRouter([
    {
        element: <RootLayout/>,
        children: [
            {path:"/", element: <Home/>},
            {path:"/news/:id", element: <News/>},
            {path:"/groups", element: <Groups/>},
            {path:"/simulator", element: <Simulator/>},
            {path:"/games", element: <Games/>},            
            {path:"/login", element: <Login/>}
        ]
    }



])

export default router;