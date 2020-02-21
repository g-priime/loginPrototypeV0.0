import React from 'react';

import HomePage from './HomePage';
import RegisterMain from './register/RegisterMain';
//import Gallery from './Gallery';
import FAQ from './FAQ';
import Testimonials from './Testimonials';
//import Services from './Services';
import '../css/main.css';

import { BrowserRouter, Route } from 'react-router-dom';
import Header1 from './Header1';

import EditCustomerMain from './editCustomer/EditCustomerMain';
import ChangePasswordMain from './changePassword/ChangePasswordMain';

class App1 extends React.Component {

    render(){
        return(
            <div>
                <BrowserRouter>
                <div>
                    <Header1 />
                    <div className="mt-4 ml-5 mr-5">
                    <Route path="/" exact 
                    component={HomePage} />
                    <Route path="/Register" component={RegisterMain} />
                    <Route path="/Services" component={EditCustomerMain} />
                    <Route path="/Gallery" component={ChangePasswordMain} />
                    <Route path="/Testimonials" component={Testimonials} />
                    <Route path="/FAQ" component={FAQ} />
                    </div>
                </div>
                </BrowserRouter>
            </div>
        )
    }
    
}

export default App1;