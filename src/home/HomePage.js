import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Header from  '../core/Header/Header'
import Image1 from '../mock/image-1.jpg'
import Image2 from '../mock/image-2.jpg'
import Image3 from '../mock/image-3.jpg'
import Image4 from '../mock/image-4.jpg'
import './home-page.css'

class HomePage extends Component {
  render() {
    return (
      <div className="home-page">
        <Header />
        <div className="home-container">
          <div className="welcome-wrapper">
            <h1>Welcome to Clouda Shop</h1>
            <p>Powered by <a href="https://fedecloud.io">Fedecloud</a> team</p>
          </div>
          <div className="home-box">
            <img className="space" src={Image3} />
          </div>
          <div className="home-box half left">
            <div className="image-container">
              <img className="space" src={Image2} />
              <Link className="link" to="/category/men">Shop now</Link>
            </div>
            <div className="image-container">
              <img src={Image1} />
              <Link className="link" to="/category/women">Shop now</Link>
            </div>
          </div>
          <div className="home-box half">
            <img src={Image4} />
            <Link className="link" to="/category/kids">Shop now</Link>
          </div>
        </div>
      </div>
    );
  }
}

export default HomePage;
