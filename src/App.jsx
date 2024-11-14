
import Tech from "./Components/Tech.jsx";
import Blog from "./Components/Blog.jsx";
import About from "./Components/About.jsx";
import "./App.css";
import ParticlesBackground from "./utils/ParticlesBackground.jsx";
import NavBar from "./Components/NavBar.jsx";
import Hero from "./Components/Hero.jsx";
import Projects from "./Components/Projects.jsx";

function App() {
  return (
    <div
      id="app"
      className="flex  flex-col "
    >


      {/* <ParticlesBackground /> */}
      <NavBar />
      <Hero />
      <Projects />
    
      {/* <Project />
      <Tech />
      <Blog />
      <About /> */}
    </div>
  );
}

export default App;
