import React from "react";
import dog from "./tempdog.JPG";
import "../css/head.css";
import { NavLink } from "react-router-dom";

import BasePath from "../api/BasePath";
import {
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
} from "reactstrap";

class Header1 extends React.Component {
    state = {
        initialStates: false,
        username: ""
    };

    getCustomerInfo = async () => {
        var token = localStorage.getItem("token");

        const customerInfo = await BasePath.get(
            `/webresources/RetrieveUser/${token}`
        );

        if (
            this.state.initialStates === false &&
            customerInfo.data !== "Authentication error, bad token"
        ) {
            this.setState({
                initialStates: true,
                username: customerInfo.data.username
            });
        }
    };

    logOut = () => {
        localStorage.clear();
        this.setState({ initialStates: false, username: "" });
    };

    render() {
        this.getCustomerInfo();
        var username = this.state.username;

        if (username !== "") {
            return (
                <div>
                    <div className="d-flex justify-content-between">
                        <NavLink to="/">
                            <img
                                src={dog}
                                alt="dog"
                                height="30"
                                width="40"
                                className="align-self-end"
                            />
                        </NavLink>
                        <h2 className="title mr-3">K9 FUN FAMILY</h2>
                    </div>
                    {/* TODO: find a way to keep track of current page for highlighting the tab, maybe store in session? */}
                    <div
                        className="container-head d-flex justify-content-around header"
                        style={{ backgroundColor: "#ECEBE7" }}
                    >

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
                        <div className="dropDown">
                            <UncontrolledDropdown>
                                <DropdownToggle nav caret style={{ color: "#707070" }}>
                                    <div className="pt-3 pb-3">Account</div>
                                </DropdownToggle>
                                <DropdownMenu right>
                                    <DropdownItem>
                                        <NavLink to="/Profile" exact activeClassName="active" activeStyle={{
                                            color: "#FEF6F6"
                                        }} style={{ color: "#707070" }}>
                                            Profile
                    </NavLink>
                                    </DropdownItem>
                                    <DropdownItem>
                                        <NavLink
                                            to="/ViewAppointments"
                                            exact activeClassName="active" activeStyle={{
                                                color: "#FEF6F6"
                                            }} style={{ color: "#707070" }}
                                        >
                                            View Appointments
                    </NavLink>
                                    </DropdownItem>
                                    <DropdownItem divider />
                                    <DropdownItem>
                                        <NavLink
                                            onClick={this.logOut}
                                            to="/"
                                            exact activeClassName="active" activeStyle={{
                                                color: "#FEF6F6"
                                            }} style={{ color: "#707070" }}
                                        >
                                            Log Out
                    </NavLink>
                                    </DropdownItem>
                                </DropdownMenu>
                            </UncontrolledDropdown>
                        </div>
                    </div>
                </div>
            );
        } else {
            return (
                <div>
                    <div className="d-flex justify-content-between">
                        <NavLink to="/">
                            <img
                                src={dog}
                                alt="dog"
                                height="30"
                                width="40"
                                className="align-self-end"
                            />
                        </NavLink>
                        <h2 className="title mr-3">K9 FUN FAMILY</h2>
                    </div>
                    {/* TODO: find a way to keep track of current page for highlighting the tab, maybe store in session? */}
                    <div
                        className="container-head d-flex justify-content-around header"
                        style={{ backgroundColor: "#ECEBE7" }}
                    >

                        <NavLink to="/" className="pt-3 flex-grow-1 bg" exact activeClassName="active" activeStyle={{
                            color: "#FEF6F6"
                        }} style={{ color: "#707070" }}>
                            Home
              </NavLink>


                        <NavLink to="/Services" className="pt-3 flex-grow-1 bg" exact activeClassName="active" activeStyle={{
                            color: "#FEF6F6"
                        }} style={{ color: "#707070" }}>
                            Services
              </NavLink>

                        <NavLink to="/Gallery" className="pt-3 flex-grow-1 bg" exact activeClassName="active" activeStyle={{
                            color: "#FEF6F6"
                        }} style={{ color: "#707070" }}>
                            Gallery
              </NavLink>

                        <NavLink to="/Testimonials" className="pt-3 flex-grow-1 bg" exact activeClassName="active" activeStyle={{
                            color: "#FEF6F6"
                        }} style={{ color: "#707070" }}>
                            Testimonials
              </NavLink>

                        <NavLink to="/FAQ" className="pt-3 flex-grow-1 bg" exact activeClassName="active" activeStyle={{
                            color: "#FEF6F6"
                        }} style={{ color: "#707070" }}>
                            FAQ
              </NavLink>

                        <div style={{ color: "#707070" }} onClick={this.props.showLogin}>
                            Login/Register
                        </div>
                    </div>
                </div>
            );
        }
    }
}

export default Header1;
