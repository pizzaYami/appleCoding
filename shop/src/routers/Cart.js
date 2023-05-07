import { Table } from 'react-bootstrap'
import { useDispatch, useSelector } from "react-redux"
import { addCount, deleteItem } from '../store'
import { changeName, increase } from "./../store/userSlice"

function Cart() {

  let state = useSelector((state) => state)
  let dispatch = useDispatch()


  return (
    <div>
      {state.user.name}{state.user.age}의 장바구니 
      <button onClick={()=> {dispatch(increase(10))}}>123</button>
      <Table>
        <thead>
          <tr>
            <td>#</td>
            <td>상품명</td>
            <td>수량</td>
            <td>변경하기</td>
          </tr>
        </thead>
        {
          state.cartData.map(function (el, idx) {
            return (
              <thead key={idx}>
                <tr>
                  <td>{el.id}</td>
                  <td>{el.name}</td>
                  <td>{el.count}</td>
                  <td>
                    <button onClick={()=>{
                      dispatch(addCount(state.cartData[idx].id))
                    }}>수량증가</button>
                    <button onClick={()=>{
                      dispatch(deleteItem(state.cartData[idx].id))
                    }}>삭제</button>
                  </td>
                  
                </tr>
              </thead>
            )
          })
        }
      </Table>
    </div>
  )
}

export default Cart;