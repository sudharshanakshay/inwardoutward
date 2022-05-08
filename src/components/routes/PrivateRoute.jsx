import { Navigate } from "react-router-dom";
import React from "react";
import { useSelector } from "react-redux";
import { useState } from "react";
import { getDisplayData } from "../../actions/posts/postsAction";
import TopNavBar from "../navBar/TopNavBar";
import ButtonSpinner from "../Loading/ButtonSpinner";

const PrivateRoute = ({ component: RouteComponent }) => {
    
    const isLoggedIn = useSelector((state) => state.loggedIn.isLoggedIn);
    const connErr = useSelector((state) => state.posts.connectionError);

    if(isLoggedIn) {
        getDisplayData({});        
        if(connErr) return <p>connection err</p>
        
        return <RouteComponent />
    }
    return <Navigate to="/login"/>
}

export default PrivateRoute;