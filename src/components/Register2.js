import React from 'react';
import Form from 'react-bootstrap';
import './reg.css';

class Register2 extends React.Component {
    state = { dogname: '', 
              breed: '', 
              dob: '',
              gender: '', 
              weight: '', 
              medication: '', 
              allergies: '',
              physlimit: '', 
              veterinarian: '' };

    onFormSubmit = (event) => {
        event.preventDefault();

        this.props.onSubmit(this.state.dogname, this.state.breed, this.state.dob, this.state.gender,
            this.state.weight, this.state.medication, this.state.allergies, this.state.physlimit, this.state.veterinarian);
    }



    render() {
        return (

            <div className="ui segment p-3 mb-2 " style={{backgroundColor: "#ECEBE7"}} >
                <form onSubmit={this.onFormSubmit} className="ui form" >
                    <div className="field d-flex flex-md-column" >
                        <label><h1><b>Add Dog</b></h1></label>

                        <label><h2>Step 2</h2></label>
                        <label>Name:</label>
                        <input className="field b-5"
                            type="text" 
                            placeholder="Enter dog's name"
                            value={this.state.dogname}
                            onChange={e =>
                                 this.setState({ dogname: e.target.value })
                            }                           
                        />
                        <br />
                        <label>Breed:</label>
                        <input
                            type="text" 
                            placeholder="Enter breed"
                            value={this.state.breed}
                            onChange={e =>
                                 this.setState({ breed: e.target.value })
                            } 
                        />
                        <br />
                        <label>Date of birth:</label>
                        <input
                            type="date" 
                            value={this.state.dob}
                            onChange={e =>
                                 this.setState({ dob: e.target.value })}
                            InputLabelProps={{
                              shrink: true,
                            }}
                        />
                        <br />
                        <label>Gender:</label>    

                                    <label>
                                        <input
                                        type="radio"
                                        name="gender"
                                        value="Male"
                                        checked={this.state.gender === "Male"}
                                        onChange={e =>
                                            this.setState({ gender: e.target.value }
                                            )}
                                        />
                                        <span>Male</span>
                                    </label>

                                    <label>
                                        <input
                                        type="radio"
                                        name="gender"
                                        value="Female"
                                        checked={this.state.gender === "Female"}
                                        onChange={e =>
                                            this.setState({ gender: e.target.value }
                                            )}
                                        />
                                        <span>Female</span>
                                    </label>

                        <br />
                        <label>Weight (Lb):</label>
                        <input 
                            type="text" 
                            placeholder="Enter dog's weight"
                            value={this.state.weight}
                            onChange={e =>
                                 this.setState({ weight: e.target.value })
                            } 
                        />
                        <br />

                        <label>
                            <input
                            type="checkbox"
                            value="Neutered"
                            checked={this.state.neutered}
                            onChange={e =>
                                this.setState({ neutered: e.target.value }
                                )}
                            />
                            <span>Neutered</span>
                        </label>

                        <label>
                            <input
                            type="checkbox"
                            value="Spayed"
                            checked={this.state.spayed}
                            onChange={e =>
                                this.setState({ spayed: e.target.value }
                                )}
                            />
                            <span>Spayed</span>
                        </label>
                        <label><h2>Care</h2></label>

                        <label>Medication:</label>
                        <input 
                            type="text" 
                            value={this.state.medication}
                            onChange={e =>
                                 this.setState({ medication: e.target.value })
                            } 
                        />
                        <br />
                        <label>Allergies:</label>
                        <input 
                            type="text"
                            value={this.state.allergies}
                            onChange={e =>
                                 this.setState({ allergies: e.target.value })
                            } 
                        />
                        
                        <label>Physical limitations or health problems:</label>
                        <textarea 
                        rows="5"
                            value={this.state.physlimit}
                            onChange={e =>
                                 this.setState({ physlimit: e.target.value })
                            } 
                        />
                        <br />
                        <label>Who is your veterinarian:</label>
                        <input 
        
                            type="text" 
                            value={this.state.veterinarian}
                            onChange={e =>
                                 this.setState({ veterinarian: e.target.value })
                            } 
                        />
                        <br />
                        <button className="btn " style={{fontWeight:"bold",backgroundColor: "#1D3461", color: "#ECEBE7", boxShadow: "0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)"}}>Upload Picture</button>
                        <br />


                    </div>
                    <button className="btn " style={{fontWeight:"bold",backgroundColor: "#1D3461", color: "#ECEBE7", boxShadow: "0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)"}}>Previous Step</button>{' '}
                    <button className="btn " style={{fontWeight:"bold",backgroundColor: "#1D3461", color: "#ECEBE7", boxShadow: "0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)"}}>Register</button>
                </form>
            </div>

        );
    }
}

export default Register2;