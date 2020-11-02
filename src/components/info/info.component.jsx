import React from 'react';
import './info.styles.css';


export default function Info() {
    return (
        <div className='info'>
            <div className='info-inner'>
                <div className='info-text'>Go to the Browser find image  with face or faces that you would like,by right clicking open Image in new tab and copy URL of the link.</div>
                <div className='info-img'><img style={{ width: '400px' }} src='https://i.ibb.co/LPVC1jm/35.png' alt="img1" /></div>
            </div>
            <div className='info-inner'>
                <div className='info-text'>Paste URL in this input.</div>
                <div className='info-img'><img style={{ width: '400px' }} src="https://i.ibb.co/h24JwZ6/36.png" alt="img1" /></div>
            </div>
            <div className='info-inner'>
                <div className='info-text'>Click Detect ans see the result.</div>
                <div className='info-img'><img style={{ width: '400px' }} src="https://i.ibb.co/WvdKv3b/33.png" alt="img1" /></div>
            </div>
        </div>
    )
}
