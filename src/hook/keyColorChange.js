import React from 'react';

const keyColorChange = (key, ms) => {
    console.log('keycolorchange called')
        key.style.backgroundColor = "grey";
        setTimeout(function() {
            key.style.backgroundColor = "white"
        }, ms * .5)
}

export default keyColorChange;