import { createBrowserRouter } from "react-router-dom";
import App from "../src/App";
import AddCoffee from "../src/components/AddCoffee/AddCoffee";
import UpdateCoffee from "../src/components/UpdateCoffee/UpdateCoffee";

const router = createBrowserRouter([
    {
        path: '/',
        element: <App></App>
    },
    {
        path: 'addCoffee',
        element: <AddCoffee></AddCoffee>
    },
    {
        path: 'updateCoffee',
        element: <UpdateCoffee></UpdateCoffee>
    }
])

export default router;