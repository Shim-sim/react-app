/* eslint-disable */
import './App.css';
import { createContext, useState } from "react";
import {Button, Navbar, Nav, Container} from 'react-bootstrap/'
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom'
import data from './shoes.js'
import Card from './components/Card'
import Cart from './components/Cart'
import Detail from './components/Detail'
import axios from 'axios'

let  Context1 = createContext()


let add = 2;

function App(){
	
	const [shoes, setShoes] = useState(data)
	const navigate = useNavigate();
	
	
	const onAddShoes = () => {
		axios.get(`https://codingapple1.github.io/shop/data${add}.json`)
		.then((result)=>{
			let copy = shoes.concat(result.data)
			setShoes(copy)
			add += 1
		})
		.catch((err)=>{ console.log('데이터 요청에 실패 했습니다.') })
		
	}
	
	
  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Container>
        <Navbar.Brand href="#home">Shop</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link onClick={()=>{navigate('/')}}>Home</Nav.Link>
					<Nav.Link onClick={()=>{navigate('/detail/0')}}>Detail</Nav.Link>
        </Nav>
        </Container>
      </Navbar>
			
			<Routes>
				<Route path="/" element={
					<>
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
					{
					add == 4 ? null : <button onClick={onAddShoes}>상품 더보기</button>
					}
					</>
					}/>
				<Route path="/detail/:id" element={ <Detail shoes={shoes}/> }/>
				<Route path="/cart" element={ <Cart/> } />
			</Routes>
			
    </div>
  )
}




   
export default App;
