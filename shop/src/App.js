/* eslint-disable */
import { useState } from "react";
import './App.css';
import {Button, Navbar, Nav, Container} from 'react-bootstrap/'




function App() {

	
  return (
    <div className="App">
			<Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">도겸Shop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Cart</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}




   
export default App;
