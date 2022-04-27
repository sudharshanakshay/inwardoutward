import React from "react";
import { Table } from "react-bootstrap";

const TableFormat = ({ title, tableHeaders, tableRows }) => {
  return (
    <div>
      <h3 className="center">{title}</h3>
      <Table responsive>
        <thead>
          <tr>
            {tableHeaders.map((value, index) => (
              <td key={index}>{value}</td>
            ))}
          </tr>
        </thead>
        <tbody>
          {
            tableRows.map((value,index)=>(
              <tr key={index}>
                {
                  value.map((data, index)=>(
                    <td key={index}>{data}</td>
                  ))
                }
              </tr>
            ))
          }
        </tbody>
      </Table>
    </div>
  );
};

export default TableFormat;
