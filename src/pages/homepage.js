import React from 'react';
import Piano from '../components/piano/piano.js'
import playTwinkleTwinkle from '../hook/playTwinkleTwinkle.js'

const Homepage = () => {

    return (
    <main id="grid-container">
      <header className="header"> Lune
      </header>

      <div className="piano" id="keys">
        <Piano/>
      </div>


      <footer className ="footer"> 
      <button onClick={(playTwinkleTwinkle)}> play Twinkle Twinkle Little Star</button>
        <p>for you</p>
      </footer>

    </main>
      );
    };
    export default Homepage;