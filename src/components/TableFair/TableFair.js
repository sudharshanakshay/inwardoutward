import React from "react";
import { Table } from "react-bootstrap";
import $ from 'jquery';
import "datatables.net-dt/js/dataTables.dataTables";
import "datatables.net-dt/css/jquery.dataTables.min.css";


const TableFair = ({ title, tableHeaders, tableRows, applyDataTableApi = false }) => {

  if (applyDataTableApi) {
    $(document).ready(function () {
      $('#table').DataTable();
    });
  }

  console.log("table fair");
  console.log(tableRows);

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
            tableRows.map((value, index) => (
              <tr key={index}>
                {applyDataTableApi &&
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
                
                {
                  !applyDataTableApi &&
                  <>
                    <td>{value.dt}</td>
                    <td>{value.inwardID}</td>
                    <td>{value.recievedFrom}</td>
                    <td>{value.subject}</td>
                    <td>{value.deliverTo}</td>
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
