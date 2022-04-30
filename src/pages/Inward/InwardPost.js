import React, { useState } from "react";
import TopNavBar from "../../components/navBar/TopNavBar";
import { Container } from "react-bootstrap";
import TableFair from "../../components/TableFair/TableFair";
import { TABLEHEADER_LONG, TEST_TABLEDATA_LONG } from "../../utility/Values";
import {display_from} from '../../actions/posts/postsAction';

const Inward = () => {

    const [fromPost, setFromPost] = useState({
        inward : 1,
        outward : 0
    });

    const {inward, outward} = fromPost;

    const table_data = display_from({inward, outward});
    return (
        <>
            <div >
                <TopNavBar />
            </div>
            <div >
                <Container className="data-table">
                    <TableFair id="table" title={"Inward Posts"} tableHeaders={TABLEHEADER_LONG} tableRows={table_data} applyDataTable={true} />
                </Container>
            </div>
        </>
    )
}


export default Inward;