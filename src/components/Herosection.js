import React from 'react'
import { NavLink } from 'react-router-dom'
import Buttons from './Buttons'

const Herosection = () => {
    return (
        <>
            <div className="hero-container">
                <video src="/videos/video-1.mp4" autoPlay loop muted/>
                <h1>ADVENTURE AWAITS</h1>
                <p>What are you waiting for?</p>
                <div className='hero-btns'>
                    <Buttons  btnref="/" btntext="get started" btnclassName="btn-hero-tranparent" />
                    <Buttons btnref="/" btntext="watch trailer" btnclassName="btn-hero-solid" />
                </div>
            </div>

        </>
    )
}

export default Herosection
