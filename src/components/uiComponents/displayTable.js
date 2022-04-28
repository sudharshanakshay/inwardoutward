import React from "react";
import $ from 'jquery';
import { Container } from "react-bootstrap";
import "datatables.net-dt/js/dataTables.dataTables"
import "datatables.net-dt/css/jquery.dataTables.min.css" 

const DisplayTable = () => {

    const header = [ "SL No.", "Date", "Inward No", "Nature of Mail", "Recieved From", "Subject", "DeliverTo", "Remark"];
    const rowValues = [[1, "21/04/2022", "in005", "Invitation", "NITK", "Meeting", "Principal", "NA"],["2", "20/04/2022","in006", "Updates", "Higher Authority", "Examination", "Students", "NA"]];
   
    $(document).ready(function () {
        $('#table').DataTable();
    });

  

    return (
        <div>
           <Container>
        
           <table id="table" class="display">
                <thead>
                    <tr>
                    {
                        header.map((v, i)=> <td>{v}</td>)
                    }
                    </tr>
                </thead>
                <tbody>
                    {
                        rowValues.map((v, i) =>(
                        <tr key={i}>
                            {
                                v.map((d, i) => (
                                <td key={i} >{d}</td>
                                ))
                            }
                        </tr>
                        ))
                    }
                </tbody>
            </table>

           </Container>
         
        </div>
    )
}

export default DisplayTable;