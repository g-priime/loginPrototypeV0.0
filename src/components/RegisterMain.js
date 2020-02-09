
import React from 'react';

import BasePath from '../api/BasePath';
import RegisterPage from './RegisterPage';
import Register2 from './Register2';
import HomePage from './HomePage';
import Header from './Header';
import Register1 from './Register1';



class RegisterMain extends React.Component {
    state = { images: [], fieldName: [] };

    onSearchSubmit1 = async (username, password, confirmPassword, fname, lname, email) => {
        this.setState({ fieldName: [username, password, confirmPassword, fname, lname, email] })

        const response = await BasePath.put('/webresources/register', 
        { username , password , confirmPassword, fname , lname , email });

        console.log(response.data);
        this.setState({ images: response.data});
    }

    onSearchSubmit2 = async () => {

        var username = this.state.fieldName[0];
        var password = this.state.fieldName[1];
        var confirmPassword = this.state.fieldName[2];
        var fname = this.state.fieldName[3];
        var lname = this.state.fieldName[4];
        var email = this.state.fieldName[5];

        const response = await BasePath.put('/webresources/register', 
        { username , password , confirmPassword, fname , lname , email });

        console.log(response.data);
        this.setState({ images: response.data});
    }

    render() {
        var isValid = this.state.images;

        if(isValid !== 'account registered'){
            return (
                <div className="ui container" style={{ marginTop: '10px'}}>
                    <Register1 onSubmit={this.onSearchSubmit1} />
                    <div>{this.state.images}</div>               
                </div>
            );    
        } 
        else {
            return (
                <div className="ui container">
                    <Register2
                    onSubmit={this.onSearchSubmit2} />
                    <div>{this.state.images}</div>
                </div>
            );
        }
    }
}

export default RegisterMain;