import { useState, useRef } from 'react';
export default function Player() {

  const inputPlayerName = useRef()

  const [playerName, setPlayerName] = useState(null);

  function handleCLick() {
    setPlayerName(inputPlayerName.current.value)
    inputPlayerName.current.value = ''
  }

  return (
    <section id="player">
      <h2>Welcome { playerName ?? 'unknown entity' } </h2>
      <p>
        <input ref={inputPlayerName} type="text" />
        <button onClick={handleCLick}>Set Name</button>
      </p>
    </section>
  );
}
