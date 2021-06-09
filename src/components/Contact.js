import "../styles.css";

const Contact = () => {
  return (
    <div className="contact">
      <div className="container">
        <div className="common">
          <h1 className="mainHeader">CONTACT ME</h1>
          <p className="mainContent">Let's keep in Touch</p>
          <div className="commonBorder"></div>
        </div>
        <div className="contact-box">
          <div className="row  h-650 alignCenter">
            {/* <div className="mainbox"> */}
            <div className="col-6">
              <div className="about-img">
                <div>Get In Touch</div>
                <img
                  alt="images"
                  src="https://media.gettyimages.com/photos/smiling-hispanic-businesswoman-picture-id1062664976?s=612x612"
                />
              </div>
            </div>
            <div className="col-6">
              <div className="contact-info">
                <h4>Name</h4>
                <input />
                <h4>Email</h4>
                <input />
                <h4>Message</h4>
                <textarea />
                <button className="btnsend">SEND</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Contact;
