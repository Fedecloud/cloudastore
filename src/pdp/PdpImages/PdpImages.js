import React, { Component } from 'react'
import './pdp-images.css'

class PdpImages extends Component {
  constructor(props) {
    super(props)

    const [leadImage, ...images] = props.images

    this.state = {
      images,
      leadImage
    }
  }

  changeImage(index) {
    const images = this.state.images
    const selectedImage = images[index]
    images[index] = this.state.leadImage

    this.setState({
      images,
      leadImage: selectedImage
    })
  }

  renderSecondaryImages(images) {
    return images.map((image, i) => {
      return (
        <div className="secondary-image" key={i} onClick={() => this.changeImage(i)}>
          <img src={image} />
        </div>
      )
    })
  }

  render() {
    const {
      images,
      leadImage
    } = this.state

    return (
      <div className="images-container">
        <div className="secondary-images">
          {this.renderSecondaryImages(images)}
        </div>
        <div className="lead-image">
          <img src={leadImage} />
        </div>
      </div>
    );
  }
}

export default PdpImages;
