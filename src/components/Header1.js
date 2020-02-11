import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import HomePage from './HomePage';
import RegisterPage from './RegisterPage';
import dog from "./tempdog.JPG";
import './head.css';
import { Link } from 'react-router-dom';

class Header1 extends React.Component {

    constructor(props) {
        super(props);
    }


    render() {
        return (
            <div>
            <div className="d-flex justify-content-between">
                <img src={dog} height="40" width="50" className="align-self-end" onClick={() => {this.props.onChangePage('home')}}Dog Logo/>
                <h1 className="title">K9 FUN FAMILY</h1>
            </div>
            <div className="pt-3 pb-3 d-flex justify-content-around header" style={{ backgroundColor: "#ECEBE7" }}>
                            <Link to="/">Home</Link>
                            <Link to="/Services">Services</Link>
                            <Link to="/Gallery">Gallery</Link>
                            <Link to="/Testimonials">Testimonials</Link>
                            <Link to="/FAQ">FAQ</Link>
                            <Link to="/Register">Login/Register</Link>
            </div>
            </div>
        );
    }
}

export default Header1;