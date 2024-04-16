import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import Routes
import AboutPage from './components/AboutPage';
import Header from './components/Header';
import Home from './components/Home';
// import Footer from './components/Footer';
import Pay from './components/Pay';
import Total from './components/Total';


function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/pay" element={<Pay/>} />
          <Route path="/checkout" element={<Total/>} />
      
        </Routes>
        {/* <Footer  /> */}

      </div>
    </Router>
  );
}

export default App;
