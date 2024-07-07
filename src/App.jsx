import { BrowserRouter as Router } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <NavBar />
      <Home />
    </Router>
  );
}

export default App;
