/* eslint-disable */

import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
	
	let post = '첫번째 리액트 변수선언';
	let [글제목, 글변경] = useState(['남자코트 추천','강남 우동맛집', '파이썬 독학']);
	let [따봉, 따봉변경] = useState([0,0,0]);
	let [modal, setModal] = useState(false);
	

	
  return (
    <div className="App">
      <div className="black-nav">
		 	 <h4>SHIMlog</h4>
	  	</div>
			
			<button onClick={()=> {
					let copy = [...글제목];
					copy.sort();
					글변경(copy);
				}}>정렬버튼</button>
			
			
			<button onClick={()=>{
					let copy = [...글제목];
					copy[0] = '여자코트 추천';
					글변경(copy);
				}}>글수정</button>
			
			
			{
			글제목.map(function(a, i){
				return (
				<div className='list'>
					<h4 onClick={()=>{setModal(true)}}>
						{ 글제목[i] }
						<span onClick={()=>{
							let copy = [...따봉]
							copy[i] = copy[i] + 1
							따봉변경(copy)
					}}>👍</span> {따봉[i]}
				</h4>
					<p>5월 11일 발행</p>
				</div>)
					})
				}	
			
			{
				modal == true ? <Modal 글변경={글변경} 글제목={글제목}/> : null
			}	
			
    </div>
  );
}

	function Modal(props) {
	return (
			<div className="modal">
				<h4>{props.글제목[0]}</h4>
				<p>날짜</p>
				<p>상세내용</p>
				<button onClick={()=> {
					let capu = [props.글제목];
					let copy = capu;
					
					console.log(copy);
					
				}}>글수정</button>
			</div>)
}


export default App;
