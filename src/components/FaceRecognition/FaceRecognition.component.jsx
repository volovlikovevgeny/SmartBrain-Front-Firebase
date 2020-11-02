import React from 'react';
import './FaceRecognition.styles.css';

// https://www.khl.ru/img/teamplayers_db/6053/22699.jpg

const FaceRecognition = ({ imageUrl, box }) => {
    return (
        <div className='center ma' style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}  >
            <div className='absolute mt2 center'>
                <img src={imageUrl} id='inputimage' alt='' width='380px' height='auto' />
                <div className='bounding-box' style={{ top: box.topRow, right: box.rightCol, bottom: box.bottomRow, left: box.leftCol }} ></div>
            </div>
        </div>
    );
}

export default FaceRecognition;