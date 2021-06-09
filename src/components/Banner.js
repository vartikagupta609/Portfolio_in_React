import React from "react";
import "../styles.css";
import {
  FaFacebookF,
  FaTwitter,
  FaGithub,
  FaLinkedin,
  FaInstagram
} from "react-icons/fa";
import { init } from "ityped";
import { useEffect, useRef } from "react";

const Banner = () => {
  const textRef = useRef();
  useEffect(() => {
    init(textRef.current, {
      showCursor: false,
      strings: ["Full Stack Web Developer", "Software Engineer"]
    });
  }, []);
  return (
    <header className="header">
      <div className="container">
        <div className="row">
          <div className="col-6">
            <div className="header-content">
              <div className="header-section">
                <ul className="header-ul">
                  <li>
                    <FaFacebookF className="headerIcon" />
                  </li>
                  <li>
                    <FaTwitter className="headerIcon" />
                  </li>
                  <li>
                    <FaGithub className="headerIcon" />
                  </li>
                  <li>
                    <FaLinkedin className="headerIcon" />
                  </li>
                  <li>
                    <FaInstagram className="headerIcon" />
                  </li>
                </ul>
                <br />
                <h1>I am Vartika Gupta</h1>
                <p ref={textRef}></p>
                <div className="header-buttons">
                  <a href="true" className="btn">
                    My Resume
                  </a>
                  &nbsp;&nbsp;&nbsp;
                  {/* <a href="" className="btn btn-smart">
                    <FaPlay className="play" /> 
                  </a> */}
                </div>
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="banner-img">
              <img
                alt="profile-pic"
                //src="https://img.freepik.com/free-photo/cheerful-curly-business-girl-wearing-glasses_176420-206.jpg?size=626&ext=jpg"
                //src="https://i.pinimg.com/originals/c7/6b/3f/c76b3f38a6b60c338d6534b4eacc9af2.jpg"
                src="https://media.gettyimages.com/photos/smiling-hispanic-businesswoman-picture-id1062664976?s=612x612"
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
export default Banner;
