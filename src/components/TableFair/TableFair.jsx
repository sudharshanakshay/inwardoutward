import React from "react";
import { Button, Table} from "react-bootstrap";
import {Link} from 'react-router-dom';
import $ from 'jquery';
import "datatables.net-dt/js/dataTables.dataTables";
import "datatables.net-dt/css/jquery.dataTables.min.css";

import { MdDelete } from 'react-icons/md';


const TableFair = ({ title, tableHeaders, tableRows, inward=false, outward=false, applyDataTableApi = false }) => {

  if (applyDataTableApi) {
    $(document).ready(function () {
      $('#table').DataTable();
    });
  }

  const handleInwardDelete =({value}) =>{
    console.log(value);
  }

  // console.log("table fair");
  // console.log(tableRows);

  return (
    <div className="elevated-box">
      <h3 className="center">{title}</h3>

      <Table responsive id="table">
        <thead>
          <tr>
            {tableHeaders.map((value, index) => (
              <td key={index}>{value}</td>
            ))}
            { applyDataTableApi && <td>Actions</td>}
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
                    <td><Button variant="outline-danger" value={value.inwardID} onClick={(value)=> handleInwardDelete(value)}><MdDelete></MdDelete></Button></td>
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
                    <td><Link to="/outwardform">Add</Link></td>
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
