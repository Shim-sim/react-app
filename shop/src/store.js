/* eslint-disable */

import { configureStore, createSlice } from '@reduxjs/toolkit'
import user from './store/userSlice.js'

const stock = createSlice({
	name: 'stock',
	initialState: [10,11,12]
})

const data = createSlice({
	name: 'data',
	initialState: [
  	{id : 0, name : 'White and Black', price: 120000, count : 2},
  	{id : 2, name : 'Grey Yordan', price: 130000, count : 1},
	],
	reducers: { //action.payload는 파라미터 자리로 내가 입력한 값을 전달 받는다. 따라서 그 갚에 따라 결과가 달라짐
		increaseCount(state, action) {
			let index = state.findIndex(a => a.id === action.payload) 
			state[index].count++
		},
		decreaseCount(state, action) {
			let index = state.findIndex(a => a.id === action.payload) 
			state[index].count--
		},
		addItem(state, action) {
			let index = state.findIndex(a => a.id === action.payload.id)
			if (index >= 0) {
				state[index].count += 1
			} else if (index < 0) {
				state.push(action.payload)
			}
		},
		deleteItem(state, action) {
			state.pop(action.payload)
		}
	}
	})

export let { increaseCount, addItem, deleteItem, decreaseCount } = data.actions

export default configureStore({
  reducer: {
		user: user.reducer,
		stock: stock.reducer,
		data: data.reducer,
	}
}) 