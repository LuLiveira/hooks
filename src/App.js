import React, { useState, useEffect, useMemo, useCallback } from 'react';

function App() {
  const [techs, setTech] = useState([
    'ReactJS',
    'React Native'
  ]);

  const [newTech, setNewTech] = useState('');

  const handleAdd = useCallback(() => {
    setTech(...techs, newTech);
    setNewTech('');
  }, [newTech, techs]);

  //Executa apenas 1 vez (ComponentDidMount)
  useEffect(() => {
    const techs = localStorage.getItem('techs');

    if(techs){
      setTech(JSON.parse(techs));
    }
  }, [])

  //Executa sempre que tech sofre alteração (ComponentDidUpdate)
  useEffect(() => {
    localStorage.setItem('techs', JSON.stringify(tech));
  }, [tech]);

  //Executa quando o componente deixa de ser montado (ComponentWillUnmount)
  useEffect(() => {
    //Quando retorna uma função no useEffect essa função sera executada no ComponentWillUnmount
    return () => {};
  }, [])

  //Útil para realizar calculos baseado em informações do useState (Evita que o calculo seja feito no return do JSX e faz com que o calculo seja feito apenas se houver alteração nas informações usadas no calculo)
  const techSize = useMemo(() => tech.length, [tech]);

  

  return (
    <>
      <ul>
        {techs.map(tech => <li key={tech}>{tech}</li> )}
      </ul>

      <strong>Você tem {techSize} tecnologias</strong>
      <br />

      <input value={newTech} onChange={e => setNewTech(e.target.value)} />

      <button type="button" onClick={handleAdd}>
        ADICIONAR
      </button>
    </>
  );
}

export default App;
