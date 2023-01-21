import React from 'react';
import './piano.css';

// import A audion files
import audioA0 from './audio-files/A-0.mp4';
import audioA1 from './audio-files/A-1.mp4';
import audioA2 from './audio-files/A-2.mp4';
import audioA3 from './audio-files/A-3.mp4';
import audioA4 from './audio-files/A-4.mp4';
import audioA5 from './audio-files/A-5.mp4';
import audioA6 from './audio-files/A-6.mp4';
import audioA7 from './audio-files/A-7.mp4';
import audioA0sharp from './audio-files/A-0#.mp4';
import audioA1sharp from './audio-files/A-1#.mp4';
import audioA2sharp from './audio-files/A-2#.mp4';
import audioA3sharp from './audio-files/A-3#.mp4';
import audioA4sharp from './audio-files/A-4#.mp4';
import audioA5sharp from './audio-files/A-5#.mp4';
import audioA6sharp from './audio-files/A-6#.mp4';
import audioA7sharp from './audio-files/A-7#.mp4';


// import B audio files
import audioB0 from './audio-files/B-0.mp4';
import audioB1 from './audio-files/B-1.mp4';
import audioB2 from './audio-files/B-2.mp4';
import audioB3 from './audio-files/B-3.mp4';
import audioB4 from './audio-files/B-4.mp4';
import audioB5 from './audio-files/B-5.mp4';
import audioB6 from './audio-files/B-6.mp4';
import audioB7 from './audio-files/B-7.mp4';


// import C audio files
import audioC1 from './audio-files/C-1.mp4';
import audioC2 from './audio-files/C-2.mp4';
import audioC3 from './audio-files/C-3.mp4';
import audioC4 from './audio-files/C-4.mp4';
import audioC5 from './audio-files/C-5.mp4';
import audioC6 from './audio-files/C-6.mp4';
import audioC7 from './audio-files/C-7.mp4';
import audioC8 from './audio-files/C-8.mp4';
import audioC1sharp from './audio-files/C-1#.mp4';
import audioC2sharp from './audio-files/C-2#.mp4';
import audioC3sharp from './audio-files/C-3#.mp4';
import audioC4sharp from './audio-files/C-4#.mp4';
import audioC5sharp from './audio-files/C-5#.mp4';
import audioC6sharp from './audio-files/C-6#.mp4';
import audioC7sharp from './audio-files/C-7#.mp4';


// import D audio files
import audioD1 from './audio-files/D-1.mp4';
import audioD2 from './audio-files/D-2.mp4';
import audioD3 from './audio-files/D-3.mp4';
import audioD4 from './audio-files/D-4.mp4';
import audioD5 from './audio-files/D-5.mp4';
import audioD6 from './audio-files/D-6.mp4';
import audioD7 from './audio-files/D-7.mp4';
import audioD1sharp from './audio-files/D-1#.mp4';
import audioD2sharp from './audio-files/D-2#.mp4';
import audioD3sharp from './audio-files/D-3#.mp4';
import audioD4sharp from './audio-files/D-4#.mp4';
import audioD5sharp from './audio-files/D-5#.mp4';
import audioD6sharp from './audio-files/D-6#.mp4';
import audioD7sharp from './audio-files/D-7#.mp4';


// import E audio files
import audioE1 from './audio-files/E-1.mp4';
import audioE2 from './audio-files/E-2.mp4';
import audioE3 from './audio-files/E-3.mp4';
import audioE4 from './audio-files/E-4.mp4';
import audioE5 from './audio-files/E-5.mp4';
import audioE6 from './audio-files/E-6.mp4';
import audioE7 from './audio-files/E-7.mp4';


// import F audio files
import audioF1 from './audio-files/F-1.mp4';
import audioF2 from './audio-files/F-2.mp4';
import audioF3 from './audio-files/F-3.mp4';
import audioF4 from './audio-files/F-4.mp4';
import audioF5 from './audio-files/F-5.mp4';
import audioF6 from './audio-files/F-6.mp4';
import audioF7 from './audio-files/F-7.mp4';
import audioF1sharp from './audio-files/F-1#.mp4';
import audioF2sharp from './audio-files/F-2#.mp4';
import audioF3sharp from './audio-files/F-3#.mp4';
import audioF4sharp from './audio-files/F-4#.mp4';
import audioF5sharp from './audio-files/F-5#.mp4';
import audioF6sharp from './audio-files/F-6#.mp4';
import audioF7sharp from './audio-files/F-7#.mp4';


// import G audio files
import audioG1 from './audio-files/G-1.mp4';
import audioG2 from './audio-files/G-2.mp4';
import audioG3 from './audio-files/G-3.mp4';
import audioG4 from './audio-files/G-4.mp4';
import audioG5 from './audio-files/G-5.mp4';
import audioG6 from './audio-files/G-6.mp4';
import audioG7 from './audio-files/G-7.mp4';
import audioG1sharp from './audio-files/G-1#.mp4';
import audioG2sharp from './audio-files/G-2#.mp4';
import audioG3sharp from './audio-files/G-3#.mp4';
import audioG4sharp from './audio-files/G-4#.mp4';
import audioG5sharp from './audio-files/G-5#.mp4';
import audioG6sharp from './audio-files/G-6#.mp4';
import audioG7sharp from './audio-files/G-7#.mp4';


const Piano = () => {

const WHITE=['a','s','d','f','j','k','k'];
const BLACK=['r','t','y','u','i'];
let keys=document.querySelectorAll('.key');
let blackKeys=document.querySelectorAll('.key.black');
let whiteKeys=document.querySelectorAll('.key.white');
// click event listener
keys.forEach(key =>{
key.addEventListener('click',()=>playMusic(key));
});
//keydown event listener
document.addEventListener('keydown',e=>{
    console.log("key-down")
let key=e.key;
let whiteKeyIndex=WHITE.indexOf(key);
let blackKeyIndex=BLACK.indexOf(key);
if(whiteKeyIndex>-1) playMusic(whiteKeys[whiteKeyIndex]);
if(blackKeyIndex>-1) playMusic(blackKeys[blackKeyIndex])
});
// function to play sounds
function playMusic(key){
    console.log("play-music-triggered");
    const audio=document.getElementById(key.dataset.note);
    audio.currentTime=0;
    audio.play(); };



    return (
        <div className="piano-component">
            <div className="container">
                <div data-note="A0" className="key white black" ><h3>A</h3></div>
                <div data-note="B0" className="key white" ><h3>B</h3></div>


                <div data-note="C1" className="key white black" ><h3>C</h3></div>
                <div data-note="D1" className="key white black" ><h3>D</h3></div>
                <div data-note="E1" className="key white" ><h3>E</h3></div>
                <div data-note="F1" className="key white black" ><h3>F</h3></div>
                <div data-note="G1" className="key white black" ><h3>G</h3></div>
                <div data-note="A1" className="key white black" ><h3>A</h3></div>
                <div data-note="B1" className="key white" ><h3>B</h3></div>


                <div data-note="C2" className="key white black" ><h3>C</h3></div>
                <div data-note="D2" className="key white black" ><h3>D</h3></div>
                <div data-note="E2" className="key white" ><h3>E</h3></div>
                <div data-note="F2" className="key white black" ><h3>F</h3></div>
                <div data-note="G2" className="key white black" ><h3>G</h3></div>
                <div data-note="A2" className="key white black" ><h3>A</h3></div>
                <div data-note="B2" className="key white" ><h3>B</h3></div>


                <div data-note="C3" className="key white black" ><h3>C</h3></div>
                <div data-note="D3" className="key white black" ><h3>D</h3></div>
                <div data-note="E3" className="key white" ><h3>E</h3></div>
                <div data-note="F3" className="key white black" ><h3>F</h3></div>
                <div data-note="G3" className="key white black" ><h3>G</h3></div>
                <div data-note="A3" className="key white black" ><h3>A</h3></div>
                <div data-note="B3" className="key white" ><h3>B</h3></div>


                <div data-note="C4" className="key white black" ><h3>C</h3></div>
                <div data-note="D4" className="key white black" ><h3>D</h3></div>
                <div data-note="E4" className="key white" ><h3>E</h3></div>
                <div data-note="F4" className="key white black" ><h3>F</h3></div>
                <div data-note="G4" className="key white black" ><h3>G</h3></div>
                <div data-note="A4" className="key white black" ><h3>A</h3></div>
                <div data-note="B4" className="key white" ><h3>B</h3></div>


                <div data-note="C5" className="key white black" ><h3>C</h3></div>
                <div data-note="D5" className="key white black" ><h3>D</h3></div>
                <div data-note="E5" className="key white" ><h3>E</h3></div>
                <div data-note="F5" className="key white black" ><h3>F</h3></div>
                <div data-note="G5" className="key white black" ><h3>G</h3></div>
                <div data-note="A5" className="key white black" ><h3>A</h3></div>
                <div data-note="B5" className="key white" ><h3>B</h3></div>


                <div data-note="C6" className="key white black" ><h3>C</h3></div>
                <div data-note="D6" className="key white black" ><h3>D</h3></div>
                <div data-note="E6" className="key white" ><h3>E</h3></div>
                <div data-note="F6" className="key white black" ><h3>F</h3></div>
                <div data-note="G6" className="key white black" ><h3>G</h3></div>
                <div data-note="A6" className="key white black" ><h3>A</h3></div>
                <div data-note="B6" className="key white" ><h3>B</h3></div>


                <div data-note="C7" className="key white black" ><h3>C</h3></div>
                <div data-note="D7" className="key white black" ><h3>D</h3></div>
                <div data-note="E7" className="key white" ><h3>E</h3></div>
                <div data-note="F7" className="key white black" ><h3>F</h3></div>
                <div data-note="G7" className="key white black" ><h3>G</h3></div>
                <div data-note="A7" className="key white black" ><h3>A</h3></div>
                <div data-note="B7" className="key white" ><h3>B</h3></div>
                <div data-note="C8" className="key white" ><h3>C</h3></div>
            </div>  
    {/* <!-- Audio files --> */}
    <audio id="C1" src={audioC1}></audio>
    {/* <!-- A audio --> */}
            <audio id="A0" src={audioA0}></audio>
            <audio id="A1" src={audioA1}></audio>
            <audio id="A2" src={audioA2}></audio>
            <audio id="A3" src={audioA3}></audio>
            <audio id="A4" src={audioA4}></audio>
            <audio id="A5" src={audioA5}></audio>
            <audio id="A6" src={audioA6}></audio>
            <audio id="A7" src={audioA7}></audio>
            <audio id="A0#" src={audioA0sharp}></audio>
            <audio id="A1#" src={audioA1sharp}></audio>
            <audio id="A2#" src={audioA2sharp}></audio>
            <audio id="A3#" src={audioA3sharp}></audio>
            <audio id="A4#" src={audioA4sharp}></audio>
            <audio id="A5#" src={audioA5sharp}></audio>
            <audio id="A6#" src={audioA6sharp}></audio>
            <audio id="A7#" src={audioA7sharp}></audio>
    {/* <!-- B audio --> */}
    <audio id="C2" src={audioC2}></audio>
            <audio id="B0" src={audioB0}></audio>
            <audio id="B1" src={audioB1}></audio>
            <audio id="B2" src={audioB2}></audio>
            <audio id="B3" src={audioB3}></audio>
            <audio id="B4" src={audioB4}></audio>
            <audio id="B5" src={audioB5}></audio>
            <audio id="B6" src={audioB6}></audio>
            <audio id="B7" src={audioB7}></audio>

    {/* <!-- C audio --> */}
            <audio id="C1" src={audioC1}></audio>
            <audio id="C2" src={audioC2}></audio>
            <audio id="C3" src={audioC3}></audio>
            <audio id="C4" src={audioC4}></audio>
            <audio id="C5" src={audioC5}></audio>
            <audio id="C6" src={audioC6}></audio>
            <audio id="C7" src={audioC7}></audio>
            <audio id="C8" src={audioC8}></audio>
            <audio id="C1#" src={audioC1sharp}></audio>
            <audio id="C2#" src={audioC2sharp}></audio>
            <audio id="C3#" src={audioC3sharp}></audio>
            <audio id="C4#" src={audioC4sharp}></audio>
            <audio id="C5#" src={audioC5sharp}></audio>
            <audio id="C6#" src={audioC6sharp}></audio>
            <audio id="C7#" src={audioC7sharp}></audio>
    {/* <!-- D audio --> */}
            <audio id="D1" src={audioD1}></audio>
            <audio id="D2" src={audioD2}></audio>
            <audio id="D3" src={audioD3}></audio>
            <audio id="D4" src={audioD4}></audio>
            <audio id="D5" src={audioD5}></audio>
            <audio id="D6" src={audioD6}></audio>
            <audio id="D7" src={audioD7}></audio>
            <audio id="D1#" src={audioD1sharp}></audio>
            <audio id="D2#" src={audioD2sharp}></audio>
            <audio id="D3#" src={audioD3sharp}></audio>
            <audio id="D4#" src={audioD4sharp}></audio>
            <audio id="D5#" src={audioD5sharp}></audio>
            <audio id="D6#" src={audioD6sharp}></audio>
            <audio id="D7#" src={audioD7sharp}></audio>
    {/* <!-- E audio --> */}
            <audio id="E1" src={audioE1}></audio>
            <audio id="E2" src={audioE2}></audio>
            <audio id="E3" src={audioE3}></audio>
            <audio id="E4" src={audioE4}></audio>
            <audio id="E5" src={audioE5}></audio>
            <audio id="E6" src={audioE6}></audio>
            <audio id="E7" src={audioE7}></audio>
    {/* <!-- F audio --> */}
            <audio id="F1" src={audioF1}></audio>
            <audio id="F2" src={audioF2}></audio>
            <audio id="F3" src={audioF3}></audio>
            <audio id="F4" src={audioF4}></audio>
            <audio id="F5" src={audioF5}></audio>
            <audio id="F6" src={audioF6}></audio>
            <audio id="F7" src={audioF7}></audio>
            <audio id="F1#" src={audioF1sharp}></audio>
            <audio id="F2#" src={audioF2sharp}></audio>
            <audio id="F3#" src={audioF3sharp}></audio>
            <audio id="F4#" src={audioF4sharp}></audio>
            <audio id="F5#" src={audioF5sharp}></audio>
            <audio id="F6#" src={audioF6sharp}></audio>
            <audio id="F7#" src={audioF7sharp}></audio>
    {/* <!-- G audio --> */}
            <audio id="G1" src={audioG1}></audio>
            <audio id="G2" src={audioG2}></audio>
            <audio id="G3" src={audioG3}></audio>
            <audio id="G4" src={audioG4}></audio>
            <audio id="G5" src={audioG5}></audio>
            <audio id="G6" src={audioG6}></audio>
            <audio id="G7" src={audioG7}></audio>
            <audio id="G1#" src={audioG1sharp}></audio>
            <audio id="G2#" src={audioG2sharp}></audio>
            <audio id="G3#" src={audioG3sharp}></audio>
            <audio id="G4#" src={audioG4sharp}></audio>
            <audio id="G5#" src={audioG5sharp}></audio>
            <audio id="G6#" src={audioG6sharp}></audio>
            <audio id="G7#" src={audioG7sharp}></audio>



        </div>
    )
};

export default Piano;