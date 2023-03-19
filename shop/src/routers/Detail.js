import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import {Nav} from 'react-bootstrap'
import '../App.css';


function Detail(props) {


  let [count, setCount] = useState(0)
  let [num, setNum] = useState('')
  let [tap, setTap] = useState(0)
  let { id } = useParams()
  let [fade, setFade] = useState('')

  useEffect(() => {
    if (isNaN(num) == true) {
      alert('그러지마세요')
    }
  }, [num])

  // 처음화면 나올떄 페이드 인  
  useEffect(()=>{
    let a = setTimeout(() => {setFade('end')}, 100);
    return ()=>{
      clearTimeout(a)
      setFade('')
    }
  }, [])

  return (
    <div className={`container start ${fade}`}>

      <button onClick={() => setCount(count + 1)}>버튼</button>
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

      <Nav variant="tabs" defaultActiveKey="link0">
        <Nav.Item>
          <Nav.Link eventKey="link0" onClick={()=>{setTap(0)}}>버튼0</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link1" onClick={()=>{setTap(1)}}>버튼1</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link2" onClick={()=>{setTap(2)}}>버튼2</Nav.Link>
        </Nav.Item>
      </Nav>

      <TabContent tap={tap} />


    </div>
  )
}
function TabContent({tap}){

  let [fade, setFade] = useState('')

  useEffect(()=>{
    let a = setTimeout(() => {setFade('end')}, 100);
    return ()=>{
      clearTimeout(a)
      setFade('')
    }
  }, [tap])

  return <div className={`start ${fade}`} >
    {[<div>내용0</div>, <div>내용1</div>, <div>내용2</div>][tap]}
  </div>
}


export default Detail