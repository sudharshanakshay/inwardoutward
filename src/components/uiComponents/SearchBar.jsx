import React from "react";
import { Form, FormControl } from "react-bootstrap";
import SearchIcon from '@mui/icons-material/Search';

const SearchBar = () => {
   return(
       <div>
           <Form className=" d-flex col-sm-8 offset-md-1">
            <FormControl
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
            />
            <SearchIcon/>
            </Form>
       </div>
   )
}

export default SearchBar;