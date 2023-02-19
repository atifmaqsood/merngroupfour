// import { faImagePortrait } from '@fortawesome/free-solid-svg-icons';
// import React, { useState } from 'react';
// import { Navbar, Nav } from 'react-bootstrap';
import { InputGroup } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';



// import InputGroup from 'react-bootstrap/InputGroup';

function Sidebar() {
  // const [isOpen, setIsOpen] = useState(false);
  return (
    <>
    <div className="searchbar" style={{marginTop:"75px"}}>
     <InputGroup className="mb-3"/ >
        <Form.Control style={{width:"270px"}} className="d-inline"
          placeholder="Search in Fresh Food"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
        />
        <Button className='btn btn-info btn-m '><FontAwesomeIcon icon={faMagnifyingGlass} /></Button>
        </div>
        <div className="Price filter" style={{marginTop:"4px"}}>
        {/* <InputGroup> */}
        {/* <InputGroup.Radio aria-label="Radio button for following text input" /> <label htmlFor="" style={{marginTop:"3px" }}>Rs 1-500</label> */}
      {/* </InputGroup> */}
      <Form>
      {['radio'].map((type) => (
        <div key={`default-${type}`} className="mb-3">
          <Form.Check 
            type={type}
            id={`default-${type}`}
            label={"1-500"}
          />

        </div>
      ))}
    {/* </Form>
    <Form> */}
      {['radio'].map((type) => (
        <div key={`default-${type}`} className="mb-3">
          <Form.Check 
            type={type}
            id={`default-${type}`}
            label={"501-1000"}
          />

        </div>
      ))}
    </Form>
          
        </div>
       
    </>
  );
}

export default Sidebar;
