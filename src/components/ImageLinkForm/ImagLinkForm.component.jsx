import React from 'react';
import './ImageLinkForm.styles.css';

// https://www.khl.ru/img/teamplayers_db/6053/22699.jpg

const ImageLinkForm = ({ onInputChange, onButtonSubmit }) => {

    return (
        <div className='detect-form'>
            <p className='f3'>
                {'This Magic Brain will detect faces in your pictures. Git it a try.'}
            </p>
            <div className='center'>
                <div className='form center pa4 br3 shadow-5'>
                    <input className='f4 pa2 w-70 center' type='text' onChange={onInputChange} />
                    <button
                        className='w-30 grow f4 link ph3 pv2 dib white bg-light-purple'
                        onClick={onButtonSubmit}
                    >Detect</button>
                </div>
            </div>
        </div>
    );
}

export default ImageLinkForm;