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
                <div data-note="A-0" className="key white black" ><h3>A</h3></div>
                <div data-note="B-0" className="key white" ><h3>B</h3></div>


                <div data-note="C-1" className="key white black" ><h3>C</h3></div>
                <div data-note="D-1" className="key white black" ><h3>D</h3></div>
                <div data-note="E-1" className="key white" ><h3>E</h3></div>
                <div data-note="F-1" className="key white black" ><h3>F</h3></div>
                <div data-note="G-1" className="key white black" ><h3>G</h3></div>
                <div data-note="A-1" className="key white black" ><h3>A</h3></div>
                <div data-note="B-1" className="key white" ><h3>B</h3></div>


                <div data-note="C-2" className="key white black" ><h3>C</h3></div>
                <div data-note="D-2" className="key white black" ><h3>D</h3></div>
                <div data-note="E-2" className="key white" ><h3>E</h3></div>
                <div data-note="F-2" className="key white black" ><h3>F</h3></div>
                <div data-note="G-2" className="key white black" ><h3>G</h3></div>
                <div data-note="A-2" className="key white black" ><h3>A</h3></div>
                <div data-note="B-2" className="key white" ><h3>B</h3></div>


                <div data-note="C-3" className="key white black" ><h3>C</h3></div>
                <div data-note="D-3" className="key white black" ><h3>D</h3></div>
                <div data-note="E-3" className="key white" ><h3>E</h3></div>
                <div data-note="F-3" className="key white black" ><h3>F</h3></div>
                <div data-note="G-3" className="key white black" ><h3>G</h3></div>
                <div data-note="A-3" className="key white black" ><h3>A</h3></div>
                <div data-note="B-3" className="key white" ><h3>B</h3></div>


                <div data-note="C-4" className="key white black" ><h3>C</h3></div>
                <div data-note="D-4" className="key white black" ><h3>D</h3></div>
                <div data-note="E-4" className="key white" ><h3>E</h3></div>
                <div data-note="F-4" className="key white black" ><h3>F</h3></div>
                <div data-note="G-4" className="key white black" ><h3>G</h3></div>
                <div data-note="A-4" className="key white black" ><h3>A</h3></div>
                <div data-note="B-4" className="key white" ><h3>B</h3></div>


                <div data-note="C-5" className="key white black" ><h3>C</h3></div>
                <div data-note="D-5" className="key white black" ><h3>D</h3></div>
                <div data-note="E-5" className="key white" ><h3>E</h3></div>
                <div data-note="F-5" className="key white black" ><h3>F</h3></div>
                <div data-note="G-5" className="key white black" ><h3>G</h3></div>
                <div data-note="A-5" className="key white black" ><h3>A</h3></div>
                <div data-note="B-5" className="key white" ><h3>B</h3></div>


                <div data-note="C-6" className="key white black" ><h3>C</h3></div>
                <div data-note="D-6" className="key white black" ><h3>D</h3></div>
                <div data-note="E-6" className="key white" ><h3>E</h3></div>
                <div data-note="F-6" className="key white black" ><h3>F</h3></div>
                <div data-note="G-6" className="key white black" ><h3>G</h3></div>
                <div data-note="A-6" className="key white black" ><h3>A</h3></div>
                <div data-note="B-6" className="key white" ><h3>B</h3></div>


                <div data-note="C-7" className="key white black" ><h3>C</h3></div>
                <div data-note="D-7" className="key white black" ><h3>D</h3></div>
                <div data-note="E-7" className="key white" ><h3>E</h3></div>
                <div data-note="F-7" className="key white black" ><h3>F</h3></div>
                <div data-note="G-7" className="key white black" ><h3>G</h3></div>
                <div data-note="A-7" className="key white black" ><h3>A</h3></div>
                <div data-note="B-7" className="key white" ><h3>B</h3></div>
                <div data-note="C-8" className="key white" ><h3>C</h3></div>
            </div>  
        </div>
    )
};

export default Piano;