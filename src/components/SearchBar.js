import React from 'react';

class SearchBar extends React.Component {
    state = { username: '', password: '' };

    onFormSubmit = (event) => {
        event.preventDefault();

        this.props.onSubmit(this.state.username, this.state.password);
    }

    render() {
        return (
            <div className="ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label>Login Page</label>
                        <input 
                            type="text" 
                            value={this.state.username}
                            onChange={e =>
                                 this.setState({ username: e.target.value })
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