import React, { useState } from "react";
import TopNavBar from "../../components/navBar/TopNavBar";
import { Container } from "react-bootstrap";
import TableFair from "../../components/TableFair/TableFair";
import { TABLEHEADER_LONG, TEST_TABLEDATA_LONG } from "../../utility/Values";
import {display_from} from '../../actions/posts/postsAction';
import { useSelector } from "react-redux";
import store from "../../store";
import { getPosts } from "../../actions/posts/postsSlice";


const Inward = () => {

    // const [fromPost, setFromPost] = useState({
    //     inward : 1,
    //     outward : 0
    // });

    // const {inward, outward} = fromPost;

    // display_from({inward, outward});
    // const rows = useSelector((state)=> state.inwardPosts.posts);
    // console.log(rows);

    // const rows = display_from({inward, outward});
    // console.log("rows "+rows)
    // console.log(rows)


    store.dispatch(getPosts());
    const tableData = useSelector((state)=>{
        return state.inwardPosts.posts;   
    });

    console.log("Inward 111");
    console.log(tableData);


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