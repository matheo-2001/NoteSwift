import React from 'react';

// eslint-disable-next-line react/prop-types
function PhraseDisplay({ phrase }) {
  return (
    <div>
      <h2>Phrase de Motivation</h2>
      <p>{phrase}</p>
    </div>
  );
}

export default PhraseDisplay;
