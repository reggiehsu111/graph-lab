import React, { useState } from "react";
import {
 Navbar,
 Nav,
 NavDropdown,
 Form,
 FormControl,
 Button,
 Container
} from "react-bootstrap";
 
const Navigation = () => {
 const [modalShow, setModalShow] = useState(false);
 
 return (
   <Navbar bg="dark">
	<Container className="m-0">
     <Navbar.Brand className="text-light" href="#home">GraphLab</Navbar.Brand>
	</Container>
   </Navbar>
 );
};
export default Navigation;

