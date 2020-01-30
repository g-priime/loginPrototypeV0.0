import React from 'react';

class SearchBar extends React.Component {
    state = { username: '', password: '', fname: '', lname: '', email: '' };

    onFormSubmit = (event) => {
        event.preventDefault();

        this.props.onSubmit(this.state.username, this.state.password, this.state.fname,
            this.state.lname, this.state.email);
    }

    render() {
        return (
            <div className="ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label>Registration Page</label>
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
                        <input 
                            type="text" 
                            value={this.state.fname}
                            onChange={e =>
                                 this.setState({ fname: e.target.value })
                            } 
                        />
                        <input 
                            type="text" 
                            value={this.state.lname}
                            onChange={e =>
                                 this.setState({ lname: e.target.value })
                            } 
                        />
                        <input 
                            type="text" 
                            value={this.state.email}
                            onChange={e =>
                                 this.setState({ email: e.target.value })
                            } 
                        />
                    </div>
                    <button className="btn btn-primary">Register</button>
                </form>
            </div>
        );
    }
}

export default SearchBar;