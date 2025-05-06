import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>Welcome</h1>
        </header>

        <Routes>
          {/* Route for SignUp page */}
          <Route path="/signup" element={<SignUp />} />

          {/* Route for SignIn page */}
          <Route path="/signin" element={<SignIn />} />

          {/* Default route - redirect to SignUp */}
          <Route path="*" element={<SignUp />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
