import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";

function App() {
  const [count, setCount] = useState(0);
  const { transcript, resetTranscript } = useSpeechRecognition();
  return (
    <>
      <div className="App">
        <div className="speech">
          <div className="header">
            <h3>Welcome to Subtitle Fitur With React 🔊</h3>
          </div>
          <textarea disabled value={transcript} cols="30" rows="10"></textarea>
          <div className="btn">
            <button
              onClick={() =>
                SpeechRecognition.startListening({
                  language: "id",
                  continuous: true,
                })
              }
            >
              Mulai
            </button>
            <button onClick={() => SpeechRecognition.stopListening()}>
              Stop
            </button>
            <button onClick={() => resetTranscript()}>Reset</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
