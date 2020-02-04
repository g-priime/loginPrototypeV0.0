import React from 'react';
import { Field, Form, Formik } from 'formik';

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

            <div className="ui segment p-3 mb-2 bg-primary text-white" >
                <Formik >
                <Form onSubmit={this.onFormSubmit} className="ui form" >
                    <div className="field d-flex flex-md-column" >
                        <label><h1>Registration Page</h1></label>

                        <label><h2>Step 1</h2></label>
                        <label>Username:</label>
                        <Field className="field b-5"
                            type="text" 
                            placeholder="Enter username"
                            value={this.state.username}
                            onChange={e =>
                                 this.setState({ username: e.target.value })
                            }                           
                        />
                        <br />
                        <label>Password:</label>
                        <Field
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
                        <Field
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
                        <Field 
                            type="text" 
                            placeholder="Enter First Name"
                            value={this.state.fname}
                            onChange={e =>
                                 this.setState({ fname: e.target.value })
                            } 
                        />
                        <br />
                        <label>Last Name:</label>
                        <Field 
                            type="text" 
                            placeholder="Enter Last Name"
                            value={this.state.lname}
                            onChange={e =>
                                 this.setState({ lname: e.target.value })
                            } 
                        />
                        <br />
                        <label>Email:</label>
                        <Field 
                            type="text" 
                            placeholder="Enter Email"
                            value={this.state.email}
                            onChange={e =>
                                 this.setState({ email: e.target.value })
                            } 
                        />
                    </div>
                    <button className="btn btn-dark">Next Step</button>{' '}
                    <button className="btn btn-dark">Cancel</button>
                </Form>
                </Formik>
            </div>

        );
    }
}

export default Register;