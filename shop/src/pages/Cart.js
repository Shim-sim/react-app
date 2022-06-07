/* eslint-disable */
import { memo, useState } from "react"
import { Table } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import { increase } from "./../store/userSlice.js"
import { addCount, deleteItem } from "./../store/cartSlice.js"

let Child = memo(function() {
	return <div>자식임</div>
})


function Cart() {
	
	let state = useSelector((state)=> state)
	let dispatch = useDispatch()
	let [count, setCount] = useState(0)
	return(
		<div>
			<Child/>
			<button onClick={()=>{ setCount(count+1) }}>+</button>
			<Table>
					<thead>
						<tr>
							<th>#</th>
							<th>상품명</th>
							<th>수량</th>
							<th>변경하기</th>
						</tr>
					</thead>
					<tbody>
							{
								state.cart.map((a,i)=> 
									<tr key={state.cart[i].id}>
										<td>{state.cart[i].id}</td>
										<td>{state.cart[i].name}</td>
										<td>{state.cart[i].count}</td>
										<td>
											<button onClick={()=>{
													dispatch(addCount(state.cart[i].id))
												}}>추가</button>
											<button onClick={()=>{
													dispatch(deleteItem(state.cart[i]))
												}}>삭제</button>
										</td>
									</tr>
								)
							}
					</tbody>
				</Table> 
		</div>
	)
}

export default Cart;