import { BrowserRouter as Router } from "react-router-dom";
import NavBar from "./components/NavBar";
import About from "./pages/About";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <NavBar />
      <Home />
      <About />
    </Router>
  );
}

export default App;
