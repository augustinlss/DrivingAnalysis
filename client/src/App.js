import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import {useState} from 'react'
import Landing from './Landing';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/homepage" exact Component={Landing} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
