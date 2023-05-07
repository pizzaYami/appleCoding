import { configureStore, createSlice } from '@reduxjs/toolkit'
import user from './store/userSlice'






let cartData = createSlice({
  name : 'cartData',
  initialState : [
    {id : 0, name : 'White and Black', count : 2},
    {id : 2, name : 'Grey Yordan', count : 1}
  ],
  reducers : {
    // id를 찾아서 객체에서 일치하는 아이디를 가져와 count를 수정해준다.
    addCount (state, action){
      let 번호 = state.findIndex((a)=>{ return a.id === action.payload })
      state[번호].count++
    },
    addItem(state, action){
      state.push(action.payload)
      
    },
    deleteItem(state, action){
      state.splice(action.payload, 1)
    }
  }
})

export let { addCount, addItem, deleteItem } = cartData.actions 


export default configureStore({
  reducer: {
    user : user.reducer,
    cartData : cartData.reducer
  }
}) 