import React from 'react';
import Spline from '@splinetool/react-spline';
import { useCipher } from '../../hooks/useCipher.js';

const Hero = () => {
  const { displayText, scramble } = useCipher('ASYNTH');
  return (
    <section id="home" className="relative h-screen w-screen overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <Spline scene="https://prod.spline.design/UbqFZEhUfu40PE4i/scene.splinecode" />
      </div>
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
        <h1 className="font-space text-5xl md:text-6xl tracking-widest mb-4">WELCOME TO</h1>
        <button
          onMouseEnter={scramble}
          className="cipher-text text-6xl md:text-7xl bg-transparent cursor-default"
        >{displayText}</button>
        <p className="font-kusanagi text-2xl mt-6 max-w-xl">"Where Innovation Meets Intelligence"</p>
        <button className="glitch-button mt-10" data-label="FOLLOW">FOLLOW</button>
      </div>
    </section>
  );
};

export default Hero;
