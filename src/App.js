import React from 'react';
import './App.scss';

function App() {
  const [open, setOpen] = React.useState(false);

  return (
    <div className="App">
      <button
        onClick={() => setOpen(true)}
        className="open-modal-btn">✨ Открыть модальное окно
      </button>
      <div className={`overlay animated ${open ? 'show' : ''}`}>
        <div className="modal">
          <svg
            onClick={() => setOpen(false)}
            height="300"
            viewBox="0 0 200 200"
            width="300">
            <title />
            <path d="M114,100l49-49a9.9,9.9,0,0,0-14-14L100,86,51,37A9.9,9.9,0,0,0,37,51l49,49L37,149a9.9,9.9,0,0,0,14,14l49-49,49,49a9.9,9.9,0,0,0,14-14Z" />
          </svg>
          <img alt='gif' src="https://media.giphy.com/media/5yccPytI1wapjfrq0V/giphy.gif" />
        </div>
      </div>
    </div>
  );
}

export default App;
