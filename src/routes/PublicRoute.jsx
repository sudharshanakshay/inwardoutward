const { useSelector } = require("react-redux");
const { Navigate } = require("react-router-dom");

const PublicRoute = ({component: RouteComponent }) =>{

    const isLoggedIn = useSelector((state) => state.loggedIn.isLoggedIn);

    console.log("public Route : " +isLoggedIn);

    if(!isLoggedIn){ 
        return <RouteComponent />
    }
    return <Navigate to="/" />
}

export default PublicRoute;