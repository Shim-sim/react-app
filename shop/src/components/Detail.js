/* eslint-disable */
import { React, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components'

const Detail = ({shoes}) => {
	const { id } = useParams();
	const item = shoes.find(x => x.id == id)
	const [discount, setDiscount] = useState(true)
	const [value, setValue] = useState(null)
	
	useEffect(()=>{
		let timer = setTimeout(()=> {setDiscount(false)}, 3000)
		return () => {
			clearTimeout(timer)
		}
	},[])
	
	useEffect(()=> {
		if (isNaN(value) == true) {
			alert(`don't do that`)
		}
	},[value])
	return (
		<div className="container">
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
					
					<input name="text"
						value={value}
						placeholder="숫자만 입력"
						onChange={(e)=>{
							setValue(e.target.value)
						}}/>
					<h4 className="pt-5">{item.title}</h4>
					<p>{item.content}</p>
					<p>{item.price}</p>
					<button className="btn btn-danger">주문하기</button> 
				</div>
			</div>
		</div> 
		
	)
}

export default Detail;