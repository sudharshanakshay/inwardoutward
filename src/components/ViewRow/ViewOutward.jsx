import React, { useEffect, useState } from 'react';
import { Col, Container, Row, ListGroup } from "react-bootstrap";
import { useParams } from 'react-router-dom';
import { delete_from, getRow } from '../../actions/posts/postsAction';
import { AiOutlinePrinter } from 'react-icons/ai';
import PopModal from "../Modals/PopModal";
import { Link } from 'react-router-dom';
import { FaEdit } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';
import { AiOutlineFileAdd } from 'react-icons/ai';
import { FaList } from 'react-icons/fa';
import { DELETE } from '../../utils/Constants';
import GoBackNavBar from '../navBar/GoBackNavBar';
import ViewStatus from '../StatusBox/ViewStatus';

const ViewOutward = () => {

    const { id } = useParams();
    
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

    const [deleted, setDeleted] = useState(false);

    // ---- 'getRow' func defined in PostsAction, fetches specific row from database ----
    // ---- useEffect to render only once , empty '[]' makes it happn. ----
    useEffect(() => {
        var res = getRow({ outward: true, id: id });
        res.then((value) => {
            console.debug(value);
            if(!value.length) {
                setDeleted(true);
            } 
            setFormData(value[0]);
        })
    }, []);


    return (
        <div>
            <div className='no-print' >
                <GoBackNavBar title={'View Outward'}/>
                {/* <h1 style={{ textAlign: "center" }}>Outward Post </h1> */}
            </div>
            <Container>
            <Row>
                <Col sm={4} >
                    <div className='actions'>
                        <Container>
                            <ListGroup variant='flush' >
                                <ListGroup.Item variant='success' style={{ textAlign: "center" }}>Actions</ListGroup.Item>

                                <ListGroup.Item action>
                                    <AiOutlineFileAdd />&nbsp; &nbsp;<Link className='link' to="/outwardform">New Post</Link>
                                </ListGroup.Item>

                                <ListGroup.Item action>
                                    <FaEdit />&nbsp; &nbsp;<Link className='link' to={`/outward/update/${id}`} >Edit Post</Link>
                                </ListGroup.Item>

                                <ListGroup.Item action>
                                    <FaList />&nbsp; &nbsp;<Link className='link' to="/outward">Show All</Link>
                                </ListGroup.Item>

                                <ListGroup.Item action>
                                    <MdDelete />&nbsp; &nbsp;
                                    <PopModal
                                        mode={DELETE}
                                        execFunc={() => {delete_from({ outward: true, rowID: id })}}
                                        ren={setDeleted}
                                        modalBtnText={'Yes, Delete'}
                                        message={`Row will be permanently deleted, wish to proceed ? `}
                                    />
                                </ListGroup.Item>

                            </ListGroup>
                        </Container>
                    </div>
                </Col>
                <Col sm={8} >
                    <Container fluid>
                       <Row>
                       {
                            deleted && 
                            <ViewStatus title='Deleted'/>
                        }
                       </Row>
                    { !deleted &&
                        <>
                            <div className="divToPrint" >
                            <ListGroup variant='flush' >
                                <ListGroup.Item><h3>Record Details</h3></ListGroup.Item>
                                <ListGroup.Item>
                                    <li><b>Date :&nbsp;</b>{ }<label>{formData.date}</label></li><br/>
                                    <li><b>Serial No :&nbsp;</b> <label> {formData.serialNo}</label></li><br/>
                                    <li><b>Receipt No :&nbsp;</b> <label> {formData.receiptNo}</label></li><br/>
                                    <li><b>Addressee  :&nbsp;</b> <label> {formData.addressee}</label></li><br/>
                                    <li><b>Department :&nbsp;</b> <label> {formData.department}</label></li><br/>
                                    <li><b>Nature :&nbsp;</b> <label> {formData.nature}</label></li><br/>
                                    <li><b>Description :&nbsp;</b> <label> {formData.description}</label></li><br/>
                                    <li><b>Remark :&nbsp;</b> <label> {formData.remark}</label></li><br/>
                                </ListGroup.Item>
                            </ListGroup>
                        </div>
                        <div className="buttons">
                            <button className='btn btn-outline-primary glyphicon glyphicon-print'
                                onClick={() => window.print()}>
                                <AiOutlinePrinter />
                                Print
                            </button>{" "}
                        </div>
                        </>
                    }
                    </Container>
                </Col>
            </Row>
            </Container>
        </div>
    );

}

export default ViewOutward;

