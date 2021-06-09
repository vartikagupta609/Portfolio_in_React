import React from "react";

class PersonalDetailsBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  submitPersonalDetails(e) {}
  render() {
    return (
      <div className="inner-container">
        <div className="header-login">Personal Details</div>
        <div className="box-login">
          <div className="input-grp">
            <label htmlFor="username">Name</label>
            <input
              type="text"
              name="username"
              className="login-input"
              placeholder="Name"
            />
          </div>

          <div className="input-grp">
            <label htmlFor="date">Date of Birth</label>
            <input type="date" name="dob" className="login-input" />
          </div>

          <div className="input-grp">
            <label htmlFor="date">Email ID</label>
            <input
              type="email"
              name="dob"
              className="login-input"
              placeholder="Email ID"
            />
          </div>

          <div className="input-grp">
            <label htmlFor="date">Phone No</label>
            <input
              type="number"
              name="dob"
              className="login-input"
              placeholder="Phone No."
            />
          </div>

          <div className="input-grp">
            <label htmlFor="date">Bio</label>
            <textarea
              type="date"
              name="dob"
              className="login-input"
              placeholder="About youeself"
            />
          </div>
          <button
            type="button"
            className="login-btn"
            onClick={this.submitPersonalDetails.bind(this)}
          >
            Save and Continue
          </button>
        </div>
      </div>
    );
  }
}

export default PersonalDetailsBox;
