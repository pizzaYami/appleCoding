import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"


// class Detail2 extends React.Component{

//   componentDidMount(){

//   }
//   componentDidUpdata(){

//   }
//   componentDidUnmount(){
    
//   }

  
// }



function Detail(props) {


  let [count, setCount] = useState(0)
  let [alert, setAlert] = useState('2초 이내 구매시 할인')
  let {id} = useParams()

  useEffect(()=> {
    setTimeout( ()=>{  setAlert('') }, 2000);
    console.log(1)
  }, [])

  return (
    <div className="container">
      <div className="alert alert-warning">
        {alert}  
      </div>
      <button onClick={()=> setCount( count + 1)}>버튼</button>
      {count}
      <div className="row">
        <div className="col-md-6">
          <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="100%" />
        </div>
        <input type="text"></input>
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