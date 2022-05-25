import React from "react";
import { Button, Table } from "react-bootstrap";
import {  useNavigate } from 'react-router-dom';

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



pdfMake.vfs = pdfFonts.pdfMake.vfs;
window.pdfMake = pdfMake;
window.JSZip = jsZip;
// ---- import ends here ----




const OutwardTable = ({ title, tableHeaders, tableRows, applyDataTableApi = false, applyReportOptions = false }) => {

  // ---- Option to Apply convert & download table data by Data-Table Api, set 'applyReportOptions' to 'true'----
  if (applyReportOptions) {
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
  if (applyDataTableApi) {
    $(document).ready(function () {
      $('#table').DataTable();
    });
  }

  let navigate = useNavigate();

  const handleView = (id) =>  navigate(`view/${id}`);

  const handleEdit = (id) => navigate(`update/${id}`);


  return (
    <div className="elevated-box">
      <h3 className="center">{title}</h3>


      <Table responsive id="table">
        <thead>
          <tr className="center">
            {tableHeaders.map((headerValue, index) => (
              <td key={index} style={{ width: headerValue[1] }}>{headerValue[0]}</td>
            ))}
            {applyDataTableApi && !applyReportOptions && <td>Actions</td>}
          </tr>
        </thead>
        <tbody>
          {
            tableRows?.map((rowValue, index) => (
              <tr key={rowValue.outwardID} className="center" >

                {/* ------------ Outward Table ------------ */}

                {applyDataTableApi &&
                  <>
                    <td>{index+1}</td>
                    <td>{rowValue.date}</td>
                    <td>{rowValue.serialNo}</td>
                    <td>{rowValue.department}</td>
                    <td>{rowValue.addressee}</td>
                    <td>{rowValue.nature}</td>
                    <td>{rowValue.description}</td>
                    <td>{rowValue.receiptNo}</td>
                    <td>{rowValue.remark}</td>

                    {/* --------- Action Buttons --------- */}
                    { applyDataTableApi && !applyReportOptions && 
                      <td>
                      <Button variant="link" className="me-1 p-0" onClick={() => handleEdit(rowValue.outwardID)}>Edit</Button>
                        <Button variant="link" className="me-1 p-0" onClick={() => handleView(rowValue.outwardID)} > view </Button>
                        <PopModal
                          mode={DELETE}
                          execFunc={() => delete_from({ outward: true, rowID: rowValue.outwardID })}
                          modalBtnText={'Yes, Delete'}
                          modelTitle={"Delete"}
                          message={`Outward Row will be permanently deleted, wish to proceed ? `}
                        />
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
  );
};

export default OutwardTable;

