import React from 'react';

import GameUI from './game-ui/GameUI';
import GameLoop from './tile-view/GameLoop';
import TileView from './tile-view/TileView';

import './App.css';

function App() {
  return (
    <>
        <header>        
        </header>
        <main className="content">
            <GameUI />
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
