import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
// import "font-awesome/css/font-awesome.min.css";
import { BrowserRouter as Router,Route} from "react-router-dom";
import { Home, About, Skills, Experience, Contact, Footer, Job } from "./components";
import { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import {Button }from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAdjust } from "@fortawesome/free-solid-svg-icons";
import "./components/styles.css";
import "./components/button.css"



function App() {
  const [darkMode, setDarkMode] = useState(true);
  const toggleDarkMode = () => setDarkMode(darkMode ? false : true);
  console.log(process.env);

  return (
    <Router>
      <div className="App" data-theme={darkMode ? "dark" : "light"}>
      <Route path="/">
          <Navbar
            expand="lg"
            className="navbar"
            variant={darkMode ? "dark" : "light"}
            data-theme={darkMode ? "dark" : "light"}
          >
            {/* Removed Welcome and p.png image as requested */}
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" >
              <Nav className="mr-auto">
                <Nav.Link href="#about" className="link">
                  About
                </Nav.Link>
                <Nav.Link href="#skills" className="link">
                  Skills
                </Nav.Link>
                <Nav.Link href="#experience" className="link">
                  Experience
                </Nav.Link>
                <Nav.Link href="#projects" className="link">
                  Projects
                </Nav.Link>
                <Nav.Link href="#contact" className="link">
                  Contact
                </Nav.Link>
              </Nav>
              <Button
                className="mode-button ms-auto"
                onClick={toggleDarkMode}
                variant={darkMode ? "outline-light" : "outline-dark"}
                style={{ marginRight: '12px' }}
              >
                {darkMode ? "Light Mode" : "Dark Mode"}{" "}
                <FontAwesomeIcon
                  className="dark"
                  size="lg"
                  icon={faAdjust}
                  spin
                />
              </Button>
            </Navbar.Collapse>
          </Navbar>
    
          <div id="home">
            <Home darkMode={darkMode} />
          </div>
          <div id="about">
            <About darkMode={darkMode} />
          </div>
          <div id="skills">
            <Skills darkMode={darkMode} />
          </div>
          <div id="experience">
            <Job />
          </div>
          <div id="projects">
            <Experience darkMode={darkMode} />
          </div>
          <div id="contact">
            <Contact darkMode={darkMode} />
          </div>
          <Footer />
        </Route>
        <br></br>
      </div>
    </Router>
  );
}

export default App;
