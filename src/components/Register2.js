import React from 'react';
import './reg.css';
import './reg2.css';

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
                        <label><h1>Add Dog</h1></label>

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

                        <label>Is your dog neutered or spayed?:</label>    

                        <label>
                            <input
                            type="radio"
                            name="neuteredspayed"
                            value="yes"
                            checked={this.state.neuteredspayed === "yes"}
                            onChange={e =>
                                this.setState({ neuteredspayed: e.target.value }
                                )}
                            />
                            <span>Yes</span>
                        </label>

                        <label>
                            <input
                            type="radio"
                            name="neuteredspayed"
                            value="no"
                            checked={this.state.neuteredspayed === "no"}
                            onChange={e =>
                                this.setState({ neuteredspayed: e.target.value }
                                )}
                            />
                            <span>No</span>
                        </label>
                        <br />
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
                        <table>
                            <tr>
                                <th>Pet behavior Profile</th>
                                <th>Yes</th> 
                                <th>No</th>
                            </tr>
                            <tr>
                                <td>Is your dog comfortable with strangers?</td>
                                <td>                     <label>
                            <input
                            type="radio"
                            name="straingers"
                            value="yes"
                            checked={this.state.straingers === "yes"}
                            onChange={e =>
                                this.setState({ straingers: e.target.value }
                                )}
                            />
                        </label></td>
                                <td>                        <label>
                            <input
                            type="radio"
                            name="straingers"
                            value="no"
                            checked={this.state.straingers === "no"}
                            onChange={e =>
                                this.setState({ straingers: e.target.value }
                                )}
                            />
                        </label></td>
                            </tr>
                            <tr>
                                <td>Does your dog get along well with larger dogs?</td>
                                <td>                     <label>
                            <input
                            type="radio"
                            name="largerdogs"
                            value="yes"
                            checked={this.state.largerdogs === "yes"}
                            onChange={e =>
                                this.setState({ largerdogs: e.target.value }
                                )}
                            />
                        </label></td>
                                <td>                        <label>
                            <input
                            type="radio"
                            name="largerdogs"
                            value="no"
                            checked={this.state.largerdogs === "no"}
                            onChange={e =>
                                this.setState({ largerdogs: e.target.value }
                                )}
                            />
                        </label></td>
                            </tr>
                            <tr>
                                <td>Does your dog get along well with smaller dogs?</td>
                                <td>                     <label>
                            <input
                            type="radio"
                            name="smalldogs"
                            value="yes"
                            checked={this.state.smalldogs === "yes"}
                            onChange={e =>
                                this.setState({ smalldogs: e.target.value }
                                )}
                            />
                        </label></td>
                                <td>                        <label>
                            <input
                            type="radio"
                            name="smalldogs"
                            value="no"
                            checked={this.state.smalldogs === "no"}
                            onChange={e =>
                                this.setState({ smalldogs: e.target.value }
                                )}
                            />
                        </label></td>
                            </tr>
                            <tr>
                                <td>does your dog get along well with puppies?</td>
                                <td>                     <label>
                            <input
                            type="radio"
                            name="puppies"
                            value="yes"
                            checked={this.state.puppies === "yes"}
                            onChange={e =>
                                this.setState({ puppies: e.target.value }
                                )}
                            />
                        </label></td>
                                <td>                        <label>
                            <input
                            type="radio"
                            name="puppies"
                            value="no"
                            checked={this.state.puppies === "no"}
                            onChange={e =>
                                this.setState({ puppies: e.target.value }
                                )}
                            />
                        </label></td>
                            </tr>
                            </table>

                    </div>
                    <button className="btn " style={{fontWeight:"bold",backgroundColor: "#1D3461", color: "#ECEBE7", boxShadow: "0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)"}}>Previous Step</button>{' '}
                    <button className="btn " style={{fontWeight:"bold",backgroundColor: "#1D3461", color: "#ECEBE7", boxShadow: "0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)"}}>Register</button>
                </form>
            </div>

        );
    }
}

export default Register2;