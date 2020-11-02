import React from 'react';
import './FaceRecognition.styles.css';

const FaceRecognition = ({ imageUrl, box }) => {
    return (
        <div className='center ma' style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}  >
            <div className='absolute mt2 center'>
                <img src={imageUrl} id='inputimage' alt='' width='600px' height='auto' />
                {
                    box.map(box => {
                        return <div key={box.topRow} className='bounding-box' style={{ top: box.topRow, right: box.rightCol, bottom: box.bottomRow, left: box.leftCol }} ></div>
                    })
                }
            </div>
        </div>
    );
}

export default FaceRecognition;