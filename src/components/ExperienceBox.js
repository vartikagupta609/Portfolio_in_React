import React from "react";

class ExperienceBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  submitlogin(e) {}
  render() {
    return (
      <div className="inner-container">
        <div className="header-login">Login</div>
        <div className="box-login">
          <div className="input-grp">
            {/* <label htmlFor="username">Company</label>
            <br /> */}
            <input
              type="text"
              name="companyname"
              className="login-input"
              placeholder="Company Name"
            />
          </div>

          <div className="input-grp">
            <table>
              <tr>
                <td>
                  <select>
                    <option>--experience type--</option>
                    <option>Full Time</option>
                    <option>Part Time</option>
                    <option>Internship</option>
                    <option>Certification</option>
                  </select>
                </td>
                <td>
                  <input className="login-input" placeholder="Title" />
                </td>
              </tr>
            </table>
          </div>
          <div className="input-grp">
            {/* <label htmlFor="password"></label>
            <br /> */}
            <input
              type="text"
              name="location"
              className="login-input"
              placeholder="Location"
            />
          </div>

          <button
            type="button"
            className="login-btn"
            onClick={this.submitlogin.bind(this)}
          >
            Login
          </button>
        </div>
      </div>
    );
  }
}

export default ExperienceBox;
