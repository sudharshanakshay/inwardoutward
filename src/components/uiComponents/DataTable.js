import React from "react";
import { Table } from "react-bootstrap";

const DataTable = ({rows}) => {
  return (
    <div>
      <Table responsive>
        <thead>
          <tr>
            <th>sl. no</th>
            <th>Date</th>
            <th>Inward No</th>
            <th>Nature of Mail</th>
            <th>Recieved From</th>
            <th>Subject</th>
            <th>Deliver To</th>
            <th>Remark</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((value, index) => (
            <tr>
              {value.map((value, index) => (
                <td key={index}>{value}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default DataTable;
