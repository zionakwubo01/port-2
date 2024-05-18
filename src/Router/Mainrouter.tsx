
import { createBrowserRouter } from "react-router-dom"
import Layout from "../Layout/Layout"
import HomeScreen from "../Homescreen/HomeScreen"
const Mainrouter = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                index: true,
                element: <HomeScreen />
            }
        ]
    }
])

export default Mainrouter