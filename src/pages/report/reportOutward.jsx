import React, { useState } from "react";
import TopNavBar from "../../components/navBar/TopNavBar";
import { Container } from "react-bootstrap";
import TableFair from "../../components/TableFair/TableFair";
import { OUTWARD_TABLE_HEADER } from "../../utility/Constants";
import { getDisplayData } from '../../actions/posts/postsAction';
import ButtonSpinner from "../../components/Loading/ButtonSpinner";

const ReportOutward = () => {


    const [ren, setRen] = useState(false);

    getDisplayData({ setRen });

    const tableDataString = sessionStorage.getItem('outwardTable');

    const OUTWARD_TABLE_DATA = JSON.parse(tableDataString);

    if (OUTWARD_TABLE_DATA== undefined) {
        return (
            <>
                <TopNavBar />
                <ButtonSpinner/>
            </>
        )
    }
    return (
        <>
          
    <div>
            <TopNavBar />
            <Container fluid>
                <TableFair
                    outward={true}
                    applyDataTableApi={true} 
                    createReport={true}
                    title={"Outward Posts"}
                    tableHeaders={OUTWARD_TABLE_HEADER}
                    tableRows={OUTWARD_TABLE_DATA}
                />
            </Container>
            </div>
        </>
    )
}


export default ReportOutward ;