import React from 'react';
import UserAccount from './UserAccount';
import HomePage from './HomePage';
import RegisterMain from './register/RegisterMain';
import Gallery from './Gallery';
import FAQ from './FAQ';
import Testimonials from './Testimonials';
import Services from './Services';
import '../css/main.css';

import { BrowserRouter, Route } from 'react-router-dom';
import Header1 from './Header1';
import AddDog from './AddDog';
import EditCustomerMain from './editCustomer/EditCustomerMain';
import EditCustomer1 from './editCustomer/EditCustomerMain';
//import EditCustomerMain from './editCustomer/EditCustomerMain';
//import ChangePasswordMain from './changePassword/ChangePasswordMain';

class App1 extends React.Component {

    render(){
        return(
            <div>
                <BrowserRouter>
                <div>
                    <Header1 />
                    <div className="mt-4 ml-5 mr-5">
                    <Route path="/" exact 
                    component={AddDog} />


                    <Route path="/Register" component={RegisterMain} />
                    <Route path="/Services" component={Services} />
                    <Route path="/Gallery" component={Gallery} />
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