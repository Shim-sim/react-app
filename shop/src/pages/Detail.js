/* eslint-disable */
import { useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import { Nav } from 'react-bootstrap';
import { useDispatch, useSelector } from "react-redux"
import { addItem } from "./../store/cartSlice.js"


function Detail(props) {
	
	
	let [fade, setFade] = useState('')
	let [tap, setTap] = useState(0)
	let {id} = useParams();
	let 찾은상품 = props.shoes.find((x)=> x.id == id);
	let dispatch = useDispatch()
	
	useEffect(()=>{
		let myArr = localStorage.getItem('watched')
		myArr = JSON.parse(myArr)
		myArr.push(찾은상품.id)
		myArr = new Set(myArr)
		myArr = Array.from(myArr)
		localStorage.setItem('watched',JSON.stringify(myArr))
	},[])
	
	
	useEffect(()=>{
		setTimeout(()=>{ setFade('end') },500)
		return ()=>{
			setFade('')
		}
	}, [])
	
	
	
	return(
		<div className={`container start ${fade}`}>
			
			<div className="row">
				<div className="col-md-6">
					<img src={`https://codingapple1.github.io/shop/shoes${+id+1}.jpg`} width="100%" />
				</div>
				<div className="col-md-6">
					<h4 className="pt-5">{찾은상품.title}</h4>
					<p>{찾은상품.content}</p>
					<p>{찾은상품.price}</p>
					<button className="btn btn-danger" onClick={()=>{
						dispatch(addItem({id : 찾은상품.id, name : 찾은상품.title, count : 1,}))
						}}>주문하기</button> 
				</div>
			</div>
			
			<Nav variant="tabs"  defaultActiveKey="link0">
				{
					[0,1,2].map((a,i)=> {
						return (
							<Nav.Item key={a}>
								<Nav.Link onClick={()=>{ setTap(i) }} eventKey={`link${a}`}>버튼{i}</Nav.Link>
							</Nav.Item>
						)
					})
				}
			</Nav>
			<TabContent tap={tap}/>
			
		</div>
	)
}

function TabContent({tap}) {
	
	let [fade, setFade] = useState('')
	
	useEffect(()=>{
		setTimeout(()=>{ setFade('end') },200)
		return ()=>{
			setFade('')
		}
	}, [tap])
	
	return <div className={`start ${fade}`}>
		{ [<div>내용0</div>, <div>내용1</div>, <div>내용2</div>][tap] }
	</div>
}




export default Detail;