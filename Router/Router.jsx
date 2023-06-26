import { createBrowserRouter } from "react-router-dom";
import App from "../src/App";
import AddCoffee from "../src/components/AddCoffee/AddCoffee";
import UpdateCoffee from "../src/components/UpdateCoffee/UpdateCoffee";

const router = createBrowserRouter([
    {
        path: '/',
        element: <App></App>,
        loader: () => fetch('http://localhost:5000/coffee')
    },
    {
        path: 'addCoffee',
        element: <AddCoffee></AddCoffee>
    },
    {
        path: 'updateCoffee/:id',
        element: <UpdateCoffee></UpdateCoffee>,
        loader: ({params}) => fetch(`http://localhost:5000/coffee/${params.id}`)
    }
])

export default router;