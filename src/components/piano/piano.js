import React from 'react';
import './piano.css';
import playMusic from '../../hook/playMusic'

const Piano = () => {

const WHITE=['a','s','d','f','j','k','k'];
const BLACK=['r','t','y','u','i'];
let keys=document.querySelectorAll('.key');
let blackKeys=document.querySelectorAll('.key.black');
let whiteKeys=document.querySelectorAll('.key.white');
// click event listener
keys.forEach(key =>{
        console.log('added event listener to' + key)
key.addEventListener('click',()=>playMusic(key))
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

    return (
        <div className="piano-component">
            <div className="container">
                <div id = "A-0" data-note="A-0" className="key white black" ><h3>A</h3></div>
                <div id = "A-0" data-note="B-0" className="key white" ><h3>B</h3></div>


                <div id = "A-0" data-note="C-1" className="key white black" ><h3>C</h3></div>
                <div id = "D-1" data-note="D-1" className="key white black" ><h3>D</h3></div>
                <div id = "E-1" data-note="E-1" className="key white" ><h3>E</h3></div>
                <div id = "F-1" data-note="F-1" className="key white black" ><h3>F</h3></div>
                <div id = "G-1" data-note="G-1" className="key white black" ><h3>G</h3></div>
                <div id = "A-1" data-note="A-1" className="key white black" ><h3>A</h3></div>
                <div id = "B-1" data-note="B-1" className="key white" ><h3>B</h3></div>


                <div id = "C-2" data-note="C-2" className="key white black" ><h3>C</h3></div>
                <div id = "D-2" data-note="D-2" className="key white black" ><h3>D</h3></div>
                <div id = "E-2" data-note="E-2" className="key white" ><h3>E</h3></div>
                <div id = "F-2" data-note="F-2" className="key white black" ><h3>F</h3></div>
                <div id = "G-2" data-note="G-2" className="key white black" ><h3>G</h3></div>
                <div id = "A-2" data-note="A-2" className="key white black" ><h3>A</h3></div>
                <div id = "B-2" data-note="B-2" className="key white" ><h3>B</h3></div>


                <div id = "C-3" data-note="C-3" className="key white black" ><h3>C</h3></div>
                <div id = "D-3" data-note="D-3" className="key white black" ><h3>D</h3></div>
                <div id = "E-3" data-note="E-3" className="key white" ><h3>E</h3></div>
                <div id = "F-3" data-note="F-3" className="key white black" ><h3>F</h3></div>
                <div id = "G-3" data-note="G-3" className="key white black" ><h3>G</h3></div>
                <div id = "A-3" data-note="A-3" className="key white black" ><h3>A</h3></div>
                <div id = "B-3" data-note="B-3" className="key white" ><h3>B</h3></div>


                <div id = "C-4" data-note="C-4" className="key white black" ><h3>C</h3></div>
                <div id = "D-4" data-note="D-4" className="key white black" ><h3>D</h3></div>
                <div id = "E-4" data-note="E-4" className="key white" ><h3>E</h3></div>
                <div id = "F-4" data-note="F-4" className="key white black" ><h3>F</h3></div>
                <div id = "G-4" data-note="G-4" className="key white black" ><h3>G</h3></div>
                <div id = "A-4" data-note="A-4" className="key white black" ><h3>A</h3></div>
                <div id = "B-4" data-note="B-4" className="key white" ><h3>B</h3></div>


                <div id = "C-5" data-note="C-5" className="key white black" ><h3>C</h3></div>
                <div id = "D-5" data-note="D-5" className="key white black" ><h3>D</h3></div>
                <div id = "E-5" data-note="E-5" className="key white" ><h3>E</h3></div>
                <div id = "F-5" data-note="F-5" className="key white black" ><h3>F</h3></div>
                <div id = "G-5" data-note="G-5" className="key white black" ><h3>G</h3></div>
                <div id = "A-5" data-note="A-5" className="key white black" ><h3>A</h3></div>
                <div id = "B-5" data-note="B-5" className="key white" ><h3>B</h3></div>


                <div id = "C-6" data-note="C-6" className="key white black" ><h3>C</h3></div>
                <div id = "D-6" data-note="D-6" className="key white black" ><h3>D</h3></div>
                <div id = "E-6" data-note="E-6" className="key white" ><h3>E</h3></div>
                <div id = "F-6" data-note="F-6" className="key white black" ><h3>F</h3></div>
                <div id = "G-6" data-note="G-6" className="key white black" ><h3>G</h3></div>
                <div id = "A-6" data-note="A-6" className="key white black" ><h3>A</h3></div>
                <div id = "B-6" data-note="B-6" className="key white" ><h3>B</h3></div>


                <div id = "C-7" data-note="C-7" className="key white black" ><h3>C</h3></div>
                <div id = "D-7" data-note="D-7" className="key white black" ><h3>D</h3></div>
                <div id = "E-7" data-note="E-7" className="key white" ><h3>E</h3></div>
                <div id = "F-7" data-note="F-7" className="key white black" ><h3>F</h3></div>
                <div id = "G-7" data-note="G-7" className="key white black" ><h3>G</h3></div>
                <div id = "A-7" data-note="A-7" className="key white black" ><h3>A</h3></div>
                <div id = "B-7" data-note="B-7" className="key white" ><h3>B</h3></div>
                <div id = "C-8" data-note="C-8" className="key white" ><h3>C</h3></div>
            </div>  
        </div>
    )
};

export default Piano;