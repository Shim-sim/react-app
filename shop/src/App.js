/* eslint-disable */
import { useState } from "react";
import './App.css';
import { Button, Navbar, Container, Nav } from 'react-bootstrap';
import data from './data.js';
import Detail from './pages/Detail.js'
import Card from './components/Card.js';
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom';



function App() {
	
	let [shoes, setShoes] = useState(data);
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
		  <button onClick={()=> {
					let copy = [...shoes]; 
					copy.sort((a,b)=> a.title.toLowerCase() > b.title.toLowerCase() ? 1 : -1);
					setShoes(copy);
					console.log(copy);
				}}>가나다정렬</button> 
			
			
			<Routes>
				<Route path="/" element={
				<>
				<div className="main-bg"></div>		
				<div className="container">
					<div className="row">
						{ shoes.map((a,i)=> {
								return <Card shoes={shoes[i]} i={i+1} key={a.id}/>
						})}
					</div>
		 		</div>
				</>
				} />
				<Route path="/detail/:id" element={<Detail shoes={shoes}/>} />
				
				
			</Routes>

    </div>
  );
}

function Event() {
	return (
		<div>
			<h4>오늘의 이벤트</h4>
			<Outlet></Outlet>
		</div>
	)
}


   
export default App;
