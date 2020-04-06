import React from "react";
import Pizzicato from "pizzicato";
import "./App.scss";

const App = () => {
  return (
    <div className="wrapper">
      <ul className="set">
        <li className="white f" onClick={() => playFrequency(349.23)}></li>
        <li className="black fs" onClick={() => playFrequency(369.99)}></li>
        <li className="white g" onClick={() => playFrequency(392.0)}></li>
        <li className="black gs" onClick={() => playFrequency(415.3)}></li>
        <li className="white a" onClick={() => playFrequency(440.0)}></li>
        <li className="black as" onClick={() => playFrequency(466.16)}></li>
        <li className="white b" onClick={() => playFrequency(493.88)}></li>
        <li className="white c" onClick={() => playFrequency(523.25)}></li>
        <li className="black cs" onClick={() => playFrequency(554.37)}></li>
        <li className="white d" onClick={() => playFrequency(587.33)}></li>
        <li className="black ds" onClick={() => playFrequency(622.25)}></li>
        <li className="white e" onClick={() => playFrequency(659.25)}></li>
      </ul>
    </div>
  );
};

const playFrequency = (frequency) => {
  const note = new Pizzicato.Sound({
    source: "wave",
    options: {
      type: "sine",
      frequency: frequency,
    },
  });
  note.attack = 0.5;
  note.release = 1;
  const effect = new Pizzicato.Effects.Quadrafuzz({
    lowGain: 0.6,
    midLowGain: 0.8,
    midHighGain: 0.5,
    highGain: 0.6,
    mix: 1.0,
    feedback: 0.6,
    time: 0.4,
  });
  const reverb = new Pizzicato.Effects.Reverb({
    time: 0.5,
    decay: 0.01,
    reverse: false,
    mix: 0.5,
  });

  var compressor = new Pizzicato.Effects.Compressor({
    threshold: -24,
    ratio: 12,
  });

  note.addEffect(compressor);

  note.addEffect(reverb);
  note.addEffect(effect);
  keyPress(note);
};

const keyPress = (note) => {
  note.play();
  setTimeout(() => {
    note.stop();
  }, 200);
};

export default App;
