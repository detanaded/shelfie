import React from 'react';
import './App.css';
import Navbar from './Components/Header/header'
import Form from './Components/Form/form'

// ======Within this function we're using the custom components, this includes: Header, Product, Form, Dashboard.========
function App() {
  return (
    <div>
      <Navbar/>
      <Form/>
    </div>
  );
}

export default App;
