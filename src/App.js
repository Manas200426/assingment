// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MyProject from './Pages/MyProject/MyProject';
import SampleProject from './Pages/SampleProject/SampleProject';
import Apps from './Pages/Apps';
import Intro from './Pages/Intro';
import './App.css';  // Import the main app styles if needed
import Sidebar from './Component/Sidebar/Sidebar';

function App() {
  return (
    <div className="App">
      <Router>
        <Sidebar />
        <div className="main-content">
          <Routes>
            <Route path="/" element={<MyProject />} />
            <Route path="/sampleproject" element={<SampleProject />} />
            <Route path="/apps" element={<Apps />} />
            <Route path="/introduction" element={<Intro />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;

