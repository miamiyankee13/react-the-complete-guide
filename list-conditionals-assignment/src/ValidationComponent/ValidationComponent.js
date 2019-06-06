import React from 'react';

const ValidationComponent = props => {
    let output = null;

    if (props.length >= 5) {
        output = <p>Text long enough</p>
    } else {
        output = <p>Text too short</p>
    }
    
    return output;
}
export default ValidationComponent;