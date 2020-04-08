import React from "react";
import "../../css/admin.css";
import { BrowserRouter, Route, Link } from "react-router-dom";
import ViewCalendar from "./ViewCalendar";
import CreateUserMain from "./CreateUserMain";
import ManageUsersEditMain from "./ManageUsersEditMain";
import ManageTestimonials from "./ManageTestimonials";
import { Redirect } from "react-router-dom";
import ChangePassAdminMain from "./ChangePassAdminMain";

class AdminTool extends React.Component {
  state = {
    loggedOut: false,
  };

  render() {
    if (this.state.loggedOut == true) {
      return (
        <div style={{ marginTop: "10px" }}>
          <Redirect to="/" />
        </div>
      );
    } else {
      return (
        <div
          style={{ backgroundColor: "rgba(255,255,255,0)" }}
          className="ui segment admin-container"
        >
          <BrowserRouter>
            <br />
            <h1 style={{ color: "white" }}>K9 Fun Family Admin Tool</h1>
            <div style={{ backgroundColor: "rgba(255,255,255,0)" }}>
              <div className="admin-row">
                <div className="d-flex flex-column">
                  <Link
                    to="ViewCalendar"
                    type="button"
                    className="btn mb-3"
                    style={{
                      fontWeight: "bold",
                      backgroundColor: "#ECEBE7",
                      boxShadow:
                        "0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)",
                    }}
                  >
                    View Calendar
                  </Link>
                  <Link
                    to="CreateUser"
                    type="button"
                    className="btn mb-3"
                    style={{
                      fontWeight: "bold",
                      backgroundColor: "#ECEBE7",
                      boxShadow:
                        "0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)",
                    }}
                  >
                    Create user Account
                  </Link>
                  <Link
                    to="ManageUsers"
                    type="button"
                    className="btn mb-3"
                    style={{
                      fontWeight: "bold",
                      backgroundColor: "#ECEBE7",

                      boxShadow:
                        "0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)",
                    }}
                  >
                    Manage Users
                  </Link>
                  <Link
                    to="ManageTestimonials"
                    type="button"
                    className="btn mb-3"
                    style={{
                      fontWeight: "bold",
                      backgroundColor: "#ECEBE7",

                      boxShadow:
                        "0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)",
                    }}
                  >
                    Manage Testimonials
                  </Link>
                  <Link
                    to="ChangePassAdminMain"
                    type="button"
                    className="btn mb-3"
                    style={{
                      fontWeight: "bold",
                      backgroundColor: "#ECEBE7",

                      boxShadow:
                        "0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)",
                    }}
                  >
                    Change Password
                  </Link>
                </div>
                <div style={{ backgroundColor: "#ECEBE7" }} className="output">
                  <div>
                    <div className="mt-4 ml-5 mr-5">
                      <Route
                        path="/ViewCalendar"
                        exact
                        component={ViewCalendar}
                      />
                      <Route
                        path="/CreateUser"
                        exact
                        component={CreateUserMain}
                      />
                      <Route
                        path="/ManageUsers"
                        exact
                        component={ManageUsersEditMain}
                      />
                      <Route
                        path="/ManageTestimonials"
                        exact
                        component={ManageTestimonials}
                      />
                      <Route
                        path="/ChangePassAdminMain"
                        exact
                        component={ChangePassAdminMain}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </BrowserRouter>
        </div>
      );
    }
  }
}

export default AdminTool;
