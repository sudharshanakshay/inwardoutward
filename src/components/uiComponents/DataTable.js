import React from "react";
import { Table } from "react-bootstrap";

const DataTable = ({tableHeaders, tableRows}) => {
  return (
    <div>
      <Table responsive>
        <thead>
          <tr>
            {tableHeaders.map((head, index) => (
              <th>{head}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {tableRows.map((value, index) => (
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
