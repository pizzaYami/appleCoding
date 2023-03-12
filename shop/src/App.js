import './App.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import bg from './img/bg.png';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import data from './data'
import { useState } from 'react';
import { Route, Routes, Link } from 'react-router-dom'
import Detail from './detail';

function App() {

  let [shoes] = useState(data)


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
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Link to="/">홈</Link>
      <br />
      <Link to="/detail">상세페이지</Link>


      <Routes>
        <Route path="/" element={
          <Container>
            <div className='main-bg' style={{ backgroundImage: 'url(' + bg + ')' }}>
            </div>
            <Row>
              <Card shoes={shoes} />
            </Row>
          </Container>} />
        <Route path="/detail" element={
          <Detail />
        } />
      </Routes>
    </>
  );
}




export default App;
