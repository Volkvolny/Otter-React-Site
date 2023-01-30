import React from 'react';
import '../App.css';
import {Button} from "./Button";
import './HeroSection.css';

function HeroSection() {
    return (
        <div className='hero-container'>
            <video src="/videos/otter2.mp4" autoPlay loop muted />
            <h1>ALL ABOUT OTTERS</h1>
            <p>Your one stop for otter knowledge</p>
            <div className='hero-btns'>
                <Button className='btns' path='/whatareotters' buttonStyle='btn--outline' buttonSize='btn--large'>GET STARTED</Button>
                <Button className='btns' path='otterpedia' buttonStyle='btn--primary' buttonSize='btn--large'>ABOUT AUTHOR</Button>
            </div>
        </div>
    )
}

export default HeroSection