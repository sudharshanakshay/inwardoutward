import React, { useState } from "react";
import TopNavBar from "../../components/navBar/TopNavBar";
import { Container } from "react-bootstrap";
import TableFair from "../../components/TableFair/TableFair";
import { INWARD_TABLE_HEADER } from "../../utility/Constants";
import { getDisplayData } from '../../actions/posts/postsAction';
import { Link } from "react-router-dom";
import ButtonSpinner from "../../components/Loading/ButtonSpinner";

const Inward = () => {

    const [ren, setRen] = useState(false);

    getDisplayData({ setRen });

    const tableDataString = sessionStorage.getItem('inwardTable');

    const INWARD_TABLE_DATA = JSON.parse(tableDataString);

    if (INWARD_TABLE_DATA == undefined) {
        return (
            <>
                <TopNavBar />
                <ButtonSpinner/>
            </>
        )
    }

    return (
        <>
            <TopNavBar />

            <div style={{ textAlign: "center" }}><Link to="/forms"><button type="button">Enter New Inward Data</button></Link></div>

            <div style={{ textAlign: "center", marginTop: "4%" }}>
                <Container className="data-table">
                    <TableFair
                        inward={true}
                        applyDataTableApi={true}
                        title={"Inward Posts"}
                        tableHeaders={INWARD_TABLE_HEADER}
                        tableRows={INWARD_TABLE_DATA}
                    />
                </Container>
            </div>
        </>
    )
}


export default Inward;