import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import AboutMe from "./components/AboutMe";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";

function App() {
  return (
    <div className="App">
      <Navbar id="nav-menu" />
      <Home id="home" />
      <AboutMe id="about" class="about section" />
      <Skills id="skills" />
      <Projects id="projects" />
      <Contact id="contact" />
    </div>
  );
}

export default App;
