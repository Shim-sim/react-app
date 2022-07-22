/* eslint-disable */
import { React, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Nav } from 'react-bootstrap';
import styled from 'styled-components';

const Detail = ({shoes}) => {
	
	const { id } = useParams();
	const item = shoes.find(x => x.id == id)
	const [discount, setDiscount] = useState(true)
	const [tap, setTap] = useState(0)
	const [fade, setFade] = useState('')
	
	useEffect(()=>{
		let timer = setTimeout(()=> {setDiscount(false)}, 3000)
		return () => {
			clearTimeout(timer)
		}
	},[])
	
	useEffect(()=> {
		let timer = setTimeout(()=>{ setFade('end') }, 100)
		return ()=> {
			clearTimeout(timer)
			setFade('')
		}
	},[])
	
	return (
		<div className={`container start ${fade}`}>
		{ discount &&
		 <div className="alert alert-warning">
				2초 이내 구매시 할인
		 </div>
		}	
			<div className="row">
				<div className="col-md-6">
					<img src={`https://codingapple1.github.io/shop/shoes${Number(id)+1}.jpg`} width="100%" />
				</div>
				<div className="col-md-6">
					<h4 className="pt-5">{item.title}</h4>
					<p>{item.content}</p>
					<p>{item.price}</p>
					<button className="btn btn-danger">주문하기</button> 
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