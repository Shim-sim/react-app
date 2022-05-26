/* eslint-disable */
import { useState } from "react";
import './App.css';
import { Button, Navbar, Container, Nav } from 'react-bootstrap';
import data from './data.js';
import Detail from './pages/Detail.js'
import Card from './components/Card.js';
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom';


function App() {
	
	let [shoes] = useState(data);
	let navigate = useNavigate();
	
  return (
    <div className="App">

			<Navbar bg="dark" variant="dark">
				<Container>
				<Navbar.Brand href="#homeW">ShowShop</Navbar.Brand>
				<Nav className="me-auto">
					<Nav.Link onClick={()=> {navigate('/')}}>Home</Nav.Link>
					<Nav.Link onClick={()=> {navigate('/detail')}}>Detail</Nav.Link>
				</Nav>
				</Container>
			</Navbar>
			
			
			
			<Routes>
				<Route path="/" element={
				<>
				<div className="main-bg"></div>
				<div className="container">
					<div className="row">
						{ shoes.map((a,i)=> {
								return <Card shoes={shoes[i]} i={i+1}/>
						})}
					</div>
		 		</div>
				</>
				} />
				<Route path="/detail" element={<Detail/>} />
				<Route path="/about" element={<About/>} />
			</Routes>

    </div>
  );
}

function About() {
	return (
		<div>
			<h4>회사정보임</h4>
		</div>
	)
}


export default App;
