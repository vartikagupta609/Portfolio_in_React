import React from "react";
import "./styles.css";
import Banner from "./components/Banner";
import Nav from "./components/Nav";
import About from "./components/About";
import Resume from "./components/Resume";
import Project from "./components/Project";
import Contact from "./components/Contact";
import Login from "./components/Login";
import Form from "./components/Form";

function App() {
  return (
    <div className="App">
      {/* <Nav />
      <Banner />
      <About />
      <Resume />
      <Project />
      <Contact /> */}
      <Login />
      <Form />
    </div>
  );
}
export default App;
