import { createSlice } from '@reduxjs/toolkit'

const user = createSlice({
	name: 'user',
	initialState: { name: 'shim', age: 30},
	reducers: {
		changeName(state){
			state.name = 'shimsungbo'
		},
		increase(state, action){
			state.age += action.payload
		},
		decrease(state, action) {
			state.age -= action.payload
		}
	}
})

export let { changeName, increase, decrease } = user.actions

export default user