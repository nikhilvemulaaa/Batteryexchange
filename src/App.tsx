import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import StationLocator from './pages/StationLocator';
import AIAssistant from './pages/AIAssistant';
import Benefits from './pages/Benefits';
import Privacy from './pages/Privacy';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-dark-900 text-white overflow-x-hidden">
        <Header />
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/stations" element={<StationLocator />} />
            <Route path="/assistant" element={<AIAssistant />} />
            <Route path="/benefits" element={<Benefits />} />
            <Route path="/privacy" element={<Privacy />} />
          </Routes>
        </AnimatePresence>
        <Footer />
      </div>
    </Router>
  );
}

export default App;