import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"



function Detail(props) {


  let [count, setCount] = useState(0)
  let [num, setNum] = useState('')
  let {id} = useParams()

  useEffect(()=>{
    if (isNaN(num) == true){
      alert('그러지마세요')
    }
  }, [num])



  return (
    <div className="container">
      
      <button onClick={()=> setCount( count + 1)}>버튼</button>
      {count}
      <div className="row">
        <div className="col-md-6">
          <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="100%" />
        </div>
        
        <div className="col-md-6">
          <h4 className="pt-5">{props.shoes[id].title}</h4>
          <p>{props.shoes[id].content}</p>
          <p>{props.shoes[id].price}</p>
          <button className="btn btn-danger">주문하기</button>
        </div>
      </div>
    </div>
  )
}

export default Detail