import React from 'react';

import GameLoop from './tile-view/GameLoop';
import TileView from './tile-view/TileView';

import './App.css';

function App() {
  return (
    <>
        <header>        
        </header>
        <main className="content">
            <GameLoop>
              <TileView />
            </GameLoop>
        </main>
        <footer>
        </footer>
    </>
  );
}

export default App;
