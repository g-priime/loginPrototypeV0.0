import React from 'react';
import dog from "./tempdog.JPG";
import '../css/head.css';
import { Link, NavLink } from 'react-router-dom';

class Header1 extends React.Component {

    render() {
        return (
            <div>
            <div className="d-flex justify-content-between">
                <Link to="/">
                <img src={dog} alt="dog" height="30" width="40" className="align-self-end"/>
                </Link>
                <h2 className="title mr-3">K9 FUN FAMILY</h2>
            </div>
            <div className="container-head d-flex justify-content-around header">
            
            <NavLink className="pt-3 flex-grow-1 bg" exact activeClassName="active" activeStyle={{
                        color: "#FEF6F6"
                    }} to="/" style={{ color: "#707070" }} >Home</NavLink>
            <NavLink className="pt-3 flex-grow-1 bg" exact activeClassName="active" activeStyle={{
                        color: "#FEF6F6"
                    }} to="/Services" style={{ color: "#707070" }} >Services</NavLink>
                    <NavLink className="pt-3 flex-grow-1 bg" exact activeClassName="active" activeStyle={{
                        color: "#FEF6F6"
                    }} to="/Gallery" style={{ color: "#707070" }} >Gallery</NavLink>
                    <NavLink className="pt-3 flex-grow-1 bg" exact activeClassName="active" activeStyle={{
                        color: "#FEF6F6"
                    }} to="/Testimonials" style={{ color: "#707070" }} >Testimonials</NavLink>
                    <NavLink className="pt-3 flex-grow-1 bg" exact activeClassName="active" activeStyle={{
                        color: "#FEF6F6"
                    }} to="/FAQ" style={{ color: "#707070" }} >FAQ</NavLink>
                    <div className="pt-3 pb-3 flex-grow-1 bg" style={{ color: "#707070" }} onClick={this.props.showLogin}>Login/Register</div>

            </div>
            </div>
        );
    }
}

export default Header1;