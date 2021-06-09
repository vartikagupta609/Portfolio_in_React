import React from "react";

class ProjectBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  submitProject(e) {}
  render() {
    return (
      <div className="inner-container">
        <div className="header-login">Project</div>
        <div className="box-login">
          <div className="input-grp">
            <input
              type="text"
              name="title"
              className="login-input"
              placeholder="Title Of Project"
            />
          </div>

          <div className="input-grp">
            <textarea
              type="text"
              name="description"
              className="login-input"
              placeholder="Description Of Project"
            />
          </div>

          <div className="input-grp">
            <input
              type="text"
              name="link"
              className="login-input"
              placeholder="Hosted Link"
            />
          </div>
          <div className="input-grp">
            <input
              type="text"
              name="link"
              className="login-input"
              placeholder="Code Link"
            />
          </div>

          <div className="input-grp">
            <table>
              <tr>
                <td>
                  <label>Start Date</label>
                </td>
                <td>
                  <input className="login-input" type="month" />
                </td>
              </tr>
            </table>
          </div>

          <div className="input-grp">
            <table>
              <tr>
                <td>
                  <label>End Date</label>
                </td>
                <td>
                  <input className="login-input" type="month" />
                </td>
              </tr>
            </table>
          </div>

          <button
            type="button"
            className="login-btn"
            onClick={this.submitProject.bind(this)}
          >
            Save and Continue
          </button>
        </div>
      </div>
    );
  }
}

export default ProjectBox;
