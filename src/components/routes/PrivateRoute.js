import { Route, Navigate, Router } from "react-router-dom";
import React from "react";
import { useSelector } from "react-redux";

const PrivateRoute = ({ component: RouteComponent }) => {
    const isLoggedIn = useSelector((state) => state.loggedInStatus.isLoggedIn);

    if(isLoggedIn) {
        return <RouteComponent/>
    }

    return <Navigate to="/"/>
}

export default PrivateRoute;