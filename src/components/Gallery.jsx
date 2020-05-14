import React, { useState } from 'react';
import cat1 from '../img/cat1.jpg';
import './gallery.css';
import styled from 'styled-components';


const ButtonRow = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    transition: background-color 2s;
    padding: 0.5em;

    &:hover {
        background-color: aqua;
    }
    & button {
        margin: 0.5em;
    }
`;


const Gallery = () => {
    // Use a state variable to control the layout
    const [columns, setColumns] = useState(2);

    // Use a local variable for the exact value that the class property should have
    let columnsClass = 'gallery';
    if( columns === 1 ) {
        columnsClass += ' one-column';
    } else if( columns === 2 ) {
        columnsClass += ' two-columns';
    } else if( columns === 3 ) {
        columnsClass += ' three-columns';
    }

    const buttonStyle = {
        fontWeight: 'bold'
    };
    const button1Style = columns===1 ? buttonStyle : null;

    return (
        <div className={columnsClass}>
            <ButtonRow>
                <button onClick={() => setColumns(1)}
                    style={button1Style}>One column</button>
                <button onClick={() => setColumns(2)}
                    style={columns===2 ? buttonStyle : null}>Two columns</button>
                <button onClick={() => setColumns(3)}
                    style={columns===3 ? buttonStyle : null}>Three columns</button>
            </ButtonRow>

            {/* convenient, but the image is included in the JS bundle, which make the JS larger and slower to load */}
            <img src={cat1} alt="Cat 1" />
            {/* better, the images can be loaded asynchronously and be cached by the browser */}
            <img src="img/cat2.jpg" alt="Cat 2" />
            <img src="img/cat3.jpg" alt="Cat 3" />
            <img src="img/cat4.jpg" alt="Cat 4" />
            <img src="img/cat5.jpg" alt="Cat 5" />
            <img src="img/cat6.jpg" alt="Cat 6" />
        </div>
    );
}

export default Gallery;
