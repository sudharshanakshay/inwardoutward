import React from "react";
import TopNavBar from "../../components/navBar/TopNavBar";
import { Container } from "react-bootstrap";
import TableFair from "../../components/TableFair/TableFair";
import { OUTWARD_TABLE_HEADER } from "../../utils/Constants";
import ButtonSpinner from "../../components/Loading/ButtonSpinner";
import { useSelector } from "react-redux";
import Footer from "../../components/Footer/Footer";

const ReportOutward = () => {

     // ---- load Outward Table Data ----
     const outwardTableData = useSelector((state) => {
        console.debug(state.posts);
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
            <Container fluid={'lg'} className={'mt-4'}>
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
            <Footer />
            </div>
        </>
    )
}


export default ReportOutward ;