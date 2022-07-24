/* eslint-disable */
import { React, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Nav } from 'react-bootstrap';
import styled from 'styled-components';
import { addItem } from './../store.js'
import { useSelector, useDispatch } from 'react-redux'
import Recent from './../components/Recent.js'

const Detail = ({shoes}) => {
	
	const { id } = useParams();
	const item = shoes.find(x => x.id == id)
	const [discount, setDiscount] = useState(true)
	const [tap, setTap] = useState(0)
	const [fade, setFade] = useState('')
	const dispatch = useDispatch()
	
	useEffect(()=>{
		let disCountTimer = setTimeout(()=> {setDiscount(false)}, 2300)
		let fadeTimer = setTimeout(()=>{ setFade('end') }, 100)
		
		return () => {
			clearTimeout(disCountTimer, fadeTimer)
		}
	},[])
	
	useEffect(()=> {
		let myArr = localStorage.getItem('watched')
		// myArr = JSON.parse(myArr) 이 부분에 대한 조건식은 아래에
		if (myArr == null) {myArr = []} else {myArr = JSON.parse(myArr)}
		myArr.push(id)
		myArr = new Set(myArr)
		myArr = Array.from(myArr)
		localStorage.setItem('watched', JSON.stringify(myArr))
	},[])
	
	let [recentArr, setRecentArr] = useState(JSON.parse(localStorage.getItem('watched')))
	
	return (
		<div className={`container start ${fade}`}>
		{ discount &&
		 <div className="alert alert-warning">
				2초 이내 구매시 할인
		 </div>
		}	
			<Recent recentArr={recentArr}/>
			<div className="row">
				<div className="col-md-6">
					<img src={`https://codingapple1.github.io/shop/shoes${Number(id)+1}.jpg`} width="100%" />
				</div>
				<div className="col-md-6">
					<h4 className="pt-5">{item.title}</h4>
					<p>{item.content}</p>
					<p>{item.price}</p>
					<button className="btn btn-danger" onClick={()=>{
						dispatch(addItem({id: item.id , name: item.title , price: item.price , count: 1}))}}>주문하기
					</button> 
				</div>
			</div>
			
			<Nav variant="tabs"  defaultActiveKey="link0">
				<Nav.Item>
					<Nav.Link onClick={()=>setTap(0)} eventKey="link0">버튼0</Nav.Link>
				</Nav.Item>
				<Nav.Item>
					<Nav.Link onClick={()=>setTap(1)} eventKey="link1">버튼1</Nav.Link>
				</Nav.Item>
				<Nav.Item>
					<Nav.Link onClick={()=>setTap(2)} eventKey="link2">버튼2</Nav.Link>
				</Nav.Item>
			</Nav>
			<TapContent tap={tap}/>
			
		</div>
		
	)
}

function TapContent({tap}) {
	let [fade, setFade] = useState('')
	
	useEffect(()=> {
		let timer = setTimeout(()=>{ setFade('end') }, 100)
		return ()=> {
			clearTimeout(timer)
			setFade('')
		}
	}, [tap])
	
	return ( <div className={`start ${fade}`}>
		{ [<div>내용1</div>,<div>내용2</div>,<div>내용3</div>][tap] }
	</div> )
}

export default Detail;