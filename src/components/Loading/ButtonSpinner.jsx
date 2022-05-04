import React from "react";
import { Spinner, Button } from "react-bootstrap";

const ButtonSpinner = () => {
    return(
        <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '80%'
        }}>
            <Button variant="primary" disabled>
                <Spinner
                    as="span"
                    animation="grow"
                    size="sm"
                    role="status"
                    aria-hidden="true"
                />
                Loading...
            </Button>
        </div>
    )
}

export default ButtonSpinner;