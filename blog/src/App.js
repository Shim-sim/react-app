/* eslint-disable */

import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { Component } from 'react';

function App() {
	
	let post = '첫번째 리액트 변수선언';
	let [글제목, 글변경] = useState(['남자코트 추천','강남 우동맛집', '파이썬 독학']);
	let [따봉, 따봉변경] = useState([0,0,0]);
	let [modal, setModal] = useState(false);
	let [title, setTitle] = useState(0);
	let [입력값, 입력값변경] = useState('');

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
				글제목.map((a,i)=> {
					return(
						<div className="list" key={i}>
							<h4 onClick={()=> { setModal(!modal); setTitle(i); }}>{ 글제목[i] }
							<span onClick={(e)=>{
									e.stopPropagation();
									let copy = [...따봉];
									copy[i] = copy[i] + 1;
									따봉변경(copy);
									}}>👍</span> {따봉[i]}
							</h4>
							<p>5월 22일 발행</p>
							<button onClick={()=> {
									let copy = [...글제목];
									copy.splice(i,1);
									글변경(copy);
								}}>삭제</button>
						</div>
					)
				})
			}
			
		
			
			<input onChange={(e)=>{
					입력값변경(e.target.value);
				}}/>
			
			<button onClick={()=> {
					let copy = [...글제목];
					let copy2 = [...따봉];
					copy2.push(0);
					copy.push(입력값);
					따봉변경(copy2)
					글변경(copy);
				}}>글발행</button>
			
			
			{
				modal == true ? <Modal title={title} 글변경={글변경} 글제목={글제목}/> : null
			}
			
			
    </div>
  );
}
	class Profile extends React.Component {
		constructor(){
			super();
			this.state = { name: 'shim', age: 27 }
		}
		
		render(){
			return (
				<div>프로필입니다</div>
				
			)
		}
	}



	function Modal(props) {
	return (
			<div className="modal">
				<h4>{props.글제목[props.title]}</h4>
				<p>날짜</p>
				<p>상세내용</p>
				<button>글수정</button>
			</div>)
}




export default App;
