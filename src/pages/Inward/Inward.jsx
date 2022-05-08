import React, { useState } from "react";
import TopNavBar from "../../components/navBar/TopNavBar";
import { Container } from "react-bootstrap";
import TableFair from "../../components/TableFair/TableFair";
import { INWARD_TABLE_HEADER } from "../../utility/Constants";
import { getDisplayData } from '../../actions/posts/postsAction';
import { Link } from "react-router-dom";
import ButtonSpinner from "../../components/Loading/ButtonSpinner";
import Footer from "../../components/Footer/Footer";
import { useSelector } from "react-redux";



const Inward = () => {

    // const [ren, setRen] = useState(false);

    // getDisplayData({ setRen });

    // const tableDataString = sessionStorage.getItem('inwardTable');

    // const INWARD_TABLE_DATA = JSON.parse(tableDataString);

    const inwardTableData = useSelector((state)=> {
        console.log(state.posts.inwardTable)
        try {
            return state.posts.inwardTable.payload.inward;
        }
        catch {
            return 0;
        }
    });

    // console.log(inwardTableData);

    if (!inwardTableData) {
        return (
            <>
                <TopNavBar />
                <ButtonSpinner />
            </>
        )
    }

    return (
        <>
            <TopNavBar />
            <div className="inward-page">
                <Container fluid>
                <TableFair
                    inward={true}
                    applyDataTableApi={true}
                    title={"Inward Posts"}
                    tableHeaders={INWARD_TABLE_HEADER}
                    tableRows={inwardTableData}
                />
                </Container>
            </div>
            <Footer/>
        </>
    )
}


export default Inward;