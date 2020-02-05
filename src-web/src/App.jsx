import React from 'react';
import './App.css';
import './menubar.css'
import { GlobalState, Queries } from './lib/index'

const State = new GlobalState();
const Query = new Queries();

function App() {
  return (
    <div className="App">
      <header>
          <div className="title-bar">
              <div className="app-name-container" />
              <div className="window-controls-container">
                  <button id="minimize-button" className="minimize-button" />
                  <button id="min-max-button" className="min-max-button" />
                  <button id="close-button" className="close-button" />
              </div>
          </div>

        <div className="App-header">
          Yo Fitworld!
        </div>
      </header>

    </div>
  );
}

export default App;
