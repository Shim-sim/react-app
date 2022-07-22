/* eslint-disable */

import {Table} from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux'
import { changeName, plusCount } from './../store.js'

const Cart = () => {
	
const data =	useSelector(state => state.data)
const name = useSelector(state => state.user)

const dispatch = useDispatch()

	return (
		<div>
			{name}의 장바구니
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
				data.map((x,i)=> 
					<tr key={data[i].id}>
						<td>{data[i].id}</td>
						<td>{data[i].name}</td>
						<td>{data[i].count}</td>
						<td>
							<button onClick={()=>{dispatch(plusCount())}}>+</button>
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
