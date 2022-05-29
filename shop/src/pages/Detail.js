/* eslint-disable */
import { useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import { Nav } from 'react-bootstrap';



function Detail(props) {
	
	let [alert, setAlert] = useState(true);
	let [tap, setTap] = useState(0)
	let {id} = useParams();
	let 찾은상품 = props.shoes.find((x)=> x.id == id);
	
	 useEffect(()=> {
			let timer = setTimeout(()=>{ setAlert(false) },3000);
		 	return ()=> {
				clearTimeout(timer);
			}
	 },[])
	
	
	return(
		<div className="container">
			{
				alert == true 
				?	<div className="alert alert-warning">
						3초이내 구매시 할인
					</div> 
				: null
			}
		
			<div className="row">
				<div className="col-md-6">
					<img src={`https://codingapple1.github.io/shop/shoes${+id+1}.jpg`} width="100%" />
				</div>
				<div className="col-md-6">
					<h4 className="pt-5">{찾은상품.title}</h4>
					<p>{찾은상품.content}</p>
					<p>{찾은상품.price}</p>
					<button className="btn btn-danger">주문하기</button> 
				</div>
			</div>
			
			<Nav variant="tabs" defaultActiveKey="link0">
				<Nav.Item>
					<Nav.Link onClick={()=>{ setTap(0) }} eventKey="link0" >버튼0</Nav.Link>
				</Nav.Item>
				<Nav.Item>
					<Nav.Link onClick={()=>{ setTap(1) }} eventKey="link1">버튼1</Nav.Link>
				</Nav.Item>
				<Nav.Item>
					<Nav.Link onClick={()=>{ setTap(2) }} eventKey="link2">버튼2</Nav.Link>
				</Nav.Item>
			</Nav>
			<TabContent tap={tap}/>
			
			
			
		</div>
	)
}
function TabContent(props) {
		if (props.tap == 0) {
		return <div>내용0</div>
	} else if (props.tap == 1) {
		return <div>내용1</div>
	} else if (props.tap == 2) {
		return <div>내용2</div>
	}
}



export default Detail;