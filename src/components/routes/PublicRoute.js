const { useSelector } = require("react-redux");
const { Navigate } = require("react-router-dom");

const PublicRoute = ({component: RouteComponent}) =>{
    const isLoggedIn = useSelector((state) => state.loggedInStatus.isLoggedIn);
    if(!isLoggedIn){ 
        return <RouteComponent/>
    }
    return <Navigate to="/dashboard" />
}

export default PublicRoute;