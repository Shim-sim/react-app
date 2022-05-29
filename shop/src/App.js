/* eslint-disable */
import { useState } from "react";
import './App.css';
import { Button, Navbar, Container, Nav } from 'react-bootstrap';
import data from './data.js';
import Detail from './pages/Detail.js'
import Card from './components/Card.js';
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom';
import axios from 'axios'


function App() {
	
	let [shoes, setShoes] = useState(data);
	let navigate = useNavigate();
	let [연습,연습용] = useState('');
	let [add, setAdd] = useState(2);
	// let [load, setLoad] = useState()
	
	// const Loading = () => {
	// 	return (
	// 		<div>로딩중입니다</div>
	// 	)
	// }
	
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
									return <Card shoes={shoes[i]} idx={i} i={i} key={a.id}/>
							})}
						</div>
					</div>
					<button onClick={()=>{
						axios.get(`https://codingapple1.github.io/shop/data${add}.json`)
						.then((result)=>{
							let copy = [...shoes, ...result.data]
							console.log(copy)
							setShoes(copy)
							setAdd(add+1)
						})
						}}>AJAX요청</button>
					</>
				} />		
				<Route path="/detail/:id" element={<Detail shoes={shoes}/>} />
			</Routes>
					
    </div>
  );
}




   
export default App;
