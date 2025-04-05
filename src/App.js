import React from 'react';
import { Navbar, Nav, Container, Card, Row, Col, Jumbotron } from 'react-bootstrap';

function App() {
  return (
    <>
      {/* Navbar */}
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">Mon Application</Navbar.Brand>
        <Nav className="ml-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
        </Nav>
      </Navbar>

      {/* Jumbotron (En-tête) */}
      <Jumbotron fluid className="bg-info text-white">
        <Container>
          <h1>Bienvenue dans mon Application React</h1>
          <p>Cette application utilise React et React-Bootstrap</p>
        </Container>
      </Jumbotron>

      {/* Cartes */}
      <Container>
        <Row>
          <Col md={4}>
            <Card>
              <Card.Body>
                <Card.Title>Carte 1</Card.Title>
                <Card.Text>
                  Cette carte contient des informations utiles.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card>
              <Card.Body>
                <Card.Title>Carte 2</Card.Title>
                <Card.Text>
                  Cette carte contient des informations intéressantes.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card>
              <Card.Body>
                <Card.Title>Carte 3</Card.Title>
                <Card.Text>
                  Cette carte contient des informations supplémentaires.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
