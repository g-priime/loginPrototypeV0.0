import React from 'react';

//import Button from 'react-bootstrap';

class SearchBar extends React.Component {
    state = { term: '', password: '' };

    onFormSubmit = (event) => {
        event.preventDefault();

        this.props.onSubmit(this.state.term, this.state.password);
        //this.props.onSubmit(this.state.password);
    }

    render() {
        return (
            <div className="ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label>Login Page</label>
                        <input 
                            type="text" 
                            value={this.state.term}
                            onChange={e =>
                                 this.setState({ term: e.target.value })
                            } 
                        />
                        <input 
                            type="text" 
                            value={this.state.password}
                            onChange={e =>
                                 this.setState({ password: e.target.value })
                            } 
                        />
                    </div>
                    <button className="btn btn-primary">Login</button>
                </form>
            </div>
        );
    }
}

export default SearchBar;