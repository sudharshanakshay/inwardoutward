import React, { useState } from "react";
import TopNavBar from "../../components/navBar/TopNavBar";
import { Container } from "react-bootstrap";
import TableFair from "../../components/TableFair/TableFair";
import { INWARD_TABLE_HEADER } from "../../utility/Constants";
import { getDisplayData } from '../../actions/posts/postsAction';
import { Link } from "react-router-dom";
import ButtonSpinner from "../../components/Loading/ButtonSpinner";
import ActionMessage from "../../components/ActionMessages/ActionMessages";


const ReportInward = () => {
    return(
        <>
        <div>
        <ActionMessage/>
        </div>
        
        </>
    );


   /*const [ren, setRen] = useState(false);

    getDisplayData({ setRen });

    const tableDataString = sessionStorage.getItem('inwardTable');

    const INWARD_TABLE_DATA = JSON.parse(tableDataString);

    if (INWARD_TABLE_DATA == undefined) {
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
                    inward={true}
                    applyDataTableApi={true} 
                    createReport={true}
                    title={"Inward Posts"}
                    tableHeaders={INWARD_TABLE_HEADER}
                    tableRows={INWARD_TABLE_DATA}
                />
            </Container>
            </div>
        </>
    )*/
}


export default ReportInward;