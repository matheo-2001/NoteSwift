import React, { useState, useEffect } from 'react';
import PhraseDisplay from './PhraseDisplay';
import AddPhrase from './AddPhrase';

function App() {
  const [phrases, setPhrases] = useState(JSON.parse(localStorage.getItem('phrases')) || ["Votre limitation, c’est seulement votre imagination."]);
  const [currentPhrase, setCurrentPhrase] = useState("");

  useEffect(() => {
    localStorage.setItem('phrases', JSON.stringify(phrases));
  }, [phrases]);

  const addNewPhrase = (newPhrase) => {
    setPhrases([...phrases, newPhrase]);
  };

  const showRandomPhrase = () => {
    const randomIndex = Math.floor(Math.random() * phrases.length);
    setCurrentPhrase(phrases[randomIndex]);
  };

  return (
    <div>
      <PhraseDisplay phrase={currentPhrase} />
      <button onClick={showRandomPhrase}>Afficher une Phrase Aléatoire</button>
      <AddPhrase addNewPhrase={addNewPhrase} />
    </div>
  );
}

export default App;
