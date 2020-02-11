import React from 'react';

import BasePath from '../api/BasePath';
import RegisterPage from './RegisterPage';
import HomePage from './HomePage';
import Header from './Header';
import RegisterMain from './RegisterMain';
import './main.css';

import { BrowserRouter, Route, Link } from 'react-router-dom';
import Header1 from './Header1';

class App1 extends React.Component {

    render(){
        return(
            <div>
                <BrowserRouter>
                <div>
                    <Header1 />
                    <Route path="/" exact 
                    component={HomePage} />
                    <Route path="/Register" component={RegisterMain} />
                </div>
                </BrowserRouter>
            </div>
        )
    }
    
}

export default App1;