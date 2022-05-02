import React, { useState } from "react";
import TopNavBar from "../../components/navBar/TopNavBar";
import { Container } from "react-bootstrap";
import TableFair from "../../components/TableFair/TableFair";
import { TABLEHEADER_LONG, TEST_TABLEDATA_LONG } from "../../utility/Values";
import {getDisplayData} from '../../actions/posts/postsAction';
import { useSelector } from "react-redux";
import store from "../../store";
import { getPosts } from "../../actions/posts/postsSlice";

const Inward = () => {

    getDisplayData()
    const tableDataString = sessionStorage.getItem('inwardTable');
    console.log("session");
    

    const tableData =  JSON.parse(tableDataString);
    console.log(tableData);
    // const tableData = JSON.parse(tableDataString);

    // console.log("Inward 111");
    // console.log(tableData);


    return (
        <>
            <div >
                <TopNavBar />
            </div>
            <div >
                <Container className="data-table">
                    <TableFair id="table" title={"Inward Posts"} tableHeaders={TABLEHEADER_LONG} tableRows={tableData} applyDataTableApi={true} />
                </Container>
            </div>
        </>
    )
}


export default Inward;