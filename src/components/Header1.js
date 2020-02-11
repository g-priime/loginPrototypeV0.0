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
                            <div><Link to="/" style={{ color: "black" }} ></Link>Home</div>
                            <div><Link to="/Services" style={{ color: "black" }}>Services</Link></div>
                            <div><Link to="/Gallery" style={{ color: "black" }}>Gallery</Link></div>
                            <div><Link to="/Testimonials" style={{ color: "black" }}>Testimonials</Link></div>
                            <div><Link to="/FAQ" style={{ color: "black" }}>FAQ</Link></div>
                            <div><Link to="/Register" style={{ color: "black" }}>Login/Register</Link></div>
            
            </div>
            </div>
        );
    }
}

export default Header1;