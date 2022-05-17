import React, { useEffect, useState } from 'react';
import { Col, Container, Row, ListGroup, Button } from "react-bootstrap";
import { Navigate, useParams } from 'react-router-dom';
import { delete_from, getRow } from '../../actions/posts/postsAction';
import TopNavBar from '../navBar/TopNavBar';
import { AiOutlinePrinter } from 'react-icons/ai';
import PopModal from "../Modals/PopModal";
import { Link, useNavigate } from 'react-router-dom';
import Footer from "../../components/Footer/Footer";
import { useSelector } from "react-redux";
import { FaEdit } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';
import { AiOutlineFileAdd } from 'react-icons/ai';
import { FaList } from 'react-icons/fa';
import { DELETE } from '../../utility/Constants';




const ViewInward = () => {

    const data = `Date :`;

    const INWARD_VIEW_HEADER = ["Date :", "Inward NO:", "Recieved From:", "Subject", "Deliver To", "Nature", "Remark"];

    let navigate = useNavigate();

    const { id } = useParams();
    const inward = true;
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
    useEffect(() => {
        var promise = getRow({ inward: true, id: id });
        console.log(promise);
        promise.then((value) => {
            console.log(value[0]);
            setFormData(value[0]);
        })
    }, []);


    try {
        console.log(formData.date)
    }
    catch {
        return (
            <>

                <div className='no-print' >
                    <TopNavBar />
                    <h1 style={{ textAlign: "center" }}>Inward Post </h1>
                </div>
                data has been deleted !

                {
                    navigate(-1)
                }
            </>

        )
    }

    if (formData.date === undefined) {

        return (
            <>data has been deleted !</>
        )
    }

    return (

        <div>
            <div className='no-print' >
                <TopNavBar />
                <h1 style={{ textAlign: "center" }}>Inward Post </h1>
            </div>
            <Row>
                <Col sm={4} >
                    <div className='actions'>
                        <Container>
                            <ListGroup variant='flush' >
                                <ListGroup.Item variant='success' style={{ textAlign: "center" }}>Actions</ListGroup.Item>

                                <ListGroup.Item action>
                                    <AiOutlineFileAdd/>&nbsp; &nbsp;<Link className='link' to="/inwardform">New Post</Link>
                                </ListGroup.Item>

                                <ListGroup.Item action>
                                    <FaEdit/>&nbsp; &nbsp;<Link className='link' to={`/inward/update/${id}`} >Edit Post</Link>
                                </ListGroup.Item>

                                <ListGroup.Item action>
                                    <FaList/>&nbsp; &nbsp;<Link className='link' to="/inward" >Show All</Link>
                                </ListGroup.Item>

                                <PopModal
                                    mode={DELETE}
                                    btnText={'Yes, Delete'}
                                    // modelTitle={"Delete"}
                                    message={`Row will be permanently deleted, wish to proceed ? `}
                                    execFunc={()=> delete_from({ inward: true, rowID: id })}
                                />

                                <ListGroup.Item action>
                                    <MdDelete/>&nbsp;<PopModal
                                        mode={'inward_delete'}
                                        btnText={'Yes, Delete'}
                                        modelTitle={"Delete"}
                                        message={`Row will be permanently deleted, wish to proceed ? `}
                                        variant={'outline-danger'}
                                        id={id}
                                    />
                                </ListGroup.Item>

                            </ListGroup>
                        </Container>
                    </div>
                </Col>
                <Col sm={8} >
                    <div>
                        <Container>
                            <div className="divToPrint" >
                                <ListGroup variant='flush' >
                                    <ListGroup.Item><h3>Record Details</h3></ListGroup.Item>
                                    <ListGroup.Item>
                                        <li><th>Date :&nbsp;</th><td>{formData.date}</td></li><br/>
                                        <li><th>Inward No. :&nbsp;</th> <td> {formData.inwardNo}</td></li><br/>
                                        <li><th>Received From. :&nbsp;</th> <td> {formData.recievedFrom}</td></li><br/>
                                        <li><th>Subject  :&nbsp;</th> <td> {formData.subject}</td></li><br/>
                                        <li><th>Delivered To :&nbsp;</th> <td> {formData.deliverTo}</td></li><br/>
                                        <li><th>Nature :&nbsp;</th> <td> {formData.nature}</td></li><br/>
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
                        </Container>
                    </div>
                </Col>
            </Row>

        </div>


    );

}

export default ViewInward;

