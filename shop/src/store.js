import { configureStore, createSlice } from '@reduxjs/toolkit'

const user = createSlice({
	name: 'user',
	initialState: 'shim',
	reducers: {
		changeName(state){
			return 'shim sung bo'
		},
	}
})

const stock = createSlice({
	name: 'stock',
	initialState: [10,11,12]
})

const data = createSlice({
	name: 'data',
	initialState: [
  	{id : 0, name : 'White and Black', count : 2},
  	{id : 2, name : 'Grey Yordan', count : 1},
	],
	reducers: {
		plusCount(state){
			return (
				
			)
		}
	}
	
})

export let { changeName } = user.actions
export let { plusCount } = data.actions


export default configureStore({
  reducer: {
		user: user.reducer,
		stock: stock.reducer,
		data: data.reducer,
	}
}) 