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
                <img src={dog} height="30" width="40" className="align-self-end"/>
                </Link>
                <h2 className="title mr-3">K9 FUN FAMILY</h2>
            </div>
            <div className="container-head d-flex align-items-center d-flex justify-content-around header" style={{ backgroundColor: "#ECEBE7" }}>
                            <div><Link to="/" style={{ color: "#707070" }} ><div className="pt-2 pb-2">Home</div></Link></div>
                            <div><Link to="/Services" style={{ color: "#707070" }}><div className="pt-2 pb-2">Services</div></Link></div>
                            <div><Link to="/Gallery" style={{ color: "#707070" }}><div className="pt-2 pb-2">Gallery</div></Link></div>
                            <div><Link to="/Testimonials" style={{ color: "#707070" }}><div className="pt-2 pb-2">Testimonials</div></Link></div>
                            <div><Link to="/FAQ" style={{ color: "#707070" }}><div className="pt-2 pb-2">FAQ</div></Link></div>
                            <div><Link to="/Register" style={{ color: "#707070" }}><div className="pt-2 pb-2">Login/Register</div></Link></div>
            
            </div>
            </div>
        );
    }
}

export default Header1;