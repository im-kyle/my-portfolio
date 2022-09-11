import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Experience from './Pages/Experience';
import NavBar from './Components/Navbar';
import Footer from './Components/Footer';
import Projects from './Pages/Projects';
import ProjectDisplay from './Pages/ProjectDisplay';

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/projects" element={<Projects />}></Route>
          <Route path="/experience" element={<Experience />}></Route>
          <Route path="/projects/:id" element={<ProjectDisplay />}></Route>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
