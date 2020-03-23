import React from "react";
import Popup from "../PopUp";
import '../../css/admin.css';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import ViewCalendar from './ViewCalendar';
import CreateUser from './CreateUser';
import ManageUsers from './ManageUsers';
import ManagePhotos from './ManagePhotos';
import ManageTestimonials from './ManageTestimonials';
import Reports from './Reports';

class AdminTool extends React.Component {

  render() {
    return (
      <div style={{ backgroundColor: "rgba(255,255,255,0)" }} className="ui segment admin-container">
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
                    "0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)"
                }}>View Calendar
              </Link>
              <Link
                to="CreateUser"
                type="button"
                className="btn mb-3"
                style={{
                  fontWeight: "bold",
                  backgroundColor: "#ECEBE7",
                  boxShadow:
                    "0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)"
                }}>Create user Account
              </Link>
              <Link
                to="ManageUsers"
                type="button"
                className="btn mb-3"
                style={{
                  fontWeight: "bold",
                  backgroundColor: "#ECEBE7",
                 
                  boxShadow:
                    "0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)"
                }}>Manage Users
              </Link>
              <Link
                to="ManagePhotos"
                type="button"
                className="btn mb-3"
                style={{
                  fontWeight: "bold",
                  backgroundColor: "#ECEBE7",
                  
                  boxShadow:
                    "0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)"
                }}>Manage Photos
              </Link>
              <Link
                to="ManageTestimonials"
                type="button"
                className="btn mb-3"
                style={{
                  fontWeight: "bold",
                  backgroundColor: "#ECEBE7",
                
                  boxShadow:
                    "0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)"
                }}>Manage Testimonials
              </Link>
              <Link
                to="Reports"
                type="button"
                className="btn mb-3"
                style={{
                  fontWeight: "bold",
                  backgroundColor: "#ECEBE7",
                  
                  boxShadow:
                    "0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)"
                }}>Reports
              </Link>
              <Link
                to="ManageTestimonials"
                type="button"
                className="btn mb-3"
                style={{
                  fontWeight: "bold",
                  backgroundColor: "#ECEBE7",
                  boxShadow:
                    "0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)"
                }}>Log Out
              </Link>
            </div>
            <div>
              <BrowserRouter>

                <div>
                  <div className="mt-4 ml-5 mr-5">
                    <Route path="/ViewCalendar" exact component={ViewCalendar} />
                    <Route path="/CreateUser" exact component={CreateUser} />
                    <Route path="/ManageUsers" exact component={ManageUsers} />
                    <Route path="/ManagePhotos" exact component={ManagePhotos} />
                    <Route path="/ManageTestimonials" exact component={ManageTestimonials} />
                    <Route path="/Reports" exact component={Reports} />
                  </div>

                </div>
              </BrowserRouter>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AdminTool;