import "../styles.css";

const Project = () => {
  return (
    <div className="about">
      <div className="container">
        <div className="common">
          <h1 className="mainHeader">PROJECT</h1>
          <p className="mainContent">My Works</p>
          <div className="commonBorder"></div>
        </div>
        <div className="row  h-650 alignCenter">
          {/* <div className="mainbox"> */}
          {/* <div className="col-6">
            <div className="about-img">
              <img
                alt="images"
                src="https://media.gettyimages.com/photos/smiling-hispanic-businesswoman-picture-id1062664976?s=612x612"
              />
            </div>
          </div>
          <div className="col-6">
            <div className="about-info">
              <h1>Hi There</h1>
              <div className="about-info-p1">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                fermentum dolor sed rutrum blandit. Etiam nulla neque, tempus
                quis massa nec, molestie placerat quam. Integer tempus ac est
                vel bibendum. Vestibulum ante ipsum primis in faucibus orci
                luctus et ultrices posuere cubilia curae; Suspendisse rutrum
                condimentum nisi at placerat. Morbi sed enim velit. In
                pellentesque leo non magna feugiat, quis maximus lectus semper.
                Sed vitae blandit arcu, ut pulvinar metus. Cras dapibus libero
                eu turpis tempus, at luctus nisi egestas. Quisque bibendum
                pharetra arcu at suscipit. Praesent vestibulum diam at sapien
                rhoncus, consequat dignissim nunc placerat.
              </div>
              <div className="info-contacts">
                <div className="row">
                  <div className="col-6">
                    <strong>Name:</strong>
                    <span> Vartika Gupta</span>
                    <br />
                    <br />
                    <strong>Email:</strong>
                    <span> vartikagupta609@gmail.com</span>
                    <br />
                    <br />
                    <strong>Phone No.:</strong>
                    <span> 1234567890</span>
                    <br />
                    <br />
                    <strong>Linkedin:</strong>
                    <span> vartika609</span>
                  </div>
                  {/* <div className="col-6">
                      <strong>{info.title}</strong>
                      <p>{info.text}</p>
                    </div> */}
          {/*  </div>
              </div>
              </div> 
            </div>
              </div>*/}
        </div>
      </div>
    </div>
  );
};
export default Project;
