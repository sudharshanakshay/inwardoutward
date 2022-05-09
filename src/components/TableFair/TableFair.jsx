import React from "react";
import { Table } from "react-bootstrap";
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



  // console.log("table fair");
  // console.log(tableRows);

  return (
    <div>
      <h3 className="center">{title}</h3>

      <Table responsive id="table">
        <thead>
          <tr>
            {tableHeaders.map((value, index) => (
              <td key={index}>{value}</td>
            ))}
          </tr>
        </thead>
        <tbody>
          {
            tableRows?.map((value, index) => (
              <tr key={index}>

                {/* ------------ Inward Table ------------ */}

                {applyDataTableApi && inward &&
                  <>
                    <td>{value.inwardID}</td>
                    <td>{value.dt}</td>
                    <td>{value.inwardID}</td>
                    <td>{value.nature}</td>
                    <td>{value.recievedFrom}</td>
                    <td>{value.subject}</td>
                    <td>{value.deliverTo}</td>
                    <td>{value.remark}</td>
                    
                    
                  </>
                }

                {/* ------------ Inward Table for Dashboad------------ */}

                {
                  !applyDataTableApi && inward &&
                  <>
                    <td>{value.dt}</td>
                    <td>{value.recievedFrom}</td>
                    <td>{value.deliverTo}</td>
                    {/* <td>{value.subject}</td> */}
                  </>
                }

                {/* ------------ Outward Table ------------ */}

                {applyDataTableApi && outward &&
                  <>
                    <td>{value.outwardID}</td>
                    <td>{value.dt}</td>
                    <td>{value.serialNo}</td>
                    <td>{value.department}</td>
                    <td>{value.receiptNo}</td>
                    <td>{value.addresseeName}</td>
                    <td>{value.nature}</td>
                    <td>{value.description}</td>
                    <td>{value.remark}</td>
                  </>
                }

                {/* ------------ Outward Table for Dashboad------------ */}

                {
                  !applyDataTableApi && outward &&
                  <>
                    <td>{value.dt}</td>
                    <td>{value.department}</td>
                    <td>{value.addresseeName}</td>
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
