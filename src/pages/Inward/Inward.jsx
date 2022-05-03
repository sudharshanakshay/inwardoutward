import React from "react";
import TopNavBar from "../../components/navBar/TopNavBar";
import { Container } from "react-bootstrap";
import TableFair from "../../components/TableFair/TableFair";
import { TABLEHEADER_LONG, TEST_TABLEDATA_LONG } from "../../utility/Values";
import {getDisplayData} from '../../actions/posts/postsAction';
import { Link } from "react-router-dom";

const Inward = () => {

    getDisplayData({inward:true, outward:true});

    const tableDataString = sessionStorage.getItem('inwardTable');
    
    const TABLE_DATA =  JSON.parse(tableDataString);

    return (
        <>
            <div >
                <TopNavBar />
            </div>

            <div style={{textAlign:"center"}}><Link to="/forms"><button type="button">Enter New Inward Data</button></Link></div>
            
            <div style={{textAlign:"center", marginTop:"4%"}}>
                <Container className="data-table">
                    <TableFair id="table" title={"Inward Posts"} tableHeaders={TABLEHEADER_LONG} tableRows={TABLE_DATA} applyDataTableApi={true} />
                </Container>
            </div>
        </>
    )
}


export default Inward;