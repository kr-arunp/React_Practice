import React from 'react'
import Counter from '../Counter';
import Nav from "react-bootstrap/Nav";
const NavAndTabs = () => {
  return (
    <>
      <div>
        <h1>This is an Example of NavBar in react bootstrap</h1>
      </div>
      <Nav
        defaultActiveKey="/home"
        as="ul"
        fills
        variant="tabs"
        onSelect={() => (
          <div>
            {" "}
            <Counter />
          </div>
        )}
        className="justify-content-center bg-info p-2 rounded gap-2"
      >
        <Nav.Item as="li">
          <Nav.Link href="/Counter">Counter</Nav.Link>
        </Nav.Item>

        <Nav.Item as="li">
          <Nav.Link eventKey="About">
            About
            {/* <Tab.Pane>{<Counter />}</Tab.Pane> */}
          </Nav.Link>
        </Nav.Item>
        <Nav.Item as="li">
          <Nav.Link eventKey="Pricing">Pricing</Nav.Link>
        </Nav.Item>
        <Nav.Item as="li">
          <Nav.Link eventKey="Home">Home</Nav.Link>
        </Nav.Item>

        <Nav.Item as="li">
          <Nav.Link eventKey="disabled">Disabled</Nav.Link>
        </Nav.Item>
      </Nav>
    </>
  );
}

export default NavAndTabs
