/* eslint-disable */
import { useEffect, useState, useHistory} from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Nav } from 'react-bootstrap';
import { useDispatch, useSelector } from "react-redux"
import { addItem } from "./../store/cartSlice.js"
import './../pages/Detail.css';


function Detail(props) {
	
	let [fade, setFade] = useState('')
	let [tap, setTap] = useState(0)
	let {id} = useParams();
	let 찾은상품 = props.shoes.find((x)=> x.id == id);
	let dispatch = useDispatch()
	let navigate = useNavigate();
	
	
	//Detail.js 로드시 실행
	useEffect(()=>{
		let myArr = localStorage.getItem('watched')
		if (myArr == null) {myArr = []} else {myArr = JSON.parse(myArr)}
		myArr.push(id)
		myArr = new Set(myArr)
		myArr = Array.from(myArr)
		localStorage.setItem('watched',JSON.stringify(myArr))
	},[])
	
	//localStorage에 있는 정보를 새로운 array에 저장
	let [newArr, setNewArr] = useState(JSON.parse(localStorage.getItem('watched')))
	
	
	useEffect(()=>{
		setTimeout(()=>{ setFade('end') },500)
		return ()=>{
			setFade('')
		}
	}, [])
	
	
	return(
		<div className={`container`}>
			<div className="lasted">
			<h6>최근 본 상품</h6>
			{/*newArr사용해서 반복문을 돌려서 화면에 최근본 상품을 띄우기*/}
			{
					newArr && newArr.map((a,i)=> {
					return(
					<div className="row" key={i}>
						<img src={`https://codingapple1.github.io/shop/shoes${+a+1}.jpg`} width="100%" />
						<h5>{props.shoes[a].title}</h5>
            <p>{props.shoes[a].price}</p>
					</div>
					)
				})
			}
			</div>
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
					<button className="btn btn-danger" onClick={()=> {navigate('/')}}>뒤로가기</button>
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