import React, { useEffect, useState } from 'react';
import { Col, Container, Row, ListGroup, Button } from "react-bootstrap";
import { useParams } from 'react-router-dom';
import { delete_from, getRow } from '../../actions/posts/postsAction';
import TopNavBar from '../navBar/TopNavBar';
import { AiOutlinePrinter } from 'react-icons/ai';
import PopModal from "../Modals/PopModal";
import { Link, useNavigate } from 'react-router-dom';
import Footer from "../../components/Footer/Footer";
import { FaEdit } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';
import { AiOutlineFileAdd } from 'react-icons/ai';
import { FaList } from 'react-icons/fa';
import { DELETE } from '../../utils/Constants';
import GoBackNavBar from '../navBar/GoBackNavBar';
import StatusBox from '../StatusBox/StatusBox';
import { GREEN } from '../../utils/color';
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
                                    <MdDelete />&nbsp; &nbsp;<PopModal
                                        mode={DELETE}
                                        execFunc={() => {delete_from({ outward: true, rowID: id })}}
                                        ren={setDeleted}
                                        modalBtnText={'Yes, Delete'}
                                        message={`Outward Row will be permanently deleted, wish to proceed ? `}
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
                                    <li><th>Date :&nbsp;</th>{ }<td>{formData.date}</td></li><br/>
                                    <li><th>Serial No :&nbsp;</th> <td> {formData.serialNo}</td></li><br/>
                                    <li><th>Receipt No :&nbsp;</th> <td> {formData.receiptNo}</td></li><br/>
                                    <li><th>Addressee  :&nbsp;</th> <td> {formData.addressee}</td></li><br/>
                                    <li><th>Department :&nbsp;</th> <td> {formData.department}</td></li><br/>
                                    <li><th>Nature :&nbsp;</th> <td> {formData.nature}</td></li><br/>
                                    <li><th>Description :&nbsp;</th> <td> {formData.description}</td></li><br/>
                                    <li><th>Remark :&nbsp;</th> <td> {formData.remark}</td></li><br/>
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

