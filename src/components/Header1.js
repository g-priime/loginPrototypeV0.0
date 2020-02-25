import React from 'react';
import dog from "./tempdog.JPG";
import '../css/head.css';
import { Link } from 'react-router-dom';

class Header1 extends React.Component {

    render() {
        return (
            <div>
            <div className="d-flex justify-content-between">
                <Link to="/">
                <img src={dog} alt="dog" height="30" width="50" className="align-self-end"/>
                </Link>
                <h2 className="title mr-3">K9 FUN FAMILY</h2>
            </div>
            <div className="container-head d-flex align-items-center d-flex justify-content-around header" style={{ backgroundColor: "#ECEBE7" }}>
                            <div><Link to="/" style={{ color: "#707070" }} ><div className="pt-3 pb-3">Home</div></Link></div>
                            <div><Link to="/Services" style={{ color: "#707070" }}><div className="pt-3 pb-3">Services</div></Link></div>
                            <div><Link to="/Gallery" style={{ color: "#707070" }}><div className="pt-3 pb-3">Gallery</div></Link></div>
                            <div><Link to="/Testimonials" style={{ color: "#707070" }}><div className="pt-3 pb-3">Testimonials</div></Link></div>
                            <div><Link to="/FAQ" style={{ color: "#707070" }}><div className="pt-3 pb-3">FAQ</div></Link></div>
                            <div style={{ color: "#707070" }} onClick={this.props.showLogin}><div className="pt-3 pb-3">Login/Register</div></div>
            
            </div>
            </div>
        );
    }
}

export default Header1;