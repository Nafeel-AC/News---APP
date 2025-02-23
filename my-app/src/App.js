import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar.js";
import News from "./components/News.js";
import Particles from "./components/particles.js";

function App() {
  return (
    <div className="App">
      <div className="background-container">
        <Particles
          particleColors={['#956ddf', '#7d4cdb', '#b794f4']}
          particleCount={500}
          particleSpread={15}
          speed={0.2}
          particleBaseSize={200}
          moveParticlesOnHover={true}
          alphaParticles={true}
          disableRotation={false}
        />
      </div>
      <Navbar />
      <News />
    </div>
  );
}

export default App;
