//import 'bootstrap/dist/css/bootstrap.min.css';

import React from 'react';

import unsplash from '../api/unsplash';
import SearchBar from './SearchBar';
//import ImageList from './ImageList';
import HomePage from './HomePage';

class PageOne extends React.Component {
    //state = { images: [] };
    state = { images: '' };

    onSearchSubmit = async (term, password) => {
        const response = await unsplash.put('/webresources/generic', { term , password });
        //const response = await unsplash.get('/webresources/generic_1');
        console.log(response.data);
        //const response = 'goodbye';
        this.setState({ images: response.data});
    }

    render() {
        var isValid = this.state.images;

        if(isValid !== 'valid'){
            return (
            
            
                <div className="ui container" style={{ marginTop: '10px'}}>
                    <SearchBar onSubmit={this.onSearchSubmit} />
                    <div>{this.state.images}</div>
                    <div>
                    
                </div>
                </div>
            );    
        } else {
            return (
                <div>
                    <HomePage />
                </div>
            );
        }
        
    }
}

export default PageOne;