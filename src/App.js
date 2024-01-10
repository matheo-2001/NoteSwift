import React, { useState } from 'react';
import './App.css';

function App() {
  const [phrase, setPhrase] = useState("Cliquez pour recevoir de la motivation !");
  const phrases = [
    "Le succès est la somme de petits efforts répétés jour après jour.",
    "Votre limitation, c’est seulement votre imagination.",
    "Poussez-vous, car personne ne va le faire pour vous.",
    "Parfois, plus tard devient jamais. Faites-le maintenant.",
    "Grande chose prennent du temps. Soyez patient."
  ];

  const changePhrase = () => {
    const randomIndex = Math.floor(Math.random() * phrases.length);
    setPhrase(phrases[randomIndex]);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Phrase de Motivation</h1>
        <p>{phrase}</p>
        <button onClick={changePhrase}>Nouvelle Phrase</button>
      </header>
    </div>
  );
}

export default App;
