import React from 'react';
import Piano from '../components/piano/piano.js'

const Homepage = () => {
    return (
    <main id="grid-container">
      <header className="header"> Lune
      </header>

      <div className="piano" id="keys">
        <Piano/>
      </div>


      <footer className ="footer"> 
        <p>for you</p>
      </footer>

    </main>
      );
    };
    export default Homepage;