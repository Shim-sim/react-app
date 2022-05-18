/* eslint-disable */

import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function Modal() {
	return (
	<div className="modal">
				<h4>제목</h4>
				<p>날짜</p>
				<p>상세내용</p>
			</div>)
}


function App() {
	
	let post = '첫번째 리액트 변수선언';
	let [글제목, 글변경] = useState(['남자코트 추천','강남 우동맛집', '파이썬 독학']);
	let [따봉, 따봉변경] = useState(0);
	let [modal, setModal] = useState(false);
	// 커밋 테스트
	
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
			
			
		<div className='list'>
			<h4>{ 글제목[0] } <span onClick={()=>{ 따봉변경(따봉+1) }}>👍</span> {따봉} </h4>
			<p>5월 11일 발행
			</p>
		</div>
		<div className='list'>
			<h4>{ 글제목[1] }</h4>
			<p>5월 11일 발행</p>
		</div>
		<div className='list'>
			<h4 onClick={()=> { setModal(!modal) }}>{ 글제목[2] }</h4>
			<p>5월 11일 발행</p>
		</div>
			
			{
				modal == true ? <Modal/> : null
			}

			
    </div>
  );
}


export default App;
