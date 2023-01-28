import React from 'react';
import playMusic from './playMusic.js'

const rightHandNoteOrder = ['C-4', 'C-4', 'G-4', 'G-4', 'A-4', 'A-4', 'G-4',
    'F-4', 'F-4', 'E-4', 'E-4', 'D-4', 'D-4', 'C-4',
    'G-4', 'G-4', 'F-4', 'F-4', 'E-4', 'E-4', 'D-4',
    'G-4', 'G-4', 'F-4', 'F-4', 'E-4', 'E-4', 'D-4',
    'C-4', 'C-4', 'G-4', 'G-4', 'A-4', 'A-4', 'G-4',
    'F-4', 'F-4', 'E-4', 'E-4', 'D-4', 'D-4', 'C-4',
]

const leftHandNoteOrder = ['C-3', 'C-3', 'F-3', 'C-3',
    'F-3', 'C-3', 'G-3', 'C-3',
    'C-3', 'F-3', 'C-3', 'G-3',
    'C-3', 'F-3', 'C-3', 'G-3',
    'C-3', 'C-3', 'F-3', 'C-3',
    'F-3', 'C-3', 'G-3', 'C-3',
    

]

const playTwinkleTwinkle = () => {

    const wait = (ms) => new Promise(resolve => setTimeout(resolve, ms))

    const playRightNotes = async () => {
        for (let i = 0; i < rightHandNoteOrder.length; i++) {
            let key = document.getElementById(rightHandNoteOrder[i]);
            playMusic(key)
            await wait(750)
          }
        return;
    }

    const playLeftNotes = async () => {
        for (let i = 0; i < leftHandNoteOrder.length; i++) {
            let key = document.getElementById(leftHandNoteOrder[i]);
            playMusic(key)
            await wait(1500)
          }
        return;
    }

    playRightNotes();
    // playLeftNotes();
}

export default playTwinkleTwinkle;