import React from "react";
import { Alert } from "react-bootstrap";


const AlertModel =({message,variant,show, setShow})=>{

  setTimeout(()=>{
    setShow(null);
  },4000);
  return(
    <>
     <Alert
            show={show}
            variant={variant}
            onClose={() => setShow(false)}
            dismissible
          >
            <p style={{height:"10px"}}>{message}</p>
          </Alert>
    </>
  )

}
export default AlertModel;