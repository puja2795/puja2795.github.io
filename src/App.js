import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import AboutMe from "./components/AboutMe";

function App() {
  return (
    <div className="App">
      <Navbar id="nav-menu" />
      <Home id="home" />
      <AboutMe id="about" class="about section" />
    </div>
  );
}

export default App;
