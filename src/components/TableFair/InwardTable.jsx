import React, { useState } from "react";
import { Button, Table } from "react-bootstrap";
import { Link, useNavigate } from 'react-router-dom';

// ---- imports for converting into PDF, Excel, CSV, & to print ----   
import $ from 'jquery';
import "datatables.net-dt/js/dataTables.dataTables";
import "datatables.net-dt/css/jquery.dataTables.min.css";
import 'datatables.net-buttons-dt';
import 'datatables.net-buttons/js/dataTables.buttons.min';
import 'datatables.net-buttons/js/buttons.flash.min';
import 'datatables.net-buttons/js/buttons.html5.min';
import 'datatables.net-buttons/js/buttons.print';
import 'datatables.net-dt';
import jsZip from 'jszip';
import pdfMake from 'pdfmake/build/pdfmake'
import pdfFonts from 'pdfmake/build/vfs_fonts'
import PopModal from "../Modals/PopModal";
import { DELETE } from "../../utils/Constants";
import { delete_from } from "../../actions/posts/postsAction";

import EmailModal from "../Modals/EmailModal";

pdfMake.vfs = pdfFonts.pdfMake.vfs;
window.pdfMake = pdfMake;
window.JSZip = jsZip;
// ---- import ends here ----


const InwardTable = (props) => {

    // ---- Option to Apply convert & download table data by Data-Table Api, set 'applyReportOptions' to 'true'----
    if (props.applyReportOptions) {
        $(document).ready(function () {
            $('#table').DataTable({
                destroy: true,
                paging: true,
                searching: true,
                dom: 'Blfrtip',
                buttons: [
                    { extend: 'copy', className: 'btn btn-outline-primary glyphicon glyphicon-duplicate' },
                    { extend: 'csv', className: 'btn btn-outline-primary glyphicon glyphicon-save-file' },
                    { extend: 'excel', className: 'btn btn-outline-primary glyphicon glyphicon-list-alt' },
                    { extend: 'pdf', className: 'btn btn-outline-primary glyphicon glyphicon-file' },
                    { extend: 'print', className: 'btn btn-outline-primary glyphicon glyphicon-print' }
                ],
            });
        });
    }

    // ---- Option to Apply Data-Table API for table, by setting 'applyDataTableApi' params to 'true' ----
    if (props.applyDataTableApi) {
        $(() => $('#table').DataTable());
    }

    let navigate = useNavigate();

    const handleView = (id) => {
        console.log(id);
        navigate(`view/${id}`);
    }

    const handleEdit = (id) => {
        console.log(id);
        navigate(`update/${id}`);
    }
    console.log(props.show)
    console.log('2')

    return (
        <div className="elevated-box">
            <h3 className="center">{props.title}</h3>

            <Table responsive id="table">
                <thead>
                    <tr className="center">
                        {props.tableHeaders.map((headerValue, index) => (
                            <td key={index} style={{ width: headerValue[1] }}>{headerValue[0]}</td>
                        ))}
                        {props.applyDataTableApi && !props.applyReportOptions && <td>Actions</td>}
                    </tr>
                </thead>

                <tbody>
                    {
                        props.tableRows?.map((rowValue, index) => (
                            <tr key={index} className="center" >

                                {/* ------------ Inward Table ------------ */}

                                {props.applyDataTableApi &&
                                    <>
                                        <td>{index+1}</td>
                                        <td>{rowValue.date}</td>
                                        <td>{rowValue.inwardNo}</td>
                                        <td>{rowValue.nature}</td>
                                        <td>{rowValue.recievedFrom}</td>
                                        <td>{rowValue.subject}</td>
                                        <td>{rowValue.deliverTo}</td>
                                        <td>{rowValue.remark}</td>
                                        {props.applyDataTableApi && !props.applyReportOptions &&
                                            <td>
                                                <Button variant="link" className="me-1 p-0" onClick={() => handleEdit(rowValue.inwardID)}>Edit</Button>
                                                <Button variant="link" className="me-1 p-0" onClick={() => handleView(rowValue.inwardID)} > view </Button>
                                                <PopModal
                                                    mode={DELETE}
                                                    execFunc={() => delete_from({ inward: true, rowID: rowValue.inwardID })}
                                                    modalBtnText={'Yes, Delete'}
                                                    modelTitle={"Delete"}
                                                    message={`Row will be permanently deleted, wish to proceed ? `}
                                                />

                                                <EmailModal color={rowValue.isEmailSent} id={rowValue.inwardID} show={props.show} onHide={props.onHide} recievedFrom={rowValue.recievedFrom} />
                                            </td>
                                        }
                                    </>
                                }
                            </tr>
                        ))
                    }
                </tbody>
            </Table>
        </div>
    )
}

export default InwardTable;