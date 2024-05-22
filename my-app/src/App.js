import React from 'react';
import './App.css'; 
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PaymentPage from './components/PaymentPage';
import TransactionsPage from './components/TransactionsPage';
import Home from './components/Home';
// Main App component
function App() {
  return (
    <div className="App">
      <Header />
      <MainContent />
      <Footer />
      <Router>
      <Routes>
        <Route path="/payments" element={<PaymentPage />} />
        <Route path="/transactions" element={<TransactionsPage />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
    </div>
  );
}

// Header component
function Header() {
  return (
    <header className="App-header">
      <h1>Sleeve 2</h1>
      <p>The ultimate music accessory for your Mac</p>
    </header>
  );
}

// Main content component
function MainContent() {
  return (
    <main className="App-main">
      <p>Displaying and controlling the music you're currently playing in Apple Music, Spotify, and Doppler.</p>
      <div className="App-buttons">
        <button>Download on the Mac App Store</button>
        <button>Buy Directly - $5.99</button>
      </div>
      <p>No subscriptions. No in-app purchases. Requires macOS 11 Big Sur or later.</p>
    </main>
  );
}

// Footer component
function Footer() {
  return (
    <footer className="App-footer">
      <p>Now with shelves and a progress bar. See what's new in Sleeve 2.3</p>
    </footer>

    
  );
}

export default App;