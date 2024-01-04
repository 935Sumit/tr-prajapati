import "./App.css";
import Project from './components/Project/project'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';

import Home from './components/Home'


function App() {
  return (
  <>
    <Router>
    <Routes>
      <Route exact path="/" element={<Home/>} />
      <Route path="/property/:id" element={<Project/>} />
    </Routes>
    </Router>
  </>
  );
}

export default App;
