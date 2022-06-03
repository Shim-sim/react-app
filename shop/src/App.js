/* eslint-disable */
import { useState, useEffect } from "react";
import './App.css';
import { Button, Navbar, Container, Nav } from 'react-bootstrap';
import data from './data.js';
import Detail from './pages/Detail.js'
import Card from './components/Card.js';
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom';
import axios from 'axios'
import Cart from './pages/Cart.js'


function App() {
	let mySet = []
	let [shoes, setShoes] = useState(data);
	let navigate = useNavigate();
	let [add, setAdd] = useState(2);
  let [load, setLoad] = useState(false)
	let [clickButton, setClickButton] = useState(0);
	let [ui, setUi] = useState(true)
	let [local] = useState('')
	const [recent, setRecent] = useState(()=> {
		JSON.parse(localStorage.getItem("watched"))
	});
	
		useEffect(()=> {
			localStorage.setItem("watched", JSON.stringify(recent))
   	}, [recent]);
	
	
  return (
    <div className="App">
			<Navbar bg="dark" variant="dark">
				<Container>
				<Navbar.Brand onClick={()=> {navigate('/')}}>ShowShop</Navbar.Brand>
				<Nav className="me-auto">
					<Nav.Link onClick={()=> {navigate('/')}}>Home</Nav.Link>
					<Nav.Link onClick={()=> {navigate('/cart')}}>Cart</Nav.Link>
					
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
							setClickButton(clickButton+1)
									setLoad(true)
								axios.get(`https://codingapple1.github.io/shop/data${add}.json`)
								.then((result)=>{
									setLoad(false)
									let copy = [...shoes, ...result.data]
									setShoes(copy)
									setAdd(add+1)
								})	
								.catch(()=> {
								setLoad(false)
							})		
						}}>+</button> 
					</>
				} />	
				<Route path="/detail/:id" element={<Detail shoes={shoes}/>} />
				<Route path="/cart" element={<Cart/>} />
			</Routes>
					
    </div>
  );
}




   
export default App;
