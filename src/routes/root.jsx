
import ErrorPage from "../error-page";
import Deisgn from "../pages/Deisgn/index"
import Assist from "../pages/Assist/index"
import Order from "../pages/Order/index"
import Profile from "../pages/Profile/index"
import Generate from "../pages/Generate/index"
import Regenerate from "../pages/Regenerate/index"
import App from "../App"
const routers = [
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/deisgn",
                element: <Deisgn />,
            },
            {
                path: "/assist",
                element: <Assist />,
            },
            {
                path: "/order",
                element: <Order />,
            },
            {
                path: "/profile",
                element: <Profile />,
            },
        ],
    },
    {
        path: "/generate",
        element: <Generate />,
    },
    {
        path: "/regenerate",
        element: <Regenerate />,
    },
    
];
export default routers;
  