import React, { useState } from 'react';

function AddPhrase({ addNewPhrase }) {
  const [newPhrase, setNewPhrase] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addNewPhrase(newPhrase);
    setNewPhrase("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        value={newPhrase}
        onChange={(e) => setNewPhrase(e.target.value)}
        placeholder="Ajoutez votre phrase de motivation"
      />
      <button type="submit">Ajouter</button>
    </form>
  );
}

export default AddPhrase;
