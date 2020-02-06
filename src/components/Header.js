import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import HomePage from './HomePage';
import RegisterPage from './RegisterPage';

class Header extends React.Component {

    render() {
        return (
            <div>
            <Navbar>
            <Navbar.Header>
                <Navbar.Brand href={HomePage}>Dog</Navbar.Brand>
            </Navbar.Header>
                <Nav>
                    <Nav.Link href={RegisterPage}>Register</Nav.Link>
                    <Nav.Link href="">Services</Nav.Link>
                    <Nav.Link href="">Gallery</Nav.Link>
                </Nav>
            </Navbar>
            </div>
        );
    }
}

export default Header;