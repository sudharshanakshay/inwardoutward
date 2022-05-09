import React, { useState } from "react";
import TopNavBar from "../../components/navBar/TopNavBar";
import { Container } from "react-bootstrap";
import TableFair from "../../components/TableFair/TableFair";
import {  OUTWARD_TABLE_HEADER } from "../../utility/Constants";
import { getDisplayData } from '../../actions/posts/postsAction';
import { Link } from "react-router-dom";
import ButtonSpinner from "../../components/Loading/ButtonSpinner";
import Footer from "../../components/Footer/Footer";
import { useSelector } from "react-redux";

const Outward = () => {

    // const [ren, setRen] = useState(false);

    // getDisplayData({ setRen });

    const OUTWARD_TABLE_TITLE = "Outward Table";

    let outwardTableData = sessionStorage.getItem('outwardTable');
    outwardTableData = JSON.parse(outwardTableData);


    // const outwardTableData = useSelector((state)=> {
    //     console.log(state.posts.outwardTable);
    //     try {
    //         return state.posts.inwardTable.payload.outward;
    //     }
    //     catch {
    //         setTimeout('outwardTableData', 2000);
    //         return 0;
    //     }
    // });

    

    if (!outwardTableData) {
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

            <div className="outward-page">
                <Container fluid>
                    <TableFair
                        outward={true}
                        applyDataTableApi={true}
                        title={OUTWARD_TABLE_TITLE}
                        tableHeaders={OUTWARD_TABLE_HEADER}
                        tableRows={outwardTableData}
                    />
                </Container>
            </div>
            <Footer/>
        </>
    )
}


export default Outward;