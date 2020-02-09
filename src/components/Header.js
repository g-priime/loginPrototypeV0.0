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
            <Navbar bg="light" variant="light">
                    <Navbar.Brand onClick={() => {this.props.onChangePage('home')}}>Dog</Navbar.Brand>
                    <Navbar.Collapse>
                        <Nav>
                            <Nav.Link onClick={() => {this.props.onChangePage('home')}}>Home</Nav.Link>
                            <Nav.Link onClick={() => {this.props.onChangePage(0)}}>Services</Nav.Link>
                            <Nav.Link onClick={() => {this.props.onChangePage(0)}}>Gallery</Nav.Link>
                            <Nav.Link onClick={() => {this.props.onChangePage(0)}}>Testimonials</Nav.Link>
                            <Nav.Link onClick={() => {this.props.onChangePage(0)}}>FAQ</Nav.Link>
                            <Nav.Link onClick={() => {this.props.onChangePage('register')}}>Login/Register</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default Header;