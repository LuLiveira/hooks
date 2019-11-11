import React, { useState } from 'react';

function App() {
  const [techs, setTech] = useState([
    'ReactJS',
    'React Native'
  ]);

  return (
    <>
      <ul>
        {techs.map(tech => <li key={tech}>{tech}</li> )}
      </ul>
    </>
  );
}

export default App;
