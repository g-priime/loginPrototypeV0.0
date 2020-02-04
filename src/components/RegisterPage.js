import React from 'react';
//import ReactDOM from 'react-dom';
import './reg.css';

class Register extends React.Component {
    state = { username: '', 
              password: '', 
              confirmPassword: '',
              fname: '', 
              lname: '', 
              email: '' };

    onFormSubmit = (event) => {
        event.preventDefault();

        this.props.onSubmit(this.state.username, this.state.password, this.state.confirmPassword, this.state.fname,
            this.state.lname, this.state.email);
    }



    render() {
        return (

            <div className="ui segment " style={{backgroundColor: "#6298C8"}}>
                <form onSubmit={this.onFormSubmit} className="ui form" style={{backgroundColor: "#ECEBE7 "}}>
                    <div className="field d-flex flex-md-column ml-3 mr-3 mb-3 mt-3" >
                        <label><h1>Registration Page</h1></label>

                        <label><h2>Step 1</h2></label>
                        <label>Username:</label>
                        <input className="field b-5"
                            type="text" 
                            placeholder="Enter username"
                            value={this.state.username}
                            onChange={e =>
                                 this.setState({ username: e.target.value })
                            }                           
                        />
                        <br />
                        <label>Password:</label>
                        <input
                            type="password" 
                            name="password"
                            placeholder="Enter password"
                            value={this.state.password}
                            onChange={e =>
                                 this.setState({ password: e.target.value })
                            } 
                        />
                        <br />
                        <label>Confirm Password:</label>
                        <input
                            type="password" 
                            name="confirmPassword"
                            placeholder="Confirm password"
                            value={this.state.confirmPassword}
                            onChange={e =>
                                 this.setState({ confirmPassword: e.target.value })
                            } //how to confirm it? 
                        />
                        <br />
                        <label>First Name:</label>
                        <input 
                            type="text" 
                            placeholder="Enter First Name"
                            value={this.state.fname}
                            onChange={e =>
                                 this.setState({ fname: e.target.value })
                            } 
                        />
                        <br />
                        <label>Last Name:</label>
                        <input 
                            type="text" 
                            placeholder="Enter Last Name"
                            value={this.state.lname}
                            onChange={e =>
                                 this.setState({ lname: e.target.value })
                            } 
                        />
                        <br />
                        <label>Email:</label>
                        <input 
                            type="text" 
                            placeholder="Enter Email"
                            value={this.state.email}
                            onChange={e =>
                                 this.setState({ email: e.target.value })
                            } 
                        />
                    </div>
                    <div className="d-flex justify-content-between">
                    <button className="btn  " style={{fontWeight:"bold",backgroundColor: "#1D3461", color: "#ECEBE7", boxShadow: "0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)"}}>Back to Home Page</button>
                    <button className="btn  " style={{fontWeight:"bold",backgroundColor: "#1D3461", color: "#ECEBE7", boxShadow: "0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)"}}>Next Step</button>
                    </div>
                </form>
            </div>

        );
    }
}

export default Register;