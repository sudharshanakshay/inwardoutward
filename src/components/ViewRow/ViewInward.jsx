import React, { useEffect, useState } from 'react';

import { Button, Col, Container, Form, FormControl, InputGroup, Row, Table } from "react-bootstrap";
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getRow } from '../../actions/posts/postsAction';
 
const ViewInward = () => {

    const { id } = useParams();
    console.log(id)

    const [formData, setFormData] = useState({
        inwardNo: '',
        date: '',
        nature: '',
        recievedFrom: '',
        subject: '',
        deliverTo: '',
        remark: '',
    });

    // ---- 'getRow' func defined in PostsAction, fetches specific row from database ----
    // ---- useEffect to render only once , empty '[]' makes it happn. ----
    useEffect(()=>{
        var res = getRow({ inward: true, id: id });
        console.log(res);
        res.then((value) => {
              console.log(value[0]);
              setFormData(value[0]);
            })
    },[]);

    return(
       <Container>
           <li>{formData.inwardNo}</li>       
           <li>{formData.date}</li>    
           <li>{formData.nature}</li>    
           <li>{formData.recievedFrom}</li>    
           <li>{formData.subject}</li>    
           <li>{formData.deliverTo}</li>    
           <li>{formData.remark}</li>    
       </Container>
    );
    
}

export default ViewInward;

