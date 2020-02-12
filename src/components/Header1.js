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
                <Link to="/">
                <img src={dog} height="40" width="50" className="align-self-end"/>
                </Link>
                <h1 className="title mr-3">K9 FUN FAMILY</h1>
            </div>
            <div className="container-head d-flex align-items-center d-flex justify-content-around header" style={{ backgroundColor: "#ECEBE7" }}>
                            <div><Link to="/" style={{ color: "#707070" }} ><div className="pt-3 pb-3">Home</div></Link></div>
                            <div><Link to="/Services" style={{ color: "#707070" }}><div className="pt-3 pb-3">Services</div></Link></div>
                            <div><Link to="/Gallery" style={{ color: "#707070" }}><div className="pt-3 pb-3">Gallery</div></Link></div>
                            <div><Link to="/Testimonials" style={{ color: "#707070" }}><div className="pt-3 pb-3">Testimonials</div></Link></div>
                            <div><Link to="/FAQ" style={{ color: "#707070" }}><div className="pt-3 pb-3">FAQ</div></Link></div>
                            <div><Link to="/Register" style={{ color: "#707070" }}><div className="pt-3 pb-3">Login/Register</div></Link></div>
            
            </div>
            </div>
        );
    }
}

export default Header1;