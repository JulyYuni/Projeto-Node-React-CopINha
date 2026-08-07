import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./RootLayout"
import Home from "./pages/Home";
import News from "./pages/News";
import Groups from "./pages/Groups";
import Simulator from "./pages/Simulator";
import Games from "./pages/Games";
import Login from "./pages/Login";
import Dashboard from "./pages/Admin/Dashboard";
import Admingroups from "./pages/Admin/AdminGroups";
import AdminNews from "./pages/Admin/AdminNews";
import AdminTeams from "./pages/Admin/AdminTeams";
import AdminGames from "./pages/Admin/AdminGames";
import AdminStadiums from "./pages/Admin/AdminStadiums";
import AdminLayout from "./pages/Admin/AdminLayout"


const router = createBrowserRouter([
    {
        element: <RootLayout/>,
        children: [
            {path:"/", element: <Home/>},
            {path:"/news/:id", element: <News/>},
            {path:"/groups", element: <Groups/>},
            {path:"/simulator", element: <Simulator/>},
            {path:"/games", element: <Games/>},            
        ]
    },
    {
        path:"/login", 
        element: <Login/>
    },
    {
        path: "admin",
        element: <AdminLayout/>,
        children: [
            {
                path: "dashboard",
                element: <Dashboard/>,
                handle:{
                    title: "Dashboard"
                }
            },
            {
                path: "news",
                element: <AdminNews/>,
                handle:{
                    title: "Notícias"
                }
            },
            {
                path:"groups",
                element: <Admingroups/>,
                handle:{
                    title: "Grupos"
                }
            },
            {
                path:"Teams",
                element: <AdminTeams/>,
                handle:{
                    title: "Times"
                }
            },
            {
                path:"Games",
                element: <AdminGames/>,
                handle:{
                    title: "Jogos"
                }
            },
            {
                path:"Stadiums",
                element: <AdminStadiums/>,
                handle:{
                    title: "Estádios"
                }
            }
        ]
    }




])

export default router;