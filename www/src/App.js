import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [time, setTime] = useState('');

  const handleSetTime = async () => {
    const serverTime = await axios.get('/api/time');

    setTime(serverTime.data);
  };
  return (
    <div className="App">
      <p>Push the button</p>
      <p className="time">{time}</p>
      <button type="button" className="button" onClick={handleSetTime}>
        Get the Time!
      </button>
    </div>
  );
}

export default App;
