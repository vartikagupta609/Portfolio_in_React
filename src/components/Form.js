import "../formstyle.css";
import PersonalDetailsBox from "./PersonalDetailsBox";
import ProjectBox from "./ProjectBox";
import EducationBox from "./EducationBox";
import ExperienceBox from "./ExperienceBox";
import React from "react";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isPersonalDetailOpen: true,
      isProjectOpen: false,
      isEducationOpen: false,
      isExperienceOpen: false
    };
  }

  showProjectBox() {
    this.setState({
      isProjectOpen: true,
      isPersonalDetailOpen: false,
      isEducationOpen: false,
      isExperienceOpen: false
    });
  }

  showPersonalDetailBox() {
    this.setState({
      isProjectOpen: false,
      isPersonalDetailOpen: true,
      isEducationOpen: false,
      isExperienceOpen: false
    });
  }
  showEducationBox() {
    this.setState({
      isProjectOpen: false,
      isPersonalDetailOpen: false,
      isEducationOpen: true,
      isExperienceOpen: false
    });
  }

  showExperienceBox() {
    this.setState({
      isProjectOpen: false,
      isPersonalDetailOpen: false,
      isEducationOpen: false,
      isExperienceOpen: true
    });
  }

  render() {
    return (
      <div className="login">
        <div className="box-controller">
          <div
            className={
              "controller" +
              (this.state.isPersonalDetailOpen ? " selected-controller" : "")
            }
            onClick={this.showPersonalDetailBox.bind(this)}
          >
            Personal Details
          </div>
          <div
            className={
              "controller" +
              (this.state.isEducationOpen ? " selected-controller" : "")
            }
            onClick={this.showEducationBox.bind(this)}
          >
            Education
          </div>
          <div
            className={
              "controller" +
              (this.state.isProjectOpen ? " selected-controller" : "")
            }
            onClick={this.showProjectBox.bind(this)}
          >
            Project
          </div>

          <div
            className={
              "controller" +
              (this.state.isExperienceOpen ? " selected-controller" : "")
            }
            onClick={this.showExperienceBox.bind(this)}
          >
            Experience
          </div>
        </div>
        <div className="box-container">
          {this.state.isPersonalDetailOpen && <PersonalDetailsBox />}
          {this.state.isProjectOpen && <ProjectBox />}
          {this.state.isEducationOpen && <EducationBox />}
          {this.state.isExperienceOpen && <ExperienceBox />}
        </div>
      </div>
    );
  }
}

// class PersonalDetailsBox extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {};
//   }
//   submitPersonalDetails(e) {}
//   render() {
//     return (
//       <div className="inner-container">
//         <div className="header-login">Personal Details</div>
//         <div className="box-login">
//           <div className="input-grp">
//             <label htmlFor="username">Name</label>
//             <input
//               type="text"
//               name="username"
//               className="login-input"
//               placeholder="Name"
//             />
//           </div>

//           <div className="input-grp">
//             <label htmlFor="date">Date of Birth</label>
//             <input type="date" name="dob" className="login-input" />
//           </div>

//           <div className="input-grp">
//             <label htmlFor="date">Email ID</label>
//             <input
//               type="email"
//               name="dob"
//               className="login-input"
//               placeholder="Email ID"
//             />
//           </div>

//           <div className="input-grp">
//             <label htmlFor="date">Phone No</label>
//             <input
//               type="number"
//               name="dob"
//               className="login-input"
//               placeholder="Phone No."
//             />
//           </div>

//           <div className="input-grp">
//             <label htmlFor="date">Bio</label>
//             <textarea
//               type="date"
//               name="dob"
//               className="login-input"
//               placeholder="About youeself"
//             />
//           </div>
//           <button
//             type="button"
//             className="login-btn"
//             onClick={this.submitPersonalDetails.bind(this)}
//           >
//             Login
//           </button>
//         </div>
//       </div>
//     );
//   }
// }

// class ProjectBox extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {};
//   }
//   submitProject(e) {}
//   render() {
//     return (
//       <div className="inner-container">
//         <div className="header-login">Project</div>
//         <div className="box-login">
//           <div className="input-grp">
//             <label htmlFor="username">Username</label>
//             <br />
//             <input
//               type="text"
//               name="username"
//               className="login-input"
//               placeholder="Username"
//             />
//           </div>

//           <div className="input-grp">
//             <label htmlFor="password">Passwor</label>
//             <br />
//             <input
//               type="password"
//               name="password"
//               className="login-input"
//               placeholder="Password"
//             />
//           </div>

//           <button
//             type="button"
//             className="login-btn"
//             onClick={this.submitProject.bind(this)}
//           >
//             Register
//           </button>
//         </div>
//       </div>
//     );
//   }
// }

// class EducationBox extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {};
//   }
//   submitEducation(e) {}
//   render() {
//     const per = {
//       width: "60px"
//     };

//     const gper = {
//       width: "80px"
//     };
//     return (
//       <div className="inner-container">
//         <div className="header-login">Education</div>
//         <div className="box-login">
//           <div className="input-grp">
//             <label htmlFor="highschool">10th</label>
//             <input
//               type="text"
//               name="highschool"
//               className="login-input"
//               placeholder="School Name"
//             />
//           </div>

//           <div className="input-grp">
//             <table>
//               <tr>
//                 <td>
//                   <select>
//                     <option>Board</option>
//                     <option>CBSE</option>
//                     <option>ICSE</option>
//                     <option>ISC</option>
//                     <option>others</option>
//                   </select>
//                 </td>
//                 <td>
//                   <input className="login-input" type="month" />
//                 </td>

//                 <td>
//                   <input
//                     style={per}
//                     className="login-input"
//                     placeholder="%/cgpa"
//                   />
//                 </td>
//               </tr>
//             </table>
//           </div>

//           <div className="input-grp">
//             <label htmlFor="inter">12th</label>
//             <input
//               type="text"
//               name="inter"
//               className="login-input"
//               placeholder="Schoolname"
//             />
//           </div>

//           <div className="input-grp">
//             <table>
//               <tr>
//                 <td>
//                   <select>
//                     <option>Board</option>
//                     <option>CBSE</option>
//                     <option>ICSE</option>
//                     <option>ISC</option>
//                     <option>others</option>
//                   </select>
//                 </td>
//                 <td>
//                   <input className="login-input" type="month" />
//                 </td>

//                 <td>
//                   <input
//                     style={per}
//                     className="login-input"
//                     placeholder="%/cgpa"
//                   />
//                 </td>
//               </tr>
//             </table>
//           </div>

//           <div className="input-grp">
//             <label htmlFor="graduation">Graduation</label>
//             <input
//               type="text"
//               name="graduation"
//               className="login-input"
//               placeholder="College Name"
//             />
//           </div>

//           <div className="input-grp">
//             <table>
//               <tr>
//                 <td>
//                   <input className="login-input" placeholder="course" />
//                 </td>
//                 {/* <td>
//                   <input className="login-input" type="month" />
//                 </td> */}

//                 <td>
//                   <input
//                     style={gper}
//                     className="login-input"
//                     placeholder="%/cgpa"
//                   />
//                 </td>
//               </tr>
//             </table>
//           </div>

//           <div className="input-grp">
//             <table>
//               <tr>
//                 <td>
//                   <input
//                     className="login-input"
//                     placeholder="Year Of Passing"
//                   />
//                 </td>

//                 {/* <td>
//                   <input
//                     style={per}
//                     className="login-input"
//                     placeholder="%/cgpa"
//                   />
//                 </td> */}
//               </tr>
//             </table>
//           </div>

//           <div className="input-grp">
//             <label htmlFor="post-graduation">Post Graduation</label>
//             <input
//               type="text"
//               name="post-graduation"
//               className="login-input"
//               placeholder="College Name"
//             />
//           </div>

//           <div className="input-grp">
//             <table>
//               <tr>
//                 <td>
//                   <input className="login-input" placeholder="course" />
//                 </td>
//                 <td>
//                   <input
//                     style={gper}
//                     className="login-input"
//                     placeholder="%/cgpa"
//                   />
//                 </td>
//               </tr>
//             </table>
//           </div>

//           <div className="input-grp">
//             <table>
//               <tr>
//                 <td>
//                   <input
//                     className="login-input"
//                     placeholder="Year Of Passing"
//                   />
//                 </td>
//               </tr>
//             </table>
//           </div>

//           <button
//             type="button"
//             className="login-btn"
//             onClick={this.submitEducation.bind(this)}
//           >
//             Education
//           </button>
//         </div>
//       </div>
//     );
//   }
// }

export default Form;
