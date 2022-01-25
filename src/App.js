import "./App.css";
import Infos from "./components/Infos";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import AboutPage from "./components/AboutPage";
import Contact from "./components/Contact";
import Resume from "./components/Resume";
import Projects from "./components/Projects";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Navbar />
                <Infos />
              </>
            }
          ></Route>

          <Route path="/about" element={<AboutPage />}></Route>

          <Route path="/contact" element={<Contact />}></Route>

          <Route path="/resume" element={<Resume />}></Route>

          <Route path="/projects" element={<Projects />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
