import React, { useState } from "react";
import TopNavBar from "../../components/navBar/TopNavBar";
import { Container } from "react-bootstrap";
import TableFair from "../../components/TableFair/TableFair";
import { TABLEHEADER_LONG, OUTWARD_TABLE_HEADER } from "../../utility/Constants";
import { getDisplayData } from '../../actions/posts/postsAction';
import { Link } from "react-router-dom";
import ButtonSpinner from "../../components/Loading/ButtonSpinner";

const Outward = () => {

    const [ren, setRen] = useState(false);

    getDisplayData({ setRen });

    const OUTWARD_TABLE_TITLE = "Outward Table";

    let OUTWARD_TABLE_DATA = sessionStorage.getItem('outwardTable');
    OUTWARD_TABLE_DATA = JSON.parse(OUTWARD_TABLE_DATA);

    if (OUTWARD_TABLE_DATA == undefined) {
        return (
            <>
                <TopNavBar />
                <ButtonSpinner/>
            </>
        )
    }

    return (
        <>
            <div >
                <TopNavBar />
            </div>

            <div >
                <Container fluid>
                    <TableFair
                        outward={true}
                        applyDataTableApi={true}
                        title={OUTWARD_TABLE_TITLE}
                        tableHeaders={OUTWARD_TABLE_HEADER}
                        tableRows={OUTWARD_TABLE_DATA}
                    />
                </Container>
            </div>
        </>
    )
}


export default Outward;