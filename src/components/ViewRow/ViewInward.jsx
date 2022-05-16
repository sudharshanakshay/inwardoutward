import "C:/Users/hp/Desktop/Aptra/inwardoutward/src/App.css"
import React, { useEffect, useState } from 'react';
import { Col, Container, Row, ListGroup, Button } from "react-bootstrap";
import { Navigate, useParams } from 'react-router-dom';
import { getRow } from '../../actions/posts/postsAction';
import TopNavBar from '../navBar/TopNavBar';
import { AiOutlinePrinter } from 'react-icons/ai';
import PopModal from "../Modals/PopModal";
import { Link, useNavigate } from 'react-router-dom';
import Footer from "../../components/Footer/Footer";
import { useSelector } from "react-redux";


const ViewInward = () => {

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

    // ---- load Inward Table data ---- 
    // const rowData = useSelector((state) => {
    //     console.log(state.posts.rowData)
    //     try { return state.posts.rowData; }
    //     catch { return 0; }
    // });

    let navigate = useNavigate();
    // if(!rowData) {
    //     return (
    //         <>helle </>
    //     )
    // }

    
    const handleEdit = (id) => {

        if (inward) navigate(`/inward/update/${id}`);

    }

    
    const handleOnClick = (e) => {
        console.log('hy clicked !!');
        try {
            console.log(formData.date);
            navigate('/inward');
        }
        catch (err) {
            
        }
    }
    try {
        console.log(formData.date)
    }
    catch {
        return( 
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
    if(formData.date === undefined){
        
        return(
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
                                <ListGroup.Item action >
                                    <Button variant="link"
                                        className="me-1 p-0"
                                        onClick={() => handleEdit(id)}>
                                        Edit Inward Post
                                    </Button>
                                </ListGroup.Item>
                                <ListGroup.Item action>
                                    <PopModal
                                        mode={'inward_delete'}
                                        btnText={'Yes, Delete'}
                                        modelTitle={"Delete"}
                                        message={`Row will be permanently deleted, wish to proceed ? `}
                                        variant={'outline-danger'}
                                        id={id}
                                    />
                                </ListGroup.Item>
                                <ListGroup.Item action>
                                    <Button onClick={(e) => handleOnClick(e)}>List Inward Posts</Button>
                                    {/* Link to="/inward" */}
                                </ListGroup.Item>
                                <ListGroup.Item action>
                                    <Link to="/inwardform">New Inward Post</Link>
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
                                        <li><th>Date :</th><td>{formData.date}</td></li>
                                        <li><th>Inward No. :</th> <td> {formData.inwardNo}</td></li>
                                        <li><th>Received From. : </th> <td> {formData.recievedFrom}</td></li>
                                        <li><th>Subject  : </th> <td> {formData.subject}</td></li>
                                        <li><th>Delivered To : </th> <td> {formData.deliverTo}</td></li>
                                        <li><th>Nature : </th> <td> {formData.nature}</td></li>
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

export default ViewInward;

