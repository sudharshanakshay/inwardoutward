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

  const handleInwardDelete =(value) =>{
    console.log(value);
    
    console.log(outward);
  }

  // console.log("table fair");
  // console.log(tableRows);

  return (
    <div className="elevated-box">
      <h3 className="center">{title}</h3>

      <Table responsive id="table">
        <thead>
          <tr className="center">
            {tableHeaders.map((headerValue, index) => (
              <td key={index} style={{width:headerValue[1]}}>{headerValue[0]}</td>
            ))}
            { applyDataTableApi && <td>Actions</td>}
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
                    <Link to="/">View</Link>{' '}
                    <Link to="/inward">Edit</Link>{' '}
                    <Button onClick={()=>handleInwardDelete(rowValue.inwardID)}>Delete</Button>
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
                    <td><Link to="/outwardform">View</Link>{' '}<Link to="/inward">Edit</Link>{' '}<Link to="/outwardform">Delete</Link></td>
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
