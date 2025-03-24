// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import JobList from './components/jobs/JobList';
import JobDetail from './components/jobs/JobDetail';
import MockInterview from './components/interview/MockInterview';
import {AuroraBackgroundDemo} from "./components/Aurora/AuroraBackgroundDemo";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <div className="container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<AuroraBackgroundDemo />} />
            <Route path="/joblist" element={<JobList />} />
            <Route path="/jobs/:jobId" element={<JobDetail />} />
            <Route path="/jobs/:jobId/interview/:questionId" element={<MockInterview />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;