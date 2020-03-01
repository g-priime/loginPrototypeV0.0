import React from 'react';
import UserAccount from './UserAccount';
import HomePage from './HomePage';
import RegisterMain from './register/RegisterMain';
import Gallery from './Gallery';
import FAQ from './FAQ';
import Testimonials from './Testimonials';
import Services from './Services';
import Login from './login/Login'
import '../css/main.css';

import { BrowserRouter, Route } from 'react-router-dom';
import Header1 from './Header1';

import EditCustomerMain from './editCustomer/EditCustomerMain';
import EditCustomer1 from './editCustomer/EditCustomerMain';
import AddDogMain from './addDog/AddDogMain';
import AddDog1 from './addDog/AddDog1';
import AddDog2 from './addDog/AddDog2';

import ChangePasswordMain from './changePassword/ChangePasswordMain';

class App1 extends React.Component {

    state = {
        show: false,
        errMsg: ""
    }

    toggleLogin = () => {
        this.setState({ show: true });
    };

    onHide = () => {
        this.setState({ show: false });
        this.setState({ errMsg: ""});
    }

    changeErr = (msg) => {
        this.setState({ errMsg: msg});
    }

    render() {
        return (
            <div>
                <BrowserRouter>

                    <div>
                        <Header1 showLogin={this.toggleLogin} />
                        <div className="mt-4 ml-5 mr-5">
                            <Route path="/" exact component={HomePage} />
                            <Route path="/Register" component={RegisterMain} />
                            <Route path="/Services" component={EditCustomerMain} />
                            <Route path="/Gallery" component={ChangePasswordMain} />
                            <Route path="/Testimonials" component={Testimonials} />
                            <Route path="/FAQ" component={FAQ} />
                            <Route path="/ChangePass" component={ChangePasswordMain}/>
                            <Login
                                show={this.state.show}
                                onHide={this.onHide}
                                errMsg={this.state.errMsg}
                                changeErr={this.changeErr}
                            />
                        </div>

                    </div>
                </BrowserRouter>
            </div>
        )
    }

}

export default App1;