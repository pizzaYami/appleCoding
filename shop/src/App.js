import logo from './logo.svg';
import './App.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import bg from './img/bg.png';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function App() {
  return (
    <div>
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
      
      <div className='main-bg' style={{backgroundImage:'url('+ bg +')'}}></div>

      <Container>
      <Row>
        <Col>
        <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="80%" />
        <h4>상품명</h4>
        <p>상품설명</p>
        </Col>
        <Col>
        <img src="https://codingapple1.github.io/shop/shoes2.jpg" width="80%" />
        <h4>상품명</h4>
        <p>상품설명</p>
        </Col>
        <Col>
        <img src="https://codingapple1.github.io/shop/shoes3.jpg" width="80%" />
        <h4>상품명</h4>
        <p>상품설명</p>
        </Col>

      </Row>
    </Container>


      </div>
  );
}

export default App;
