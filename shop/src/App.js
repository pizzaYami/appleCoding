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
import Detail from './routers/detail';

function App() {

  let [shoes] = useState(data)
  let navigate = useNavigate()

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
                  <p>{el.content}</p>
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
            <Nav.Link onClick={()=>navigate('/detail')}>Detail</Nav.Link>
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
          </Container>} />
        <Route path="/detail" element={<Detail />} />

        <Route path="/event" element={<Event></Event>}>
          <Route path="one" element={<div> 첫 주문시 양배추즙 서비스</div>} />
          <Route path="two" element={<div>생일기념 쿠폰받기</div>} />
        </Route>
      </Routes>
    </>
  );
}

function Event(){
  return(
    <div>
      <h4>오늘의 이벤트</h4>
      <Outlet></Outlet>
    </div>
  )
  
}



export default App;
