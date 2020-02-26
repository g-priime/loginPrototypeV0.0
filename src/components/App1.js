import React from 'react';

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

//import EditCustomerMain from './editCustomer/EditCustomerMain';
import ChangePasswordMain from './changePassword/ChangePasswordMain';

class App1 extends React.Component {
    state = {
        show: false
    }

    toggleLogin = () => {
        this.setState({ show: true });
    };

    render() {
        return (
            <div>
                <BrowserRouter>
                    <div>
                        <Header1 showLogin={this.toggleLogin} />
                        <div className="mt-4 ml-5 mr-5">
                            <Route path="/" exact component={HomePage} />
                            <Route path="/Register" component={RegisterMain} />
                            <Route path="/Services" component={Services} />
                            <Route path="/Gallery" component={Gallery} />
                            <Route path="/Testimonials" component={Testimonials} />
                            <Route path="/FAQ" component={FAQ} />
                            <Route path="/ChangePass" component={ChangePasswordMain}/>
                            <Login
                                show={this.state.show}
                                onHide={() => this.setState({ show: false })}
                            />
                        </div>
                    </div>
                </BrowserRouter>
            </div>
        )
    }

}

export default App1;