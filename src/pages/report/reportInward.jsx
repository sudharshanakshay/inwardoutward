import React, { useState } from "react";
import TopNavBar from "../../components/navBar/TopNavBar";
import { Container } from "react-bootstrap";
import TableFair from "../../components/TableFair/TableFair";
import { INWARD_TABLE_HEADER } from "../../utility/Constants";
import ButtonSpinner from "../../components/Loading/ButtonSpinner";
import { useSelector } from "react-redux";


const ReportInward = () => {

    // ---- load Inward Table Data ----
    const inwardTableData = useSelector((state) => {
        console.log(state.posts.inwardTable)
        try {
            return state.posts.inwardTable;
        }
        catch {
            return 0;
        }
    });

    // ---- loading... ----
    if (!inwardTableData) {
        return (
            <>
                <TopNavBar />
                <ButtonSpinner/>
            </>
        )
    }

    return (
        <><div>
            <TopNavBar />
            <Container fluid>
                {/* ---------- Inward Table Content ---------- */}
                <TableFair
                    inward={true}
                    applyDataTableApi={true} 
                    applyReportOptions={true}
                    title={"Inward Posts"}
                    tableHeaders={INWARD_TABLE_HEADER}
                    tableRows={inwardTableData}
                />
            </Container>
        </div></>
    )
}


export default ReportInward;