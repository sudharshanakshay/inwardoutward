import React from "react";
import TopNavBar from "../../components/navBar/TopNavBar";
import { Container } from "react-bootstrap";
import TableFair from "../../components/TableFair/TableFair";
import { TABLEHEADER_LONG, TEST_TABLEDATA_LONG } from "../../utility/Values";
import {getDisplayData} from '../../actions/posts/postsAction';

const Inward = () => {

    getDisplayData()

    const tableDataString = sessionStorage.getItem('inwardTable');
    
    const TABLE_DATA =  JSON.parse(tableDataString);

    return (
        <>
            <div >
                <TopNavBar />
            </div>
            <div >
                <Container className="data-table">
                    <TableFair id="table" title={"Inward Posts"} tableHeaders={TABLEHEADER_LONG} tableRows={TABLE_DATA} applyDataTableApi={true} />
                </Container>
            </div>
        </>
    )
}


export default Inward;