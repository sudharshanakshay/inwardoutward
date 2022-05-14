import React, { useEffect, useState } from 'react';
import { Col, Container, Row, ListGroup, Button } from "react-bootstrap";
import { useParams } from 'react-router-dom';
import { getRow } from '../../actions/posts/postsAction';
import TopNavBar from '../navBar/TopNavBar';
import { AiOutlinePrinter } from 'react-icons/ai';
import PopModal from "../Modals/PopModal";
import { Link, useNavigate } from 'react-router-dom';
import Footer from "../../components/Footer/Footer";

const ViewOutward = () => {

    const { id } = useParams();
    const outward = true;
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

    let navigate = useNavigate();
    const handleEdit = (id) => {

        if (outward) navigate(`/outward/update/${id}`);
    }

    return (
        <div>
            <div className='no-print' >
                <TopNavBar />
                <h1 style={{ textAlign: "center" }}>Outward Post </h1>
            </div>
            <Row>
                <Col sm={4} >
                    <div className='actions'>
                        <Container>
                            <ListGroup variant='flush' >
                                <ListGroup.Item variant='success' style={{ textAlign: "center" }}>Actions</ListGroup.Item>
                                <ListGroup.Item action >
                                    <Button variant="link"
                                        className="me-1 p-0"
                                        onClick={() => handleEdit(id)}>
                                        Edit Outward Post
                                    </Button>
                                </ListGroup.Item>
                                <ListGroup.Item action>
                                    <PopModal
                                        mode={'outward_delete'}
                                        btnText={'Yes, Delete'}
                                        modelTitle={"Delete"}
                                        message={`Outward Row will be permanently deleted, wish to proceed ? `}
                                        variant={'outline-danger'}
                                        id={id}
                                    />
                                </ListGroup.Item>
                                <ListGroup.Item action>
                                    <Link to="/outward">List Outward Posts</Link>
                                </ListGroup.Item>
                                <ListGroup.Item action>
                                    <Link to="/outwardform">New Outward Post</Link>
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

                                        <li><th>Date :</th>{ }<td>{formData.date}</td></li>
                                        <li><th>Serial No. :</th> <td> {formData.serialNo}</td></li>
                                        <li><th>Receipt No. : </th> <td> {formData.receiptNo}</td></li>
                                        <li><th>Addressee  : </th> <td> {formData.addressee}</td></li>
                                        <li><th>Department : </th> <td> {formData.department}</td></li>
                                        <li><th>Nature : </th> <td> {formData.nature}</td></li>
                                        <li><th>Description : </th> <td> {formData.description}</td></li>
                                        <li><th>Remark : </th> <td> {formData.remark}</td></li>
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

export default ViewOutward;

