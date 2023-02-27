import React from "react";
import { Col, Container, Nav, Navbar, Row } from "react-bootstrap";

const ResponsiveNavBar = () => {
  return (
    <>
      <Container fluid className=''>
        <Row>
          <Col>
            <Navbar bg='secondary'>
              <Container>
                <Navbar.Brand>
                  Github
                </Navbar.Brand>
              </Container>
            </Navbar>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ResponsiveNavBar;
