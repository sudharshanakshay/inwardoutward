import React from "react";
import TopNavBar from "../../components/navBar/TopNavBar";
import DisplayTable from "../../components/uiComponents/displayTable";
import { Container } from "react-bootstrap";

const Inward = () => {
    return (
        <>
            <div >
                <TopNavBar />
                <br />
                <br />
                
            </div>
            <div >
                <DisplayTable />
            </div>
        </>
    )
}

export default Inward;