import React, { useState } from "react";
import TopNavBar from "../../components/navBar/TopNavBar";
import { Container } from "react-bootstrap";
import TableFair from "../../components/TableFair/TableFair";
import { OUTWARD_TABLE_HEADER } from "../../utils/Constants";
import ButtonSpinner from "../../components/Loading/ButtonSpinner";
import { useSelector } from "react-redux";

const ReportOutward = () => {

     // ---- load Outward Table Data ----
     const outwardTableData = useSelector((state) => {
        console.log(state.posts);
        try {
            return state.posts.outwardTable;
        }
        catch {
            return 0;
        }
    });

    // ---- loading... ----
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
          
    <div>
            <TopNavBar />
            <Container fluid>
                {/* ---------- Outward Table Content ---------- */}
                <TableFair
                    outward={true}
                    applyDataTableApi={true} 
                    applyReportOptions={true}
                    title={"Outward Posts"}
                    tableHeaders={OUTWARD_TABLE_HEADER}
                    tableRows={outwardTableData}
                />
            </Container>
            </div>
        </>
    )
}


export default ReportOutward ;