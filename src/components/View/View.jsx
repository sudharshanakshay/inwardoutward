import React, { useEffect, useState } from 'react';

import { Button, Col, Container, Form, FormControl, InputGroup, Row, Table } from "react-bootstrap";
import { useSelector } from 'react-redux';
import { getRow } from '../../actions/posts/postsAction';
import store from '../../store';
import ActionMessage from '../AlertModel/PopModal';
 
const ViewRecord = ({id}) => {

    // const [rowValue, setRowValue] = useState();

    // useEffect(()=>{
    //     getRow({inward:true, id:8});
    //     store.dispatch(setViewRow());
    // },[]);

    // getRow({inward:true, id:8});

    // store.dispatch(setViewRow());

    const viewRow = useSelector((state) =>  {
        try {
            
            console.log(state.posts.viewRow);
            return state.posts.viewRow;
        }
        catch (err) {
            console.log(err);
            return 0;
        }
    })

    // setRowValue(viewRow[0].inwardNo)

    return(
       <Container>
           <li>12</li>       
           <li>{}</li>    
       </Container>
    );
    
}

export default ViewRecord;

