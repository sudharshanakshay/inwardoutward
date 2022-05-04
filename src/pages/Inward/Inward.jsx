import React, { useState } from "react";
import TopNavBar from "../../components/navBar/TopNavBar";
import { Container } from "react-bootstrap";
import TableFair from "../../components/TableFair/TableFair";
import { INWARD_TABLE_HEADER } from "../../utility/Constants";
import { getDisplayData } from '../../actions/posts/postsAction';
import { Link } from "react-router-dom";

const Inward = () => {

    const [ren, setRen] = useState(false);

    getDisplayData({setRen});

    const tableDataString = sessionStorage.getItem('inwardTable');

    const TABLE_DATA = JSON.parse(tableDataString);

    return (
        <>
            <div >
                <TopNavBar />
            </div>

            <div style={{ textAlign: "center" }}><Link to="/forms"><button type="button">Enter New Inward Data</button></Link></div>

            <div style={{ textAlign: "center", marginTop: "4%" }}>
                <Container className="data-table">
                    <TableFair
                        inward={true}
                        applyDataTableApi={true}
                        title={"Inward Posts"}
                        tableHeaders={INWARD_TABLE_HEADER}
                        tableRows={TABLE_DATA}
                         />
                </Container>
            </div>
        </>
    )
}


export default Inward;