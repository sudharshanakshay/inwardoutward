import React from "react";
import TopNavBar from "../../components/navBar/TopNavBar";
import { Container} from "react-bootstrap";
import TableFair from "../../components/TableFair/TableFair";
import { INWARD_TABLE_HEADER } from "../../utils/Constants";
import ButtonSpinner from "../../components/Loading/ButtonSpinner";
import { useSelector } from "react-redux";
import Footer from "../../components/Footer/Footer";


const ReportInward = () => {

    // ---- load Inward Table Data ----
    const inwardTableData = useSelector((state) => {
        console.debug(state.posts.inwardTable)
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
            <div >
            <Container fluid={'lg'} className={'mt-4'} >
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
            </div>
            
            <Footer />
        </div></>
    )
}


export default ReportInward;