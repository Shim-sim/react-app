/* eslint-disable */
import { useState, useEffect, useTransition } from "react";
import './App.css';
import { Button, Navbar, Container, Nav } from 'react-bootstrap';
import data from './data.js';
import Detail from './pages/Detail.js'
import Card from './components/Card.js';
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom';
import axios from 'axios'
import Cart from './pages/Cart.js'
import { useQuery } from "react-query"

let a = new Array(10000).fill(0)


function App() {
	
	//let [watched, setWatched] = useState([cartFromLocalStorage])
	let [shoes, setShoes] = useState(data);
	let navigate = useNavigate();
	let [add, setAdd] = useState(2);
  let [load, setLoad] = useState(false)
	let [clickButton, setClickButton] = useState(0);
	let [ui, setUi] = useState(true)
	
	let [name, setName] = useState('')
	let [isPending, startTransition] = useTransition()
	
	let result = useQuery('작명',()=>
		axios.get('https://codingapple1.github.io/userdata.json').then((a)=>{
		return a.data
		})
	)
	
	// useEffect(()=> {
	// 	localStorage.setItem('watched',JSON.stringify([]))
	// },[watched])
	

	
  return (
    <div className="App">
			<Navbar bg="light" variant="light">
				<Container>
				<Navbar.Brand onClick={()=> {navigate('/')}}>ShowShop</Navbar.Brand>
				<Nav className="me-auto">
					<Nav.Link onClick={()=> {navigate('/')}}>Home</Nav.Link>
					<Nav.Link onClick={()=> {navigate('/cart')}}>Cart</Nav.Link>
				</Nav>
				<Nav className="ms-auto">
					{ result.isLoading && '로딩중'}
					{ result.error && '에러남'}
					{ result.data && result.data.name}
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
							})
							}
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
				
				<input onChange={(e)=>{ 
					startTransition(()=>{
						setName(e.target.value)
					})
				}}/>
			
				{
				a.map(()=>{
					return <div>{name}</div>
				})
			}
				
    </div>
  );
}




   
export default App;
