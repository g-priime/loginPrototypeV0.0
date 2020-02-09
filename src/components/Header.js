import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import HomePage from './HomePage';
import RegisterPage from './RegisterPage';

class Header extends React.Component {

    constructor(props) {
        super(props);
    }


    render() {
        return (
            <Navbar bg="light" variant="light" expand="md">
                    <Navbar.Brand onClick={() => {this.props.onChangePage('home')}}>Dog</Navbar.Brand>
                    <Navbar.Collapse>
                        <Nav>
                            <Nav.Item onClick={() => {this.props.onChangePage(0)}}>Home</Nav.Item>
                            <Nav.Item onClick={() => {this.props.onChangePage(0)}}>Services</Nav.Item>
                            <Nav.Item onClick={() => {this.props.onChangePage(0)}}>Gallery</Nav.Item>
                            <Nav.Item onClick={() => {this.props.onChangePage(0)}}>Testimonials</Nav.Item>
                            <Nav.Item onClick={() => {this.props.onChangePage(0)}}>FAQ</Nav.Item>
                            <Nav.Item onClick={() => {this.props.onChangePage('register')}}>Login/Register</Nav.Item>
                        </Nav>
                    </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default Header;