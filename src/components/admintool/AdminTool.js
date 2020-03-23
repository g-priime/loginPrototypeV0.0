import React from "react";
import Popup from "../PopUp";
import '../../css/admin.css';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import ViewCalendar from './ViewCalendar';

class AdminTool extends React.Component {

  render() {
    return (
      <div className="ui segment">
        <h1 style={{ color: "white" }}>K9 Fun Family Admin Tool</h1>
        <div className="ui segment">
          <div>
            <Link
              to="ViewCalendar"
              type="button"
              className="btn mb-3"
              style={{
                fontWeight: "bold",
                backgroundColor: "#1D3461",
                color: "#ECEBE7",
                boxShadow:
                  "0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)"
              }}>View Calendar
              </Link>
          </div>
          <div>
            <BrowserRouter>

              <div>
                <div className="mt-4 ml-5 mr-5">
                  <Route path="/ViewCalendar" exact component={ViewCalendar} />
                </div>

              </div>
            </BrowserRouter>
          </div>
        </div>
      </div>
    );
  }
}

export default AdminTool;