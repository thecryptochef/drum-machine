import React, {
  useState,
  useEffect,
  useRef,
  
} from 'react';
import './Components.css';

const bank = {
  Q: {
    name: 'Chord-1',
    source:
      'https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3'
  },
  W: {
    name: 'Chord-2',
    source:
      'https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3'
  },
  E: {
    name: 'Chord-3',
    source:
      'https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3'
  },
  A: {
    name: 'Heater 1',
    source:
      'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'
  },
  S: {
    name: 'Acoustic Guitar',
    source:
      'https://res.cloudinary.com/dzsmdyknz/video/upload/v1532674083/sample-swap/guitar/120_acoustic-guitar-picking1.mp3'
  },
  D: {
    name: 'Open Hi-Hat',
    source:
      'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3'
  },
  Z: {
    name: 'Crash',
    source:
      'https://res.cloudinary.com/dzsmdyknz/video/upload/v1532587948/fcc-drum-machine/cymbals%202/cymbalcrash1.mp3'
  },
  X: {
    name: 'Shaker',
    source:
      'https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3'
  },
  C: {
    name: 'Choirs',
    source:
      'https://res.cloudinary.com/dzsmdyknz/video/upload/v1532674510/sample-swap/choir/Slavic-Choir_Eb_Aah.mp3'
  }
};
function Pad({
  power,
  handleClick,
  backgroundStyle,
  element
}) {
  return (
    <button
      className="drum-pad"
      type="button"
      onClick={handleClick}
      id={bank[element]}
      disabled={!power}
      style={{
        background: `${backgroundStyle}`
      }}
    >
      {element}
      <audio
        id={element}
        src={bank[element].source}
        className="clip"
      />
    </button>
  );
}

export default function DrumPad({
  power,
  vol
}) {
  const keypadCode = Object.keys(bank);
  const [
    display,
    setDisplay
  ] = useState(
    'Power on & keydown/Click'
  );
  const buttonBackground = '';
  const backgroundRef = useRef();

  const playSound = e => {
    const keyboardKey = e.key
      ? e.key.toUpperCase()
      : e.target.childNodes[1].id;
    if (
      e.key &&
      !keypadCode.includes(keyboardKey)
    )
      return;
    setDisplay(bank[keyboardKey].name);
    const audio = document.getElementById(
      keyboardKey
    );
    if (e.key) {
      const button = audio.parentElement;
      button.style.background = 'coral';
      backgroundRef.current = setTimeout(
        () =>
          (button.style.background = buttonBackground),
        100
      );
    }
    audio.volume = vol;
    audio.play();
  };

  useEffect(() => {
    if (!power) {
      return;
    } else {
      window.addEventListener(
        'keydown',
        playSound
      );
    }
    return () =>
      window.removeEventListener(
        'keydown',
        playSound
      );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [power, vol]);
  useEffect(() => {
    return () =>
      clearTimeout(backgroundRef.current);
  }, []);

  return (
    <div>
      <div id="display">{display}</div>
      {keypadCode.map((pad, idx) => {
        return (
          <Pad
            key={pad + idx}
            handleClick={playSound}
            power={power}
            element={pad}
            backgroundStyle={
              buttonBackground
            }
          />
        );
      })}
    </div>
  );
}
