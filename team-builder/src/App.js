import React, { useState } from 'react';
import Members from './components/Members';
import MemberForm from './components/MemberForm';
import './App.css';

function App() {
  const [members, setMembers] = useState([
    {
      id: 1,
      name: "Lyndsi",
      email: "kcatgirl@gmail.com",
      role: "Damage"
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
      <MemberForm addNewMember={addNewMember} />
      <Members members={members} />
    </div>
  );
}

export default App;
