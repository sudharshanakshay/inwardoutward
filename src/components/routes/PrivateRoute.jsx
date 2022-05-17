import { Navigate } from "react-router-dom";
import React from "react";
import { useSelector } from "react-redux";
import { getDisplayData, selectRow } from "../../actions/posts/postsAction";
import { getDepartment, getEmployeeData } from "../../actions/settings/settingsAction";

const PrivateRoute = ({ component: RouteComponent }) => {
    
    const isLoggedIn = useSelector((state) => state.loggedIn.isLoggedIn);
    const connErr = useSelector((state) => state.posts.connectionError);

    getDisplayData({});
    getDepartment({});
    getEmployeeData({});

    if(isLoggedIn) {
        if(connErr) return <p>connection err</p>
        return <RouteComponent />
    }
    return <Navigate to="/login"/>
}

export default PrivateRoute;