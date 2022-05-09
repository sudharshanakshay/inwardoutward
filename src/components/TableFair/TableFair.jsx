import React, { useState } from "react";
import { Button, Table } from "react-bootstrap";
import { Link } from 'react-router-dom';
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
import PopModal from "../AlertModel/PopModal";
import ViewRecord from "../View/View";
import { delete_from } from "../../actions/posts/postsAction";
pdfMake.vfs = pdfFonts.pdfMake.vfs;
window.pdfMake = pdfMake;
window.JSZip = jsZip;

const TableFair = ({ title, tableHeaders, tableRows, inward = false, outward = false, applyDataTableApi = false, createReport = false }) => {

  // creating print option for report.....
  if (createReport) {

    $(document).ready(function () {

      $('#table').DataTable({
        destroy: true,
        paging: false,
        searching: false,
        dom: 'Blfrtip',
        buttons: [
          { extend: 'copy', className: 'btn btn-success glyphicon glyphicon-duplicate' },
          { extend: 'csv', className: 'btn btn-success glyphicon glyphicon-save-file' },
          { extend: 'excel', className: 'btn btn-success glyphicon glyphicon-list-alt' },
          { extend: 'pdf', className: 'btn btn-success glyphicon glyphicon-file' },
          { extend: 'print', className: 'btn btn-success glyphicon glyphicon-print' }
        ],
      });
    });
  }

  if (applyDataTableApi) {
    $(document).ready(function () {
      $('#table').DataTable();
    });
  }

  const handleInwardDelete = (id) => {
    delete_from({ inward: inward, rowID: id });
  }

  const handleOutwardDelete = (id) => {
    delete_from({ outward: outward, rowID: id });
  }


  return (
    <div className="elevated-box">
      <h3 className="center">{title}</h3>


      <Table responsive id="table">
        <thead>
          <tr className="center">
            {tableHeaders.map((headerValue, index) => (
              <td key={index} style={{ width: headerValue[1] }}>{headerValue[0]}</td>
            ))}
            {applyDataTableApi && <td>Actions</td>}
          </tr>
        </thead>
        <tbody>
          {
            tableRows?.map((rowValue, index) => (
              <tr key={index} className="center" >

                {/* ------------ Inward Table ------------ */}

                {applyDataTableApi && inward &&
                  <>
                    <td>{rowValue.inwardID}</td>
                    <td>{rowValue.dt}</td>
                    <td>{rowValue.inwardID}</td>
                    <td>{rowValue.nature}</td>
                    <td>{rowValue.recievedFrom}</td>
                    <td>{rowValue.subject}</td>
                    <td>{rowValue.deliverTo}</td>
                    <td>{rowValue.remark}</td>
                    <td>
                      <ViewRecord inward={rowValue.inwardID} />
                      <PopModal
                        inward={inward}
                        mode={'delete'}
                        btnText={'Yes, Delete'}
                        modelTitle={"Delete"}
                        message={`Inward Row with ID "${rowValue.inwardID}" will be permanently deleted, wish to proceed ? `}
                        variant={'outline-danger'}
                        id={rowValue.inwardID}
                      />
                      <PopModal
                        inward={inward}
                        mode={'update'}
                        btnText={'edit'}
                        modelTitle={"Update"}
                        message={`Inward Row with ID "${rowValue.inwardID}" will be updated, wish to proceed ? `}
                        variant={'outline-success'}
                        id={rowValue.inwardID}
                      />
                    </td>
                  </>
                }

                {/* ------------ Inward Table for Dashboad------------ */}

                {
                  !applyDataTableApi && inward &&
                  <>
                    <td>{rowValue.dt}</td>
                    <td>{rowValue.recievedFrom}</td>
                    <td>{rowValue.deliverTo}</td>
                    {/* <td>{rowValue.subject}</td> */}
                  </>
                }

                {/* ------------ Outward Table ------------ */}

                {applyDataTableApi && outward &&
                  <>
                    <td>{rowValue.outwardID}</td>
                    <td>{rowValue.dt}</td>
                    <td>{rowValue.serialNo}</td>
                    <td>{rowValue.department}</td>
                    <td>{rowValue.addresseeName}</td>
                    <td>{rowValue.nature}</td>
                    <td>{rowValue.description}</td>
                    <td>{rowValue.receiptNo}</td>
                    <td>{rowValue.remark}</td>
                    <td>
                      <Link to="/">View</Link>{' '}
                      <Link to="/inward">Edit</Link>{' '}
                      <PopModal
                        outward={outward}
                        mode={'delete'}
                        btnText={'Yes, Delete'}
                        modelTitle={"Delete"}
                        message={`Outward Row with ID "${rowValue.outwardID}" will be permanently deleted, wish to proceed ? `}
                        variant={'outline-danger'}
                        id={rowValue.outwardID}
                      />
                    </td>
                  </>
                }

                {/* ------------ Outward Table for Dashboad------------ */}

                {
                  !applyDataTableApi && outward &&
                  <>
                    <td>{rowValue.dt}</td>
                    <td>{rowValue.department}</td>
                    <td>{rowValue.addresseeName}</td>
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

export default TableFair;
