import React from 'react';
import Logo from '../logo/logo.component';
import Clarifai from 'clarifai';

import { Link } from 'react-router-dom';

import ImageLinkForm from '../ImageLinkForm/ImagLinkForm.component';
import FaceRecognition from '../FaceRecognition/FaceRecognition.component';

// https://www.khl.ru/img/teamplayers_db/6053/22699.jpg


const app = new Clarifai.App({
    apiKey: '7ae13881190244dbb6a41deca3ed3346'
});


class Navigation extends React.Component {

    constructor() {
        super()

        this.state = {
            input: "",
            imageUrl: "",
            box: {},
        }
    }

    calculateFaceLocation = (data) => {
        const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box;
        const image = document.getElementById('inputimage');
        const width = Number(image.width);
        const height = Number(image.height);
        return {
            leftCol: clarifaiFace.left_col * width,
            topRow: clarifaiFace.top_row * height,
            rightCol: width - (clarifaiFace.right_col * width),
            bottomRow: height - (clarifaiFace.bottom_row * height)
        }
    }

    displayFaceBox = (box) => {
        console.log(box);
        this.setState({
            box: box
        })
    }



    onInputChange = (event) => {
        const { value } = event.target;
        this.setState({ input: value })
    }

    onButtonSubmit = () => {

        this.setState({ imageUrl: this.state.input, })

        app.models.predict(Clarifai.FACE_DETECT_MODEL, this.state.input)
            .then(response => this.displayFaceBox(this.calculateFaceLocation(response))
                .catch(err => console.log(err)));
    }


    render() {
        const { imageUrl, box } = this.state;
        return (
            <div>
                <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Logo style={{ border: '1px solid black' }} />
                    <div className='nav-links'  >
                        <Link to='/' className='f3 link dim black underline pa3 pointer'>Sign Out</Link>
                        <Link to='/info' className='f3 link dim black underline pa3 pointer'>How to Use</Link>
                        <a href='https://volovlikovevgeny.github.io/contacts/' className='f3 link dim black underline pa3 pointer'>RoboContact</a>
                    </div>
                </nav>
                <ImageLinkForm
                    onInputChange={this.onInputChange}
                    onButtonSubmit={this.onButtonSubmit} />
                <FaceRecognition
                    box={box}
                    imageUrl={imageUrl} />
            </div >
        );
    }
}

export default Navigation;




