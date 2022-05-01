import React from "react";
import { Table } from "react-bootstrap";
import $ from 'jquery';
import "datatables.net-dt/js/dataTables.dataTables";
import "datatables.net-dt/css/jquery.dataTables.min.css";


const TableFair = ({ title, tableHeaders, tableRows, applyDataTable = false }) => {

  if (applyDataTable) {
    $(document).ready(function () {
      $('#table').DataTable();
    });
  }

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
            console.log(tableRows)
            // tableRows.map((value, index) => (
            //   <tr key={index}>
            //     {
            //       console.log("table data"+value)
            //       // value.map((data, index) => (
            //       //   <td key={index}>{data}</td>
            //       // ))
            //     }
            //   </tr>
            // ))
          }
        </tbody>
      </Table>
    </div>
  );
};

export default TableFair;
