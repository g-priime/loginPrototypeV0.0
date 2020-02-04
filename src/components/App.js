
import React from 'react';

import BasePath from '../api/BasePath';
import RegisterPage from './RegisterPage';
import Register2 from './Register2';
import HomePage from './HomePage';

class App extends React.Component {
    state = { images: [] };

    onSearchSubmit = async (username, password, confirmPassword, fname, lname, email) => {
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
                    <RegisterPage onSubmit={this.onSearchSubmit} />
                    <div>{this.state.images}</div>                  
                </div>
            );    
        } 
        else {
            return (
                <div>
                    <Register2 />
                </div>
            );
        }
    }
}

export default App;