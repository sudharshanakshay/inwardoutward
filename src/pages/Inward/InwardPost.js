import React, { useState } from "react";
import TopNavBar from "../../components/navBar/TopNavBar";
import { Container } from "react-bootstrap";
import TableFair from "../../components/TableFair/TableFair";
import { TABLEHEADER_LONG, TEST_TABLEDATA_LONG } from "../../utility/Values";
import {display_from} from '../../actions/posts/postsAction';
import { useSelector } from "react-redux";


const Inward = () => {

    const [fromPost, setFromPost] = useState({
        inward : 1,
        outward : 0
    });

    const {inward, outward} = fromPost;

    display_from({inward, outward});
    const rows = useSelector((state)=> state.inwardPosts.posts);
    console.log(rows);

    // const rows = display_from({inward, outward});
    // console.log("rows "+rows)
    // console.log(rows)
    return (
        <>
            <div >
                <TopNavBar />
            </div>
            <div >
                <Container className="data-table">
                    <TableFair id="table" title={"Inward Posts"} tableHeaders={TABLEHEADER_LONG} tableRows={rows} applyDataTable={true} />
                </Container>
            </div>
        </>
    )
}


export default Inward;