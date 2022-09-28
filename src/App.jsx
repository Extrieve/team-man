import { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import Employees from './Employees';

function App() {

  return (
    <div>
      <Header />
      <Content />
      <Employees />
      <Footer />
    </div>
  )    
}

export default App;
