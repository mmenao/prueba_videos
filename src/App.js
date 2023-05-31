import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import { RecordWebcam, useRecordWebcam } from 'react-record-webcam';

function App() {
  const [recording, setRecording] = useState(false);
  const [recordedChunks, setRecordedChunks] = useState([]);

  const onStopRecording = (recordedBlob) => {
    setRecordedChunks([recordedBlob]);
  };

  const {
    handleStartRecording,
    handleStopRecording,
    mediaBlobUrl,
    previewStream,
  } = useRecordWebcam({ onStopRecording });

  return (
    <div>
      <h1>React Record Webcam Example</h1>
      <RecordWebcam
        className="video-container"
        previewStream={previewStream}
      />
      <div>
        <button onClick={handleStartRecording} disabled={recording}>
          Start Recording
        </button>
        <button onClick={handleStopRecording} disabled={!recording}>
          Stop Recording
        </button>
      </div>
      {recordedChunks.length > 0 && (
        <video controls>
          <source src={mediaBlobUrl} type="video/webm" />
        </video>
      )}
    </div>
  );
}

export default App;
