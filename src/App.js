import React from 'react';
import './App.css';
import { Header } from './components/Header';
import { Cottages } from './components/Cottages';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="site-wrapper">
      <Header />
      <Cottages />
      <Footer />
    </div>
  );
}

export default App;