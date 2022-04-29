import { Navigate } from "react-router-dom";
import React from "react";
import { useSelector } from "react-redux";
import { useState } from "react";

const PrivateRoute = ({ component: RouteComponent }) => {
    
    const isLoggedIn = useSelector((state) => state.loggedIn.isLoggedIn);

    if(isLoggedIn) {
        return <RouteComponent />
    }
    return <Navigate to="/login"/>
}

export default PrivateRoute;