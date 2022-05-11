import React, { useEffect, useState } from 'react';
import { Button, Col, Container, Form, FormControl, InputGroup, Row, Table } from "react-bootstrap";
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getRow } from '../../actions/posts/postsAction';
import store from '../../store';
import ActionMessage from '../AlertModel/PopModal';
 
const ViewOutward = () => {

    const { id } = useParams();
    console.log(id)

    const [formData, setFormData] = useState({
        serialNo: '',
        date: '',
        department: '',
        addressee: '',
        nature: '',
        description: '',
        receiptNo: '',
        remark: '',
    });

    // ---- 'getRow' func defined in PostsAction, fetches specific row from database ----
    // ---- useEffect to render only once , empty '[]' makes it happn. ----
    useEffect(() => {
        var res = getRow({ outward: true, id: id });
        res.then((value) => {
            console.log(value[0]);
            setFormData(value[0]);
        })
    }, []);

    return(
       <Container>
           <li>{formData.serialNo}</li>       
           <li>{formData.date}</li>    
           <li>{formData.department}</li>    
           <li>{formData.addressee}</li>    
           <li>{formData.nature}</li>    
           <li>{formData.description}</li>    
           <li>{formData.receiptNo}</li>    
           <li>{formData.remark}</li>    
       </Container>
    );
    
}

export default ViewOutward;

