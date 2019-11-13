import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [member, setMember] = useState([
    {
      id: 1,
      name: "Lyndsi",
      email: "kcatgirl@gmail.com",
      role: "The mama"
    }
  ]);

  return (
    <div className="App">
      Base App
    </div>
  );
}

export default App;
