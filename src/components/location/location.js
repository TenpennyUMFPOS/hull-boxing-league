import React, { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import Canvas from './canvas/canvas';
import './location.css';
import Toreno from '../../assets/chars/Toreno.png';

const Location = () => {
    const [isTorenoVisible, setIsTorenoVisible] = useState(false);

    const handleClick = () => {
        toast('Finding this 📍 was the mission, and you, my friend, have failed spectacularly.');
        setIsTorenoVisible(true);

        setTimeout(() => {
            setIsTorenoVisible(false);
        }, 4000);
    };

    return (
        <div className='loc-cont'>
            <img className={`toreno ${isTorenoVisible ? 'visible' : ''}`} src={Toreno} alt='Toreno' />
            <div className='loc'>
                <h1 className='title'>Come say hi At Ganton Gym</h1>
                <Canvas />
            </div>
            <button className='hintBtn' onClick={handleClick}>
                Hint
            </button>
            <Toaster
                containerStyle={{
                    top: '6rem',
                }}
                position='top-right'
                reverseOrder={false}
            />
        </div>
    );
};

export default Location;
