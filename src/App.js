import React, { useState, useEffect } from 'react';

function App() {
  const [techs, setTech] = useState([
    'ReactJS',
    'React Native'
  ]);

  const [newTech, setNewTech] = useState('');

  function handleAdd() {
    setTech(...techs, newTech);
  }

  return (
    <>
      <ul>
        {techs.map(tech => <li key={tech}>{tech}</li> )}
      </ul>

      <input value={newTech} onChange={e => setNewTech(e.target.value)} />

      <button type="button" onClick={handleAdd}>
        ADICIONAR
      </button>
    </>
  );
}

export default App;
