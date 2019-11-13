import React, { useState } from 'react';
import Members from './components/Members';
import Form from './components/Form';
import './App.css';

function App() {
  const [members, setMembers] = useState([
    {
      id: 1,
      name: "Lyndsi",
      email: "kcatgirl@gmail.com",
      role: "The mama"
    }
  ]);

  const addNewMember = member => {
    const newMember = {
      id: Date.now(),
      name: member.name,
      email: member.email,
      role: member.role
    };
    setMembers([...members, newMember]);
  };

  return (
    <div className="App">
      <Form addNewMember={addNewMember} />
      <Members members={members} />
    </div>
  );
}

export default App;
