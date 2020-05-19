import React, { Component } from 'react'
import ImageGallery from 'react-image-gallery'

import img1 from '../img/galeria/01.png'
import img2 from '../img/galeria/02.png'
import img3 from '../img/galeria/03.png'
import img4 from '../img/galeria/04.jpg'
import img5 from '../img/galeria/05.png'
import img6 from '../img/galeria/06.jpg'
import img7 from '../img/galeria/07.png'
import img8 from '../img/galeria/08.png'

const images = [
    {
        original: img1
    },
    {
        original: img2
    },
    {
        original: img3
    },
    {
        original: img4
    },
    {
        original: img5
    },
    {
        original: img6
    },
    {
        original: img7
    },
    {
        original: img8
    },
]

class Galeria extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <>
                <div className="cabezote galeria" id={this.props.id}>
                    <ImageGallery
                        items={images}
                        lazyLoad={true}
                        showThumbnails={false}
                        showFullscreenButton={false}
                        showPlayButton={false}
                    />
                </div>
            </>
        )
    }
}

export default Galeria