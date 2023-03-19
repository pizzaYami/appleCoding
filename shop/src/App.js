import './App.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import bg from './img/bg.png';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import data from './data'
import { useState } from 'react';
import { Route, Routes, Link, useNavigate, Outlet } from 'react-router-dom'
import Detail from './routers/Detail';
import axios from 'axios'


function App() {

  let [shoes, setShoes] = useState(data)
  let navigate = useNavigate()
  let [clickCount, setClickCount] = useState(2)
  let [lodingUI, setLodingUI] = useState(false) 

  // 상품카드 만드는 컴폰너트
  function Card(props) {
    return (
      <>
        {
          props.shoes.map(function (el, i) {
            let src = `https://codingapple1.github.io/shop/shoes${i + 1}.jpg`

            return (
              <Col>
                <div key={i}>
                  <img src={src} width="80%" />
                  <h4>{el.title}</h4>
                  <p>{el.price}</p>
                </div>
              </Col>
            )
          })}
      </>
    )
  }



  return (
    <>

      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="#home">조샵</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={()=>navigate('/')}>Home</Nav.Link>
            <Nav.Link onClick={()=>navigate('/Detail')}>Detail</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>


      <Routes>
        <Route path="/" element={
          <Container>
            <div className='main-bg' style={{ backgroundImage: 'url(' + bg + ')' }}>
            </div>
            <Row>
              <Card shoes={shoes} />  
            </Row>
              
            {/* 버튼눌렀을 때 데이터 추가 */}
            <button onClick={()=> {
              if(lodingUI == false)
              {<div>로딩중</div>}
              
              

              setClickCount(clickCount + 1)
              // if(clickCount > 3) { <div> 상품더없다~</div>}
              axios.get(`https://codingapple1.github.io/shop/data${clickCount}.json`)
              .then((결과)=>{
                let copy = [...shoes, ...결과.data]
                setShoes(copy)
                setLodingUI(true)
              })
              .catch(()=>{alert('로딩중')})

              
            }}>버튼</button>
          </Container>} />
        <Route path="/Detail/:id" element={<Detail shoes={shoes}/>} />
      </Routes>

    </>
  );
}


export default App;
