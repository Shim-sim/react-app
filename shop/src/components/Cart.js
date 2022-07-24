/* eslint-disable */

import { useState } from "react";
import {Table} from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux'
import { increaseCount, decreaseCount, deleteItem } from './../store.js'

const Cart = () => {
	
const data =	useSelector(state => state.data)
const user = useSelector(state => state.user)
const dispatch = useDispatch()

	return (
		<div>
			{user.name}의 장바구니
			<Table>
      <thead>
        <tr>
          <th>#</th>
          <th>상품명</th>
					<th>가격</th>
          <th>수량</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
     	{
				data.map((x,i)=> 
					<tr key={data[i].id}>
						<td>{data[i].id}</td>
						<td>{data[i].name}</td>
						<td>{data[i].price}</td>			 
						<td>{data[i].count}</td>
						<td className="cart-button">
							<button onClick={()=>{dispatch(increaseCount(data[i].id))}}>+</button>
							<button onClick={()=>{dispatch(decreaseCount(data[i].id))}}>-</button>
							<button onClick={()=>{dispatch(deleteItem(data[i]))}}>삭제</button>
						</td>
					</tr>
				)	
			} 
			</tbody>
			</Table>
		</div>
	)
}

export default Cart
