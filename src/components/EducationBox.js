import React from "react";

class EducationBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  submitEducation(e) {}
  render() {
    const per = {
      width: "60px"
    };

    const gper = {
      width: "80px"
    };
    return (
      <div className="inner-container">
        <div className="header-login">Education</div>
        <div className="box-login">
          <div className="input-grp">
            <label htmlFor="highschool">10th</label>
            <input
              type="text"
              name="highschool"
              className="login-input"
              placeholder="School Name"
            />
          </div>

          <div className="input-grp">
            <table>
              <tr>
                <td>
                  <select>
                    <option>Board</option>
                    <option>CBSE</option>
                    <option>ICSE</option>
                    <option>ISC</option>
                    <option>others</option>
                  </select>
                </td>
                <td>
                  <input className="login-input" type="month" />
                </td>

                <td>
                  <input
                    style={per}
                    className="login-input"
                    placeholder="%/cgpa"
                  />
                </td>
              </tr>
            </table>
          </div>

          <div className="input-grp">
            <label htmlFor="inter">12th</label>
            <input
              type="text"
              name="inter"
              className="login-input"
              placeholder="Schoolname"
            />
          </div>

          <div className="input-grp">
            <table>
              <tr>
                <td>
                  <select>
                    <option>Board</option>
                    <option>CBSE</option>
                    <option>ICSE</option>
                    <option>ISC</option>
                    <option>others</option>
                  </select>
                </td>
                <td>
                  <input className="login-input" type="month" />
                </td>

                <td>
                  <input
                    style={per}
                    className="login-input"
                    placeholder="%/cgpa"
                  />
                </td>
              </tr>
            </table>
          </div>

          <div className="input-grp">
            <label htmlFor="graduation">Graduation</label>
            <input
              type="text"
              name="graduation"
              className="login-input"
              placeholder="College Name"
            />
          </div>

          <div className="input-grp">
            <table>
              <tr>
                <td>
                  <input className="login-input" placeholder="course" />
                </td>
                {/* <td>
                  <input className="login-input" type="month" />
                </td> */}

                <td>
                  <input
                    style={gper}
                    className="login-input"
                    placeholder="%/cgpa"
                  />
                </td>
              </tr>
            </table>
          </div>

          <div className="input-grp">
            <table>
              <tr>
                <td>
                  <input
                    className="login-input"
                    placeholder="Year Of Passing"
                  />
                </td>

                {/* <td>
                  <input
                    style={per}
                    className="login-input"
                    placeholder="%/cgpa"
                  />
                </td> */}
              </tr>
            </table>
          </div>

          <div className="input-grp">
            <label htmlFor="post-graduation">Post Graduation</label>
            <input
              type="text"
              name="post-graduation"
              className="login-input"
              placeholder="College Name"
            />
          </div>

          <div className="input-grp">
            <table>
              <tr>
                <td>
                  <input className="login-input" placeholder="course" />
                </td>
                <td>
                  <input
                    style={gper}
                    className="login-input"
                    placeholder="%/cgpa"
                  />
                </td>
              </tr>
            </table>
          </div>

          <div className="input-grp">
            <table>
              <tr>
                <td>
                  <input
                    className="login-input"
                    placeholder="Year Of Passing"
                  />
                </td>
              </tr>
            </table>
          </div>

          <button
            type="button"
            className="login-btn"
            onClick={this.submitEducation.bind(this)}
          >
            Save and Continue
          </button>
        </div>
      </div>
    );
  }
}

export default EducationBox;
