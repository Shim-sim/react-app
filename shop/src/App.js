/* eslint-disable */
import { useState } from "react";
import './App.css';
import {Button, Navbar, Nav, Container} from 'react-bootstrap/'
import data from './shoes.js'
import Card from './components/Card'
import Detail from './components/Detail'
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom'




function App(){
	
	let [shoes, setShoes] = useState(data)
	
	let navigate = useNavigate();
	
	
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
        <Navbar.Brand href="#home">Shop</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link onClick={()=>{navigate('/')}}>Home</Nav.Link>
					<Nav.Link onClick={()=>{navigate('/detail')}}>Detail</Nav.Link>
        </Nav>
        </Container>
      </Navbar>
			
			
			
			<Routes>
				<Route path="/" element={
					< >
					<div className="main-bg"></div>
					<div className="container">
						<div className="row">
						{shoes.map((x,i)=> {
							return (
							<Card shoes={shoes[i]} i={i} key={shoes[i].id} />
							)})
						}		
					</div>
					</div>
					</>
					}/>
				<Route path="/detail/:id" element={ <Detail shoes={shoes}/> }/>
			</Routes>
			
			 
    </div>
  )
}




   
export default App;
