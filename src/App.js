import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import DrumPad from './components/DrumPad';
import ControlScreen from './components/ControlScreen';

function App() {
  const [power, setPower] = useState(false);
  const [volume, setVolume] = useState(0.5);
  return (
    <>
      <Navbar />
      <div id="drumwrap">
        <div id="drum-machine">
          <div id="drum-pads">
            <ControlScreen
              power={power}
              vol={volume}
              setPower={setPower}
              setVol={setVolume}
            />
            <DrumPad
              power={power}
              vol={volume}
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
