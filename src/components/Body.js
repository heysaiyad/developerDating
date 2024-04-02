import { createBrowserRouter } from 'react-router-dom'
import { RouterProvider } from 'react-router-dom'
import Videos from './Videos';
import Main from './Main';


const Body = () => {

    const appRouter = createBrowserRouter([
        {
            path: "/",
            element: <Main />,
        },

        {
            path: "/videos",
            element: <Videos />,
        },

    ]);

    

    return (
        <div>
            <RouterProvider router={appRouter} />
        </div>
    )
}

export default Body