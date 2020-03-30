import React from "react";
import PopUpConfirm from "../PopUpConfirm";
import BasePath from "../../api/BasePath";

class ManageUsers extends React.Component {
  state = {
    userList: [],
    user: {}
  };

  UNSAFE_componentWillMount() {
    var token = localStorage.getItem("token");
    BasePath.get(`/webresources/RetrieveUser/${token}`)
      .then(result => {
        this.setState({ user: result.data });
        this.setState({ address: this.state.user.address });
      })
      .catch(err => {
        console.log(err);
      });
    var token = localStorage.getItem("token");
    BasePath.get(`/webresources/RetrieveDogs/${token}`)
      .then(result => {
        this.setState({ dogList: result.data });
      })
      .catch(err => {
        console.log(err);
      });

    if (
      typeof this.props.location.state == "undefined" ||
      this.props.location.state === null
    ) {
      this.setState({ message: "" });
    } else {
      this.setState({ message: this.props.location.state.message });
      this.setState({ cn: "popup3" });
      this.togglePopup();
    }
  }

  updateList = () => {
    var token = localStorage.getItem("token");
    BasePath.get(`/webresources/RetrieveDogs/${token}`).then(result => {
      this.setState({ dogList: result.data });
    });
  };

  deleteDog = () => {
    var token = localStorage.getItem("token");
    BasePath.put("/webresources/deleteDog", {
      token: token,
      petID: this.props.chosenDog.idNumber
    }).then(result => {
      this.props.updateList();
    });
  };

  render() {
    return (
      <div>
        <h1 style={{ color: "#212529" }}>Manage users</h1>
        <div className="row">
          <div className="col-sm">
            <div
              className="ui segment p-3 mb-2 "
              style={{ backgroundColor: "#ECEBE7" }}
            >
              <div>
                <div>
                  <h3>User List</h3>
                </div>
                {this.state.userList.map(user => (
                  <li
                    key={user.username}
                    chosenUsr={user}
                    updateList={this.updateList}
                  />
                ))}
              </div>
            </div>
          </div>
          <div className="col-sm">
            <div
              className="ui segment p-3 mb-2 "
              style={{ backgroundColor: "#ECEBE7" }}
            >
              <div>
                <h3>Edit user</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ManageUsers;
