import { BrowserRouter as Router } from "react-router-dom";
import NavBar from "./components/NavBar";
import About from "./pages/About";
import Home from "./pages/Home";
import Projects from "./pages/Projects";

function App() {
  return (
    <Router>
      <NavBar />
      <Home />
      <About />
      <Projects />
    </Router>
  );
}

export default App;
