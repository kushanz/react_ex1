import { useState } from 'react';
export default function Player() {
  const [playerName, setPlayerName] = useState('');
  const [submitted, setSubmitted] = useState(false)
  function handleChange(event) {
    setPlayerName(event.target.value)
  }
  function handleCLick() {
    setSubmitted(true)
  }

  return (
    <section id="player">
      <h2>Welcome unknown entity</h2>
      <p>
        <input type="text" onChange={handleChange} value={playerName}/>
        <button onClick={handleCLick}>Set Name</button>
      </p>
    </section>
  );
}
