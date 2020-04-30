import React, { useState } from 'react';
import './App.css';
import Countires from './components/Countires';
import Country from './components/Country'
import General from './components/General';
import John from './components/John';

function App() {

  const [county, setCountry] = useState('');
  const [isJohn, setIsJhon] = useState(false);
  
  return (
    <div className="App container">
          <General />
          {!isJohn ? <h3 className="white pointer" onClick={() => setIsJhon(true)} >Click Here To See John HOpkins CSSE Data</h3> : <h3 className="white pointer" onClick={() => setIsJhon(false)}>Click Here To See General Data</h3>}
          {isJohn ? <John /> : county !== '' ? <Country county={county} setCountry={setCountry} /> : <Countires setCountry={setCountry} /> }
    </div>
  );
}

export default App;
