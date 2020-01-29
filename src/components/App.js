
import React from 'react';

import BasePath from '../api/BasePath';
import SearchBar from './SearchBar';
import HomePage from './HomePage';

class App extends React.Component {
    state = { images: [] };

    onSearchSubmit = async (username, password) => {
        const response = await BasePath.put('/webresources/generic', { username , password });

        console.log(response.data);
        this.setState({ images: response.data});
    }

    render() {
        var isValid = this.state.images;

        if(isValid !== 'valid'){
            return (
                <div className="ui container" style={{ marginTop: '10px'}}>
                    <SearchBar onSubmit={this.onSearchSubmit} />
                    <div>{this.state.images}</div>                  
                </div>
            );    
        } 
        else {
            return (
                <div>
                    <HomePage />
                </div>
            );
        }
    }
}

export default App;