
import React from 'react';

import BasePath from '../api/BasePath';
import RegisterPage from './RegisterPage';
import HomePage from './HomePage';
import Header from './Header';
import RegisterMain from './RegisterMain';
import './main.css';

import { BrowserRouter, Route, Link } from 'react-router-dom';

class App extends React.Component {

    CURRENT_PAGE = {
        'home': <HomePage/>,
        'register': <RegisterMain onChangePage={this.onChangePage}/>
    }

    constructor(props) {
        super(props);
        this.state = {
            page: this.CURRENT_PAGE['home']
        }
    }

    onChangePage = (page) => {
        this.setState({
            page: this.CURRENT_PAGE[page]
        })
    }

    onSearchSubmit = async (username, password, confirmPassword, fname, lname, email) => {
        const response = await BasePath.put('/webresources/register', 
        { username , password , confirmPassword, fname , lname , email });
    }

    render() {
            return (
                <div className="ui container" style={{ marginTop: '10px'}}>
                    <Header onChangePage={this.onChangePage}></Header>
                    <RegisterMain onChangePage={this.onChangePage}/>
                    {this.state.page}                 
                </div>
            );    
    }
}

export default App;