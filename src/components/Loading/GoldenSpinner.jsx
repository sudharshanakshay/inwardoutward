import React from "react";
import { Spinner } from "react-bootstrap";
import { GOLDEN } from "../../utils/color";

const GoldenSpinner = () => {
    return(
        <Spinner animation="border" size='sm' style={{color:GOLDEN}} />
    )
}

export default GoldenSpinner;