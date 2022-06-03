import { createSlice } from '@reduxjs/toolkit'

let cart = createSlice({
	name: 'cart',
	initialState: [
  {id : 0, name : 'White and Black', count : 2},
  {id : 2, name : 'Grey Yordan', count : 1}
	],
	reducers: {
		addCount(state, action){
			let index	= state.findIndex((a)=> a.id === action.payload)
			state[index].count++
		},
		addItem(state, action){
			let index	= state.findIndex((a)=> a.id === action.payload.id)
			if(index >= 0) {
				state[index].count += 1
			} else if (index < 0) {
				state.push(action.payload)
			}
		},
		deleteItem(state, action){
			state.pop(action.payload)
		},
 	}
 })

export let { addCount, addItem, deleteItem } = cart.actions

export default cart