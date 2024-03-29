import React from "react";
const { useSelector } = require("react-redux");
const { Navigate } = require("react-router-dom");

const PublicRoute = ({component: RouteComponent }) =>{

    const isLoggedIn = useSelector((state) => state.loggedIn.isLoggedIn);

    if(!isLoggedIn){ 
        return <RouteComponent />
    }
    return <Navigate to="/" />
}

export default PublicRoute;