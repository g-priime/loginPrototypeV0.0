//import 'bootstrap/dist/css/bootstrap.min.css';

import React from 'react';
import {BrowserRouter, Route } from 'react-router-dom';

import unsplash from '../api/unsplash';
//import ImageList from './ImageList';
import PageOne from './PageOne';


const PageTwo = () => {
    return <div>PageTwo</div>;
};

class App extends React.Component {
    //state = { images: [] };
    state = { images: [] };

    onSearchSubmit = async (term, password) => {
        const response = await unsplash.put('/webresources/generic', { term , password });
        //const response = await unsplash.get('/webresources/generic_1');
        console.log(response.data);
        //const response = 'goodbye';
        this.setState({ images: response.data});
    }

    render() {
        return (
            <div>
                <BrowserRouter>
                    <div>
                        <Route path="/SearchBar" exact component={PageOne} />
                        <Route path="/pageTwo" component={PageTwo} />
                    </div>
                </BrowserRouter>
            </div>
            /*
            <div className="ui container" style={{ marginTop: '10px'}}>
                <SearchBar onSubmit={this.onSearchSubmit} />
                <div>{this.state.images}</div>
                
            </div>*/
        );
    }
}

export default App;